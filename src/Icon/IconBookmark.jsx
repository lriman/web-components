import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconBookmark(props) {
  const type = TYPES.BOOKMARK;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M2 0H21.7647V24L11.8824 18.3529L2 24V0Z" />
    </IconPrimitive>
  );
}

IconBookmark.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconBookmark.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconBookmark.REFS = REFS;
