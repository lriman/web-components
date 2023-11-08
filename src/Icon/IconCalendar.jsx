import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCalendar(props) {
  const type = TYPES.CALENDAR;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6V7H7V6H5V9H19V6H17V7H16V6H8ZM8 5H16V3H17V5H20V20H4V5H7V3H8V5ZM19 10H5V19H19V10Z"
        fillOpacity="0.87"
      />
    </IconPrimitive>
  );
}

IconCalendar.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCalendar.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCalendar.REFS = REFS;
