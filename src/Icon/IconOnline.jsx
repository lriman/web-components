import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconOnline(props) {
  const type = TYPES.ONLINE;

  return (
    <IconPrimitive {...props} type={type} viewBox={12}>
      <path d="M0 6C0 2.69 2.69 0 6 0C9.31 0 12 2.69 12 6C12 9.31 9.31 12 6 12C2.69 12 0 9.31 0 6Z" fill="#FFFFFF" />
      <path d="M10 6C10 3.79 8.21 2 6 2C3.79 2 2 3.79 2 6C2 8.21 3.79 10 6 10C8.21 10 10 8.21 10 6Z" />
    </IconPrimitive>
  );
}

IconOnline.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconOnline.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconOnline.REFS = REFS;
