import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCheckedRadio(props) {
  const type = TYPES.CHECKED_RADIO;

  return (
    <IconPrimitive {...props} type={type} viewBox={20}>
      <circle cx="10" cy="10" r="6.25" />
    </IconPrimitive>
  );
}

IconCheckedRadio.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCheckedRadio.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCheckedRadio.REFS = REFS;
