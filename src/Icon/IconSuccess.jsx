import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSuccess(props) {
  const type = TYPES.SUCCESS;

  return (
    <IconPrimitive {...props} type={type} viewBox={18}>
      <path d="M16.65 2.97L17.35 3.68L6 15.03L0.65 9.68L1.35 8.97L6 13.62L16.65 2.97Z" id="b3SjoNay2" />
    </IconPrimitive>
  );
}

IconSuccess.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSuccess.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSuccess.REFS = REFS;
