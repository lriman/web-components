import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { COLUMNS } from './helpers';
import IconSuccessFill from '../../Icon/IconSuccessFill';
import {
  StyledSimpleBoardBorder,
  StyledSimpleBoardEdgeBorder,
  StyledSimpleBoardRow,
  StyledSimpleBoardRowIcon,
} from '../_style';

const rowStyles = width => ({
  display: 'flex',
  flexWrap: 'nowrap',
  width,
});

class Row extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    orientation: PropTypes.string.isRequired,
    boardStyle: PropTypes.string.isRequired,
    isBordered: PropTypes.bool.isRequired,
    children: PropTypes.func.isRequired,
    boardId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  render() {
    const { width, boardStyle, orientation, children, boardId, isBordered } = this.props;
    const alpha = COLUMNS;
    let row = 4;
    let squareColor = 'white';
    if (orientation === 'black') row = 1;

    return (
      <StyledSimpleBoardEdgeBorder isBordered={isBordered} data-boardid={boardId}>
        <StyledSimpleBoardBorder width={width} isBordered={isBordered}>
          <StyledSimpleBoardRow boardStyle={boardStyle}>
            {[...Array(4)].map((_, r) => { //eslint-disable-line
              row = orientation === 'black' ? row + 1 : row - 1;

              return (
                <div key={r.toString()}>
                  {isBordered && (
                    <StyledSimpleBoardRowIcon>
                      <IconSuccessFill size="s" color="accent1" />
                    </StyledSimpleBoardRowIcon>
                  )}
                  <div style={rowStyles(width)}>
                  {[...Array(4)].map((_, col) => { //eslint-disable-line
                      const square = orientation === 'black' ? alpha[3 - col] + (row - 1) : alpha[col] + (row + 1);

                      if (col !== 0) {
                        squareColor = squareColor === 'black' ? 'white' : 'black';
                      }
                      return children({ square, squareColor, col, row, alpha });
                    })}
                  </div>
                </div>
              );
            })}
          </StyledSimpleBoardRow>
        </StyledSimpleBoardBorder>
      </StyledSimpleBoardEdgeBorder>
    );
  }
}

export default Row;
