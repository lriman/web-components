import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconMenu(props) {
  const type = TYPES.MENU;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M2.14941,6.32372 L2.14941,5.27393 L21.0458,5.27393 L21.0458,6.32372 C14.747,6.32372 8.44821,6.32372 2.14941,6.32372 Z M2.14941,12.6225 L2.14941,11.5727 L21.0458,11.5727 L21.0458,12.6225 C14.747,12.6225 8.44821,12.6225 2.14941,12.6225 Z M21.0458,17.8715 L21.0458,18.9213 L2.14941,18.9213 L2.14941,17.8715 C8.44821,17.8715 14.747,17.8715 21.0458,17.8715 Z" />
    </IconPrimitive>
  );
}

IconMenu.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconMenu.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconMenu.REFS = REFS;
