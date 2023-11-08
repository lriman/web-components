import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '../../Card';
import { Span, Block } from '../../Typography';
import Grid, { Item } from '../../Grid';
import zeroPad from '../../_utils/zeroPad';
import IconAlarmClock from '../../Icon/IconAlarmClock';

const timeRenderer = counter => {
  if (counter < 0) counter = 0;
  return (
    <Block margin="xs">
      <Span size="l" color="negative">{`00:${zeroPad(counter)}`}</Span>
    </Block>
  );
};

const GameNotationCountdown = props => {
  const { ts } = props;
  const [counter, setCounter] = useState(ts / 1000);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Grid justify="end" alignItems="center" spacing="s">
      <Item>
        <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
          <IconAlarmClock size="xs" color="negative" />
        </Card>
      </Item>
      <Item>{timeRenderer(counter)}</Item>
    </Grid>
  );
};

GameNotationCountdown.propTypes = {
  ts: PropTypes.number.isRequired,
};

export default GameNotationCountdown;
