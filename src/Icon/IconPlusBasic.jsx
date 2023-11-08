import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPlusBasic(props) {
  const type = TYPES.PLUS_BASIC;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="11.5 11.5 11.5 6 12.5 6 12.5 11.5 18 11.5 18 12.5 12.5 12.5 12.5 18 11.5 18 11.5 12.5 6 12.5 6 11.5" />
    </IconPrimitive>
  );
}

IconPlusBasic.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPlusBasic.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPlusBasic.REFS = REFS;
