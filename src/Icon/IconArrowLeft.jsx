import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowLeft(props) {
  const type = TYPES.ARROW_LEFT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64652 11.6445L14.6465 4.64453L15.3536 5.35164L8.70718 11.9981L15.3536 18.6445L14.6465 19.3516L7.64652 12.3516L7.29297 11.9981L7.64652 11.6445Z"
      />
    </IconPrimitive>
  );
}

IconArrowLeft.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowLeft.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowLeft.REFS = REFS;
