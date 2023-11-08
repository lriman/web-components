import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowRight(props) {
  const type = TYPES.ARROW_RIGHT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2929 11.9981L8.64648 5.35164L9.35359 4.64453L16.3536 11.6445L16.7071 11.9981L16.3536 12.3516L9.35359 19.3516L8.64648 18.6445L15.2929 11.9981Z"
      />
    </IconPrimitive>
  );
}

IconArrowRight.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowRight.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowRight.REFS = REFS;
