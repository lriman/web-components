import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconWarning(props) {
  const type = TYPES.WARNING;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M9.024,2 L6.048,2 L6.544,9.312 L8.528,9.312 L9.024,2 Z M6.432,12.912 C6.731,13.189 7.099,13.328 7.536,13.328 C7.973,13.328 8.336,13.189 8.624,12.912 C8.923,12.624 9.072,12.277 9.072,11.872 C9.072,11.466 8.928,11.13 8.64,10.864 C8.352,10.586 7.984,10.448 7.536,10.448 C7.088,10.448 6.72,10.586 6.432,10.864 C6.144,11.13 6,11.466 6,11.872 C6,12.277 6.144,12.624 6.432,12.912 Z" />
    </IconPrimitive>
  );
}

IconWarning.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconWarning.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconWarning.REFS = REFS;
