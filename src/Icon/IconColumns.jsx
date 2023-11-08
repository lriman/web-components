import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconColumns(props) {
  const type = TYPES.COLUMNS;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M19 20V4H18V20H19Z" />
      <path d="M13 20V4H12V20H13Z" />
      <path d="M7 20V4H6V20H7Z" />
    </IconPrimitive>
  );
}

IconColumns.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconColumns.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconColumns.REFS = REFS;
