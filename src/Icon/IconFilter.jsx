import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconFilter(props) {
  const type = TYPES.EYE_OPEN;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M6,8.3576377 L1,3.1911377 L1,0.488811193 L15,0.488811193 L15,3.1911377 L10,8.3576377 L10,12.3999888 L6,15.5111888 L6,8.3576377 Z M14,1.48881119 L2,1.48881119 L2,2.78648468 L7,7.95298468 L7,13.4665136 L9,11.9109136 L9,7.95298468 L14,2.78648468 L14,1.48881119 Z" />
    </IconPrimitive>
  );
}

IconFilter.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconFilter.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconFilter.REFS = REFS;
