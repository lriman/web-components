import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSign(props) {
  const type = TYPES.SIGN;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M10.485,4.41425 L9.553,5.34625 L10.968,6.76045 L11.9,5.82845 L10.485,4.41425 Z M4.363,10.53665 L8.139,6.76045 L9.553,8.17465 L5.777,11.95085 L4.217,12.09715 L4.363,10.53665 Z M6.682,13.87485 L14.021,6.53555 C14.411,6.14505 14.411,5.51185 14.021,5.12135 L11.193,2.29295 C10.802,1.90235 10.169,1.90235 9.778,2.29295 L2.439,9.63215 L2,14.31375 L6.682,13.87485 Z" />
    </IconPrimitive>
  );
}

IconSign.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSign.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSign.REFS = REFS;
