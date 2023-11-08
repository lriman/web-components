import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconNotEqual(props) {
  const type = TYPES.NOT_EQUAL;
  return (
    <IconPrimitive {...props} type={type} viewBox={20}>
      <rect x="7" y="8" width="6" height="1" />
      <rect x="7" y="11" width="6" height="1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.9999 14L11.9999 6.00003L12.8479 6.53003L7.8479 14.53L6.9999 14Z"
      />
    </IconPrimitive>
  );
}

IconNotEqual.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconNotEqual.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconNotEqual.REFS = REFS;
