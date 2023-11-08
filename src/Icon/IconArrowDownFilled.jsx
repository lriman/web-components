import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowDownFilled(props) {
  const type = TYPES.ARROW_DOWN_FILLED;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M3.24142136,6 L12.7585786,6 C12.8138071,6 12.8585786,6.04477153 12.8585786,6.1 C12.8585786,6.12652165 12.848043,6.15195704 12.8292893,6.17071068 L8.07071068,10.9292893 C8.03165825,10.9683418 7.96834175,10.9683418 7.92928932,10.9292893 L3.17071068,6.17071068 C3.13165825,6.13165825 3.13165825,6.06834175 3.17071068,6.02928932 C3.18946432,6.01053568 3.21489971,6 3.24142136,6 Z" />
    </IconPrimitive>
  );
}

IconArrowDownFilled.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowDownFilled.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowDownFilled.REFS = REFS;
