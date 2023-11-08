import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowRightFilled(props) {
  const type = TYPES.ARROW_RIGHT_FILLED;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M6,12.8970892 L6,3.10291076 C6,3.04607472 6.04514552,3 6.10083535,3 C6.12757855,3 6.15322641,3.01084235 6.17213671,3.03014186 L10.970466,7.92723111 C11.0098447,7.96742026 11.0098447,8.03257974 10.970466,8.07276889 L6.17213671,12.9698581 C6.13275805,13.0100473 6.06891264,13.0100473 6.02953399,12.9698581 C6.01062369,12.9505586 6,12.9243829 6,12.8970892 Z" />
    </IconPrimitive>
  );
}

IconArrowRightFilled.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowRightFilled.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowRightFilled.REFS = REFS;
