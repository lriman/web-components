import React, { Component } from 'react';
import PropTypes from 'prop-types';

const center = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const size = width => ({
  width: width / 4,
  height: width / 4,
});

const defaultSquareStyle = props => {
  const { width, squareColor, isOver, darkSquareStyle, lightSquareStyle, dropSquareStyle } = props;

  return {
    ...{
      ...size(width),
      ...center,
      ...(squareColor === 'black' ? darkSquareStyle : lightSquareStyle),
      ...(isOver && dropSquareStyle),
    },
  };
};

defaultSquareStyle.propTypes = {
  width: PropTypes.number.isRequired,
  squareColor: PropTypes.oneOf(['white', 'black']).isRequired,
  isOver: PropTypes.bool.isRequired,
  lightSquareStyle: PropTypes.shape().isRequired,
  darkSquareStyle: PropTypes.shape().isRequired,
  dropSquareStyle: PropTypes.shape().isRequired,
};

class Square extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    squareColor: PropTypes.oneOf(['white', 'black']).isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
    square: PropTypes.string.isRequired,
    squareStyles: PropTypes.shape().isRequired,
    setSquareCoordinates: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { square, setSquareCoordinates } = this.props;

    const { x, y } = this[square].getBoundingClientRect();
    setSquareCoordinates(x, y, square);
  }

  render() {
    const { width, squareColor, children, square, squareStyles } = this.props;

    return (
      <div
        data-testid={`${squareColor}-square`}
        data-squareid={square}
        ref={(ref) => (this[square] = ref)} // eslint-disable-line
        style={defaultSquareStyle(this.props)}
      >
        <div
          style={{
            ...size(width),
            ...center,
            ...(squareStyles[square] && squareStyles[square]),
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Square;
