import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessClock(props) {
  const type = TYPES.CHESS_CLOCK;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4H6V3H9V4H8V6H16V4H15V3H18V4H17V6H22V20H20V21H19V20H5V21H4V20H2V6H7V4ZM3 7V19H21V7H3ZM4 12.5C4 10.567 5.567 9 7.5 9C9.433 9 11 10.567 11 12.5C11 14.433 9.433 16 7.5 16C5.567 16 4 14.433 4 12.5ZM7.5 10C6.11929 10 5 11.1193 5 12.5C5 13.8807 6.11929 15 7.5 15C8.88071 15 10 13.8807 10 12.5C10 11.1193 8.88071 10 7.5 10ZM13 12.5C13 10.567 14.567 9 16.5 9C18.433 9 20 10.567 20 12.5C20 14.433 18.433 16 16.5 16C14.567 16 13 14.433 13 12.5ZM16.5 10C15.1193 10 14 11.1193 14 12.5C14 13.8807 15.1193 15 16.5 15C17.8807 15 19 13.8807 19 12.5C19 11.1193 17.8807 10 16.5 10ZM8.85355 11.8536L7.35355 13.3536L6.64645 12.6464L8.14645 11.1464L8.85355 11.8536ZM15.8536 11.1464L17.3536 12.6464L16.6464 13.3536L15.1464 11.8536L15.8536 11.1464Z"
        fillOpacity="0.87"
      />
    </IconPrimitive>
  );
}

IconChessClock.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessClock.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessClock.REFS = REFS;
