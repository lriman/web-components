import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowLast(props) {
  const type = TYPES.ARROW_LAST;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.64648 5.35164L12.2929 11.9981L5.64648 18.6445L6.35359 19.3516L13.3536 12.3516L13.7071 11.9981L13.3536 11.6445L6.35359 4.64453L5.64648 5.35164ZM17 4.99808V18.9981H18V4.99808H17Z"
      />
    </IconPrimitive>
  );
}

IconArrowLast.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowLast.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowLast.REFS = REFS;
