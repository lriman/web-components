import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconMinusCircle(props) {
  const type = TYPES.MINUS_CIRCLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.89062C7.02944 3.89062 3 7.92006 3 12.8906C3 17.8612 7.02944 21.8906 12 21.8906C16.9706 21.8906 21 17.8612 21 12.8906C21 7.92006 16.9706 3.89062 12 3.89062ZM2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906ZM16 13.3906H8V12.3906H16V13.3906Z"
      />
    </IconPrimitive>
  );
}

IconMinusCircle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconMinusCircle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconMinusCircle.REFS = REFS;
