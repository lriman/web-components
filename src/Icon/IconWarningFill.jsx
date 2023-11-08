import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconWarningFill(props) {
  const type = TYPES.WARNING_FILL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
      <path d="M11.4 13.5V8H12.6V13.5H11.4ZM11.4 16V15H12.6V16H11.4Z" fill="white" />
    </IconPrimitive>
  );
}

IconWarningFill.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconWarningFill.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconWarningFill.REFS = REFS;
