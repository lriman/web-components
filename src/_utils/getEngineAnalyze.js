import Chess from 'chess.js';

export default function getEngineAnalyze(id, engine, fen, onAnalyze, multiPv, depth) {
  const lines = [];
  const engineStatus = {};

  for (let i = 0; i < multiPv; i += 1) {
    lines.push({});
  }

  function uciCmd(cmd) {
    engine.postMessage(cmd);
  }

  const prepareAnalyze = () => {
    uciCmd('uci');
    uciCmd('ucinewgame');
    uciCmd(`setoption name MultiPV value ${multiPv}`);
    uciCmd(`position fen ${fen}`);
    uciCmd(`go depth ${depth}`);
  };

  prepareAnalyze();

  engine.onmessage = event => {
    let line;

    if (event && typeof event === 'object') {
      line = event.data;
    } else {
      line = event;
    }

    if (line === 'uciok') {
      engineStatus.engineLoaded = true;
    } else if (line === 'readyok') {
      engineStatus.engineReady = true;
    } else if (typeof line === 'string') {
      const part = line.split(' ');

      const moves = [];
      let score = 0;
      let multipv = 1;
      let mate;
      let isPv = false;
      const chess = new Chess(fen);

      for (let i = 0; i < part.length; i += 1) {
        if (part[i] === 'score') {
          if (part[i + 1] === 'cp') score = parseInt(part[i + 2], 10) / 100;
          if (part[i + 1] === 'mate') mate = parseInt(part[i + 2], 10);
        }
        if (part[i] === 'multipv') {
          multipv = parseInt(part[i + 1], 10);
        }
        if (isPv && part[i] !== 'bmc') moves.push(part[i]);
        if (part[i] === 'pv') isPv = true;
        if (part[i] === 'bestmove') isPv = true;
        if (part[i] === 'bmc') isPv = false;
      }

      if (chess.turn() === 'b') score *= -1;

      if (!part.includes('bestmove')) {
        const m = (moves.length && moves[0]) || '';
        const pvn = multipv - 1;

        lines[pvn].move = m;
        lines[pvn].score = score;
        lines[pvn].mate = mate;
        lines[pvn].best = moves;
        lines[pvn].bestMoveDetails = chess.move(m, { sloppy: true });
      }

      if (part.includes('bestmove')) onAnalyze([{ id, lines }]);
    }
  };
}
