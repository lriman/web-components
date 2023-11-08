import React, { PureComponent } from 'react';
import Card from '../Card';
import Layout from '../Layout';
import GameNotation from '../GameNotation';
import getFormattedArray from '../_utils/getFormattedArray';

export const MOVES = [
  { color: 'w', from: 'a4', piece: 'p', san: 'Pa5', to: 'a5', isSuccess: true },
  { color: 'b', from: 'a2', piece: 'k', san: 'Kb1', to: 'b1', isError: true },
  {
    color: 'w',
    from: 'a5',
    piece: 'p',
    san: 'Pa6',
    to: 'a6',
    items: [
      [
        { color: 'w', from: 'a4', piece: 'p', san: 'Pa5', to: 'a5', isSuccess: true },
        { color: 'b', from: 'a2', piece: 'k', san: 'Kb1', to: 'b1', isError: true },
        { color: 'b', from: 'a2', piece: 'k', san: 'Kb1', to: 'b1' },
      ],
    ],
  },
  { color: 'b', from: 'b2', piece: 'r', san: 'Rb6', to: 'b6' },
];

export default class GameNotationInlineExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moveId: [2],
    };
  }

  onChangeMove = move => {
    this.setState({ moveId: move.moveId });
  };

  render() {
    const { moveId } = this.state;
    return (
      <Layout>
        <Layout.Section type="normal">
          <Card style={{ width: '650px', height: '220px' }}>
            <GameNotation.Inline
              active={moveId.join('-')}
              notation={getFormattedArray(MOVES, 4)}
              settings={{ notationIcon: true }}
              onChangeMove={this.onChangeMove}
            />
          </Card>
        </Layout.Section>
      </Layout>
    );
  }
}
