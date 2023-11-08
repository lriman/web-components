import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconThermometer(props) {
  const type = TYPES.THERMOMETER;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9999 13.5379V3.99946C12.9999 2.89519 12.1044 2 10.9999 2C9.8953 2 8.99987 2.89519 8.99987 3.99946V13.5379C7.432 14.4429 6.6676 16.2878 7.13617 18.0361C7.60474 19.7843 9.18945 21 10.9999 21C12.8103 21 14.395 19.7843 14.8636 18.0361C15.3321 16.2878 14.5677 14.4429 12.9999 13.5379Z"
        stroke="#161622"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19C12.1046 19 13 18.1046 13 17C13 15.8954 12.1046 15 11 15C9.89543 15 9 15.8954 9 17C9 18.1046 9.89543 19 11 19Z"
        stroke="#161622"
      />
      <path d="M11 15V10" stroke="#161622" />
      <path d="M15 11.5H17" stroke="#161622" />
      <path d="M15 7.5H17" stroke="#161622" />
      <path d="M15 3.5H17" stroke="#161622" />
    </IconPrimitive>
  );
}

IconThermometer.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconThermometer.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconThermometer.REFS = REFS;
