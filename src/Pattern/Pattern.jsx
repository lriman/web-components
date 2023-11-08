import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, SIZE } from './_constants';
import { StyledPattern, StyledPatternSvg, StyledPatternRect } from './_style';

function renderRow(colorType, colors, startPoint, size, rInd, items) {
  return items.map((item, cInd) => {
    const x = startPoint.x + cInd * size;
    const y = startPoint.y + rInd * size;
    if (Array.isArray(item)) {
      return <Fragment key={cInd}>{renderItems(colorType, colors, { x, y }, size / item.length, item)}</Fragment>; /* eslint-disable-line */
    }
    return <StyledPatternRect key={cInd} sColorType={colorType} sColors={colors} sColor={item} x={x} y={y} width={size} height={size} />; /* eslint-disable-line */
  });
}

function renderItems(colorType, colors, startPoint, size, items) {
  return items.map((item, rInd) => <Fragment key={rInd}>{renderRow(colorType, colors, startPoint, size, rInd, item)}</Fragment>); /* eslint-disable-line */
}

export default function Pattern(props) {
  const { items, colors } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const height = items.length * SIZE;
  const width = items[0].length * SIZE;

  return (
    <StyledPattern {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} sHeight={height}>
      <StyledPatternSvg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        focusable="false"
      >
        {renderItems(colorType, colors, { x: 0, y: 0 }, SIZE, items)}
      </StyledPatternSvg>
    </StyledPattern>
  );
}

Pattern.propTypes = {
  items: PropTypes.array.isRequired, /* eslint-disable-line */
  colors: PropTypes.shape({}), /* eslint-disable-line */
};

Pattern.defaultProps = {
  colors: null,
};
