import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessboardMulti(props) {
  const type = TYPES.CHESSBOARD_MULTI;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M12 12V8H8V12H12Z" />
      <path d="M12 12V16H16V12H12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3V17H7V21H21V7H16V3H3ZM16 8V12H20V16H16V20H12V16H8V12H4V8H8V4H12V8H16Z"
      />
    </IconPrimitive>
  );
}

IconChessboardMulti.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessboardMulti.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessboardMulti.REFS = REFS;
