import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowLeftFilled(props) {
  const type = TYPES.ARROW_LEFT_FILLED;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M10,3.10291076 L10,12.8970892 C10,12.9539253 9.95485448,13 9.89916465,13 C9.87242145,13 9.84677359,12.9891576 9.82786329,12.9698581 L5.02953399,8.07276889 C4.99015534,8.03257974 4.99015534,7.96742026 5.02953399,7.92723111 L9.82786329,3.03014186 C9.86724195,2.98995271 9.93108736,2.98995271 9.97046601,3.03014186 C9.98937631,3.04944137 10,3.07561713 10,3.10291076 Z" />
    </IconPrimitive>
  );
}

IconArrowLeftFilled.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowLeftFilled.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowLeftFilled.REFS = REFS;
