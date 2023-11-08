import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconClose(props) {
  const type = TYPES.CLOSE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="12.0977 11.3553 18.0253 5.42764 18.7676 6.16996 12.84 12.0976 18.7676 18.0252 18.0253 18.7675 12.0977 12.8399 6.17005 18.7675 5.42773 18.0252 11.3554 12.0976 5.42773 6.16996 6.17005 5.42764" />
    </IconPrimitive>
  );
}

IconClose.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconClose.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconClose.REFS = REFS;
