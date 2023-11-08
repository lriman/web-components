import React, { PureComponent } from 'react';
import { CHESSBOARD_STYLES } from '../Chessboard/_constants';

import Grid, { Item } from '../Grid';
import Block from '../Typography/Block';
import SimpleBoard from '../SimpleBoard';

const BOARDS = [
  {
    id: 1,
    boardStyle: CHESSBOARD_STYLES.PURPLE,
  },
  {
    id: 2,
    boardStyle: CHESSBOARD_STYLES.MASTER,
  },
  {
    id: 3,
    boardStyle: CHESSBOARD_STYLES.BLUE_CONTRAST,
  },
];

export default class InputCheckboxExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      pieceStyle: 'set1',
      position: '1n2kbnr/pppppppp/8/6R1/qr5P/1Nb2PQP/P3PPPP/2B1KBNR w Kk - 0 1',
    };
  }

  onChange = id => () => {
    this.setState({ active: id });
  };

  render() {
    const { active, pieceStyle, position } = this.state;

    return (
      <Grid>
        {BOARDS.map(item => (
          <Item key={item.id}>
            <Block onClick={this.onChange(item.id)}>
              <SimpleBoard
                id={item.id}
                pieceStyle={pieceStyle}
                position={position}
                boardStyle={item.boardStyle}
                isBordered={active === item.id}
              />
            </Block>
          </Item>
        ))}
      </Grid>
    );
  }
}
