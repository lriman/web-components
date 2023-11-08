import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowFirst(props) {
  const type = TYPES.ARROW_FIRST;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M7 4.99808V18.9981H6V4.99808H7Z" />
      <path d="M18.3535 5.35164L11.7071 11.9981L18.3535 18.6445L17.6464 19.3516L10.2928 11.9981L17.6464 4.64453L18.3535 5.35164Z" />
    </IconPrimitive>
  );
}

IconArrowFirst.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowFirst.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowFirst.REFS = REFS;
