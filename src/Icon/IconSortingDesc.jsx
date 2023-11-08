import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSortingDesc(props) {
  const type = TYPES.SORTING_DESC;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M3.24142136,9 L12.7585786,9 C12.8138071,9 12.8585786,9.04477153 12.8585786,9.1 C12.8585786,9.12652165 12.848043,9.15195704 12.8292893,9.17071068 L8.07071068,13.9292893 C8.03165825,13.9683418 7.96834175,13.9683418 7.92928932,13.9292893 L3.17071068,9.17071068 C3.13165825,9.13165825 3.13165825,9.06834175 3.17071068,9.02928932 C3.18946432,9.01053568 3.21489971,9 3.24142136,9 Z" />
    </IconPrimitive>
  );
}

IconSortingDesc.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSortingDesc.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSortingDesc.REFS = REFS;
