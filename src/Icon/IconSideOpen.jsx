import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSideOpen(props) {
  const type = TYPES.SIDE_OPEN;

  return (
    <IconPrimitive {...props} type={type} viewBox={40}>
      <path d="M9.86081,20 L4.93773,24.9231 L4,23.9854 L7.98535,20 L4,16.0147 L4.93773,15.0769 L9.86081,20 Z M13.8608,12.7698 L13.8608,11 L35.8608,11 L35.8608,12.7698 C28.5275,12.7698 21.1942,12.7698 13.8608,12.7698 Z M13.8608,20.8849 L13.8608,19.1151 L35.8608,19.1151 L35.8608,20.8849 C28.5275,20.8849 21.1942,20.8849 13.8608,20.8849 Z M35.8608,27.2302 L35.8608,29 L13.8608,29 L13.8608,27.2302 C21.1942,27.2302 28.5275,27.2302 35.8608,27.2302 Z" />
    </IconPrimitive>
  );
}

IconSideOpen.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSideOpen.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSideOpen.REFS = REFS;
