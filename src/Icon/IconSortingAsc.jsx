import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSortingAsc(props) {
  const type = TYPES.SORTING_ASC;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M3.24142136,7 C3.21489971,7 3.18946432,6.98946432 3.17071068,6.97071068 C3.13165825,6.93165825 3.13165825,6.86834175 3.17071068,6.82928932 L7.92928932,2.07071068 C7.96834175,2.03165825 8.03165825,2.03165825 8.07071068,2.07071068 L12.8292893,6.82928932 C12.848043,6.84804296 12.8585786,6.87347835 12.8585786,6.9 C12.8585786,6.95522847 12.8138071,7 12.7585786,7 L3.24142136,7 Z" />
    </IconPrimitive>
  );
}

IconSortingAsc.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSortingAsc.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSortingAsc.REFS = REFS;
