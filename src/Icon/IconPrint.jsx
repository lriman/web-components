import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPrint(props) {
  const type = TYPES.PRINT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M5,13 L19,13 L19,22 C19,22.5523 18.5523,23 18,23 L6,23 C5.44772,23 5,22.5523 5,22 L5,13 Z M18,22 L18,14 L6,14 L6,22 L18,22 Z M19,5 L22,5 C22.5523,5 23,5.44771 23,6 L23,15 C23,15.5523 22.5523,16 22,16 L20,16 L20,15 L22,15 L22,6 L19,6 L2,6 L2,15 L4,15 L4,16 L2,16 C1.44772,16 1,15.5523 1,15 L1,6 C1,5.44771 1.44772,5 2,5 L5,5 L5,2 C5,1.44772 5.44772,1 6,1 L18,1 C18.5523,1 19,1.44772 19,2 L19,5 Z M18,5 L18,2 L6,2 L6,5 L18,5 Z M20,9 C20.5523,9 21,8.55228 21,8 C21,7.44772 20.5523,7 20,7 C19.4477,7 19,7.44772 19,8 C19,8.55228 19.4477,9 20,9 Z M8,16 L16,16 L16,17 L8,17 L8,16 Z M14,19 L14,20 L8,20 L8,19 L14,19 Z" />
    </IconPrimitive>
  );
}

IconPrint.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPrint.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPrint.REFS = REFS;
