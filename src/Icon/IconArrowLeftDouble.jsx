import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowLeftDouble(props) {
  const type = TYPES.ARROW_LEFT_DOUBLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M8.78999996,2.5306602 L3.32824911,8.00033011 L8.78999996,13.47 L7.73087543,14.5306602 L1.21000004,8.00033011 L7.73087543,1.47000003 L8.78999996,2.5306602 Z M13.79,2.5306602 L8.32824911,8.00033011 L13.79,13.47 L12.7308754,14.5306602 L6.21000004,8.00033011 L12.7308754,1.47000003 L13.79,2.5306602 Z" />
    </IconPrimitive>
  );
}

IconArrowLeftDouble.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowLeftDouble.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowLeftDouble.REFS = REFS;
