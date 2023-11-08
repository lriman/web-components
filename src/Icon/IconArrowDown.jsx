import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowDown(props) {
  const type = TYPES.ARROW_DOWN;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <polygon points="2.53060662 4.71000004 8.00000024 10.1717509 13.4693939 4.71000004 14.5300004 5.76912457 8.00000024 12.29 1.47000003 5.76912457" />
    </IconPrimitive>
  );
}

IconArrowDown.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowDown.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowDown.REFS = REFS;
