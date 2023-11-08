import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconProcessor(props) {
  const type = TYPES.PROCESSOR;

  return (
    <IconPrimitive {...props} type={type} viewBox={48}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8H12.75C10.1266 8 8 10.1266 8 12.75V18H4V20H8V28H4V30H8V35.25C8 37.8734 10.1266 40 12.75 40H18V44H20V40H28V44H30V40H35.25C37.8734 40 40 37.8734 40 35.25V30H44V28H40V20H44V18H40V12.75C40 10.1266 37.8734 8 35.25 8H30V4H28V8H20V4H18V8ZM12.75 10C11.2312 10 10 11.2312 10 12.75V35.25C10 36.7688 11.2312 38 12.75 38H35.25C36.7688 38 38 36.7688 38 35.25V12.75C38 11.2312 36.7688 10 35.25 10H12.75ZM16 16H32V32H16V16ZM18 18V30H30V18H18Z"
      />
    </IconPrimitive>
  );
}

IconProcessor.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconProcessor.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconProcessor.REFS = REFS;
