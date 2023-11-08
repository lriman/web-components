import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, TYPES, REFS } from '../_constants';
import { StyledIcon, StyledIconSvg } from '../_style';

export default function IconPrimitive(props) {
  const { type, size, display, color, fill, viewBox, children, ...rest } = props;

  return (
    <StyledIcon
      {...addDataAttributes({ component: COMPONENTS.GENERAL, type })}
      sSize={size}
      sDisplay={display}
      {...rest}
    >
      <StyledIconSvg viewBox={`0 0 ${viewBox} ${viewBox}`} focusable="false" sColor={color} sFill={fill}>
        {children}
      </StyledIconSvg>
    </StyledIcon>
  );
}

IconPrimitive.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.string,
  fill: PropTypes.string,
  viewBox: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

IconPrimitive.defaultProps = {
  type: null,
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
  fill: null,
};
