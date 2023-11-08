import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconRookBlackSet3(props) {
  const type = TYPES.ROOK_BLACK_SET_3;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5 38.5C34.5 36 33 32.5 31.5 32.5C23.8848 32.5 21.1153 32.5 13.5 32.5C12 32.5 10.5 36 10.5 38.5H34.5Z"
        fill="#2C2F37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 8.50002V12.5H24.5V8.50002H20.5V12.5H17.5V8.50002H13.5V15.5L17 18H28L31.5 15.5V8.50002H27.5Z"
        fill="#2C2F37"
      />
      <path d="M13.5 32.5H31.5L28 18H17L13.5 32.5Z" fill="#2C2F37" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 8.00002H18V12H20V8.00002H25V12H27V8.00002H32V15.7573L28.5653 18.2107L31.9072 32.0558C32.3102 32.1666 32.6663 32.4305 32.9627 32.7402C33.3636 33.1589 33.7192 33.7253 34.0144 34.3485C34.6038 35.5929 35 37.1657 35 38.5V39H10V38.5C10 37.1657 10.3962 35.5929 10.9857 34.3485C11.2808 33.7253 11.6364 33.1589 12.0373 32.7402C12.3338 32.4305 12.6898 32.1666 13.0929 32.0558L16.4348 18.2107L13 15.7573V8.00002ZM17.3937 18.5L14.1351 32H30.865L27.6064 18.5H17.3937ZM27.8398 17.5L31 15.2427V9.00002H28V13H24V9.00002H21V13H17V9.00002H14V15.2427L17.1603 17.5H27.8398ZM13.5 33C13.3227 33 13.07 33.1076 12.7596 33.4317C12.4574 33.7474 12.1567 34.2122 11.8894 34.7766C11.4283 35.7499 11.102 36.9431 11.0201 38H33.98C33.8981 36.9431 33.5717 35.7499 33.1107 34.7766C32.8433 34.2122 32.5427 33.7474 32.2404 33.4317C31.9301 33.1076 31.6773 33 31.5 33H13.5Z"
        fill="white"
      />
    </IconPrimitive>
  );
}

IconRookBlackSet3.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRookBlackSet3.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRookBlackSet3.REFS = REFS;
