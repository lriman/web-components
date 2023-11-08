import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconDocument(props) {
  const type = TYPES.DOCUMENT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M14,2 L15,2 L20,7 L20,8 L20,21 C20,21.5523 19.5523,22 19,22 L5,22 C4.44771,22 4,21.5523 4,21 L4,3 C4,2.44772 4.44771,2 5,2 L14,2 Z M19,8 L15,8 C14.4477,8 14,7.55228 14,7 L14,3 L5,3 L5,21 L19,21 L19,8 Z M18.5858,7 L15,3.41421 L15,7 L18.5858,7 Z" />
    </IconPrimitive>
  );
}

IconDocument.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconDocument.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconDocument.REFS = REFS;
