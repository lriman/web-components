import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessboard4x4(props) {
  const type = TYPES.CHESSBOARD_4_X_4;

  return (
    <IconPrimitive {...props} type={type} viewBox={22}>
      <path d="M11 11V15.6667H15.6667V11H11Z" />
      <path d="M11 11V6.33333H6.33333V11H11Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 0.5V21.5H0.5V0.5H21.5ZM15.6667 6.33333H20.3333V1.66667H15.6667V6.33333ZM15.6667 11V6.33333H11V1.66667H6.33333V6.33333H1.66667V11H6.33333V15.6667H1.66667V20.3333H6.33333V15.6667H11V20.3333H15.6667V15.6667H20.3333V11H15.6667Z"
      />
    </IconPrimitive>
  );
}

IconChessboard4x4.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessboard4x4.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessboard4x4.REFS = REFS;
