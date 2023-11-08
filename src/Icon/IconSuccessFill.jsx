import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSuccessFill(props) {
  const type = TYPES.SUCCESS_FILL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
      <path d="M10.5 15.5L7 12L8 11L10.5 13.5L15.5 8.5L16.5 9.5L10.5 15.5Z" fill="white" />
    </IconPrimitive>
  );
}

IconSuccessFill.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSuccessFill.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSuccessFill.REFS = REFS;
