import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessboard3x3(props) {
  const type = TYPES.CHESSBOARD_3_X_3;

  return (
    <IconPrimitive {...props} type={type} viewBox={17}>
      <path d="M5.61698 0H0.293945V5.34836H5.61698V0Z" />
      <path d="M16.2918 0H10.9688V5.34836H16.2918V0Z" />
      <path d="M5.61503 10.6514H0.291992V15.9997H5.61503V10.6514Z" />
      <path d="M16.2918 10.6514H10.9688V15.9997H16.2918V10.6514Z" />
      <path d="M10.992 5.32617H5.66895V10.6745H10.992V5.32617Z" />
    </IconPrimitive>
  );
}

IconChessboard3x3.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessboard3x3.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessboard3x3.REFS = REFS;
