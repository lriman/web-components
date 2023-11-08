import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowDownTailed(props) {
  const type = TYPES.ARROW_DOWN_TAILED;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="11.707685 19.939405 11.707685 2.146465 12.707685 2.146465 12.707685 19.939395 20.854085 11.792965 21.561185 12.500065 12.207685 21.853615 2.854065 12.500065 3.561185 11.792965" />
    </IconPrimitive>
  );
}

IconArrowDownTailed.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowDownTailed.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowDownTailed.REFS = REFS;
