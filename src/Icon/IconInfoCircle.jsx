import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconInfoCircle(props) {
  const type = TYPES.INFO_CIRCLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M24,12 C24,18.6274 18.6274,24 12,24 C5.37258,24 0,18.6274 0,12 C0,5.37258 5.37258,0 12,0 C18.6274,0 24,5.37258 24,12 Z M23,12 C23,5.92487 18.0751,1 12,1 C5.92487,1 1,5.92487 1,12 C1,18.0751 5.92487,23 12,23 C18.0751,23 23,18.0751 23,12 Z M11.1424,17.9678 L9.85657,18.082 L9.85657,18.8555 L13.7677,18.8555 L13.7677,18.082 L12.5172,17.9678 L12.5172,9.3457 L9.85657,9.3457 L9.85657,10.1279 L11.1424,10.2422 L11.1424,17.9678 Z M11.1424,6.62109 L12.5172,6.62109 L12.5172,5.14453 L11.1424,5.14453 L11.1424,6.62109 Z" />
    </IconPrimitive>
  );
}

IconInfoCircle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconInfoCircle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconInfoCircle.REFS = REFS;
