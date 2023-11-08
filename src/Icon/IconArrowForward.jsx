import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowForward(props) {
  const type = TYPES.ARROW_FORWARD;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M17.7929 11.5L11.6464 5.35353L12.3536 4.64642L19.7071 12L12.3536 19.3535L11.6464 18.6464L17.7929 12.5L5 12.5V11.5L17.7929 11.5Z" />
    </IconPrimitive>
  );
}

IconArrowForward.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowForward.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowForward.REFS = REFS;
