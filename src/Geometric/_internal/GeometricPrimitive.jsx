import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, TYPES, REFS } from '../_constants';
import { StyledGeometric, StyledGeometricSvg } from '../_style';

export default function GeometricPrimitive(props) {
  const { type, color, width, height, children, ...rest } = props;

  return (
    <StyledGeometric {...addDataAttributes({ component: COMPONENTS.GENERAL, type })} sType={type} {...rest}>
      <StyledGeometricSvg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        focusable="false"
        sColor={color}
      >
        {children}
      </StyledGeometricSvg>
    </StyledGeometric>
  );
}

GeometricPrimitive.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  color: PropTypes.oneOf(Object.values(REFS.COLORS)).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
