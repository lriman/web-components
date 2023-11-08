import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconOpenNewWindow(props) {
  const type = TYPES.OPEN_NEW_WINDOW;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M8,1 L2,1 C1.44772,1 1,1.44772 1,2 L1,14 C1,14.5523 1.44772,15 2,15 L14,15 C14.5523,15 15,14.5523 15,14 L15,8 L16,8 L16,14 C16,15.1046 15.1046,16 14,16 L2,16 C0.895431,16 0,15.1046 0,14 L0,2 C0,0.895431 0.895431,0 2,0 L8,0 L8,1 Z M14.1265,1.166504 L10.6667,1.166504 L10.6667,0.166504 L15.3334,0.166504 C15.6095,0.166504 15.8334,0.390362 15.8334,0.666504 L15.8334,5.33317 L14.8334,5.33317 L14.8334,1.87391 L8.35356,8.35375 L7.64645,7.64665 L14.1265,1.166504 Z" />
    </IconPrimitive>
  );
}

IconOpenNewWindow.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconOpenNewWindow.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconOpenNewWindow.REFS = REFS;
