import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowUp(props) {
  const type = TYPES.ARROW_UP;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <polygon points="13.4693939 11.29 8.00000024 5.82824911 2.53060662 11.29 1.47000003 10.2308754 8.00000024 3.71000004 14.5300004 10.2308754" />
    </IconPrimitive>
  );
}

IconArrowUp.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowUp.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowUp.REFS = REFS;
