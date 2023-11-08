import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconEqual(props) {
  const type = TYPES.EQUAL;
  return (
    <IconPrimitive {...props} type={type} viewBox={20}>
      <rect x="7" y="8" width="6" height="1" />
      <rect x="7" y="11" width="6" height="1" />
    </IconPrimitive>
  );
}

IconEqual.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconEqual.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconEqual.REFS = REFS;
