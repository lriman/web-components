import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowRightDouble(props) {
  const type = TYPES.ARROW_RIGHT_DOUBLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M7.21000004,13.47 L12.6717509,8.00033011 L7.21000004,2.5306602 L8.26912457,1.47000003 L14.79,8.00033011 L8.26912457,14.5306602 L7.21000004,13.47 Z M2.21000004,13.47 L7.67175089,8.00033011 L2.21000004,2.5306602 L3.26912457,1.47000003 L9.78999996,8.00033011 L3.26912457,14.5306602 L2.21000004,13.47 Z" />
    </IconPrimitive>
  );
}

IconArrowRightDouble.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowRightDouble.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowRightDouble.REFS = REFS;
