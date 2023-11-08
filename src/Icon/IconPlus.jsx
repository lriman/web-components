import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPlus(props) {
  const type = TYPES.PLUS;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M11 11L-4.80825e-07 11L-5.24537e-07 12L11 12L11 23L12 23L12 12L23 12L23 11L12 11L12 -4.80825e-07L11 -5.24537e-07L11 11Z" />
    </IconPrimitive>
  );
}

IconPlus.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPlus.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPlus.REFS = REFS;
