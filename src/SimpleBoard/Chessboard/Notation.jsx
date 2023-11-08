import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const getRow = (orientation, row) => (orientation === 'white' ? row + 1 : row - 1);

const getColumn = (orientation, alpha, col) => (orientation === 'black' ? alpha[7 - col] : alpha[col]);

const columnStyle = ({ col, width, blackColor, whiteColor }) => ({
  fontSize: width / 26,
  color: col % 2 !== 0 ? blackColor : whiteColor,
});

const rowStyle = ({ row, width, blackColor, whiteColor, orientation, isBottomLeftSquare, isRow }) => {
  return {
    fontSize: width / 26,
    color:
      orientation === 'black' // eslint-disable-line
        ? isRow && !isBottomLeftSquare && row % 2 === 0
          ? blackColor
          : whiteColor
        : isRow && !isBottomLeftSquare && row % 2 !== 0
        ? blackColor
        : whiteColor,
  };
};

const alphaStyle = (width, top) => {
  if (top) {
    return {
      right: 2,
      bottom: width / 5,
    };
  }
  return {
    right: 2,
    top: width / 5,
  };
};

const numericStyle = (width, right) => {
  if (right) {
    return {
      alignSelf: 'end',
      left: width / 4.5,
    };
  }
  return {
    alignSelf: 'end',
    right: width / 4.5,
  };
};

const notationStyle = {
  fontFamily: 'Helvetica Neue',
  zIndex: 3,
  position: 'absolute',
  userSelect: 'none',
};

function renderSquare({ orientation, row, width, alpha, col }, { whiteColor }, right, left) {
  return (
    <>
      <div
        data-testid={`bottom-left-${getRow(orientation, row)}`}
        style={{
          ...notationStyle,
          ...{ fontSize: width / 26, color: whiteColor },
          ...numericStyle(width, right),
        }}
      >
        {getRow(orientation, row)}
      </div>
      <div
        data-testid={`bottom-left-${getColumn(orientation, alpha, col)}`}
        style={{
          ...notationStyle,
          ...{ fontSize: width / 26, color: whiteColor },
          ...alphaStyle(width, left),
        }}
      >
        {getColumn(orientation, alpha, col)}
      </div>
    </>
  );
}

renderSquare.propTypes = {
  orientation: PropTypes.string.isRequired,
  row: PropTypes.shape().isRequired,
  col: PropTypes.shape().isRequired,
  width: PropTypes.number.isRequired,
  alpha: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function renderLetters({ orientation, width, alpha, col }, { whiteColor, blackColor }, top) {
  return (
    <div
      data-testid={`column-${getColumn(orientation, alpha, col)}`}
      style={{
        ...notationStyle,
        ...columnStyle({ col, width, blackColor, whiteColor }),
        ...alphaStyle(width, top),
      }}
    >
      {getColumn(orientation, alpha, col)}
    </div>
  );
}

renderLetters.propTypes = {
  orientation: PropTypes.string.isRequired,
  col: PropTypes.shape().isRequired,
  width: PropTypes.number.isRequired,
  alpha: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function renderNumbers({ orientation, row, width }, { whiteColor, blackColor, isRow, isBottomLeftSquare }, right) {
  return (
    <div
      style={{
        ...notationStyle,
        ...rowStyle({
          row,
          width,
          blackColor,
          whiteColor,
          orientation,
          isBottomLeftSquare,
          isRow,
        }),
        ...numericStyle(width, right),
      }}
    >
      {getRow(orientation, row)}
    </div>
  );
}

renderNumbers.propTypes = {
  orientation: PropTypes.string.isRequired,
  row: PropTypes.shape().isRequired,
  width: PropTypes.number.isRequired,
};

class Notation extends PureComponent {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    orientation: PropTypes.string.isRequired,
    notationStyles: PropTypes.shape().isRequired,
  };

  render() {
    const { row, col, orientation, notationStyles } = this.props;

    const whiteColor = notationStyles.color;
    const blackColor = notationStyles.color;

    const isRow = col === 0;
    const isTopRow = col === 7;
    const isColumn = (orientation === 'white' && row === 0) || (orientation === 'black' && row === 9);
    const isTopColumn = (orientation === 'black' && row === 2) || (orientation === 'white' && row === 7);
    const isBottomLeftSquare = isRow && isColumn;
    const isBottomRightSquare = isTopRow && isColumn;
    const isTopRightSquare = isTopRow && isTopColumn;
    const isTopLeftSquare = isRow && isTopColumn;

    if (isBottomLeftSquare) {
      return renderSquare(this.props, { whiteColor });
    }

    if (isBottomRightSquare) {
      return renderSquare(this.props, { whiteColor }, true, false);
    }

    if (isTopRightSquare) {
      return renderSquare(this.props, { whiteColor }, true, true);
    }

    if (isTopLeftSquare) {
      return renderSquare(this.props, { whiteColor }, false, true);
    }

    if (isColumn) {
      return renderLetters(this.props, {
        whiteColor,
        blackColor,
      });
    }

    if (isTopColumn) {
      return renderLetters(
        this.props,
        {
          whiteColor,
          blackColor,
        },
        true,
      );
    }

    if (isRow) {
      return renderNumbers(this.props, {
        whiteColor,
        blackColor,
        isRow,
        isBottomLeftSquare,
      });
    }

    if (isTopRow) {
      return renderNumbers(
        this.props,
        {
          whiteColor,
          blackColor,
          isRow,
          isBottomLeftSquare,
        },
        true,
      );
    }

    return null;
  }
}

export default Notation;
