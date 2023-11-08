import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowLeftTailed(props) {
  const type = TYPES.ARROW_LEFT_TAILED;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="4.26826 11.5001 12.4147 3.35359 11.7076 2.64648 2.35405 12.0001 11.7076 21.3536 12.4147 20.6465 4.26827 12.5001 22.0612 12.5001 22.0612 11.5001" />
    </IconPrimitive>
  );
}

IconArrowLeftTailed.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowLeftTailed.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowLeftTailed.REFS = REFS;
