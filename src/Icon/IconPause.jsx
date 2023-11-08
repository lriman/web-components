import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPause(props) {
  const type = TYPES.PAUSE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 5H7V19H10V5ZM6 4V20H11V4H6Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 5H14V19H17V5ZM13 4V20H18V4H13Z" />
    </IconPrimitive>
  );
}

IconPause.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPause.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPause.REFS = REFS;
