import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowUpFilled(props) {
  const type = TYPES.ARROW_UP_FILLED;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M12.8970892,10 L3.10291076,10 C3.04607472,10 3,9.95485448 3,9.89916465 C3,9.87242145 3.01084235,9.84677359 3.03014186,9.82786329 L7.92723111,5.02953399 C7.96742026,4.99015534 8.03257974,4.99015534 8.07276889,5.02953399 L12.9698581,9.82786329 C13.0100473,9.86724195 13.0100473,9.93108736 12.9698581,9.97046601 C12.9505586,9.98937631 12.9243829,10 12.8970892,10 Z" />
    </IconPrimitive>
  );
}

IconArrowUpFilled.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowUpFilled.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowUpFilled.REFS = REFS;
