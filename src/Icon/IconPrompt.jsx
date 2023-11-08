import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPrompt(props) {
  const type = TYPES.PROMPT;

  return (
    <IconPrimitive {...props} type={type} viewBox={32}>
      <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" />
      <path
        d="M18.1565 24.5H13.5002M18.9979 18.1984L18.1565 18.6859V21.5H16.0002H13.844V18.6859L13.0026 18.1984C11.158 17.132 10.0002 15.168 10.0002 13C10.0002 9.68594 12.6862 7 16.0002 7C19.3143 7 22.0002 9.68594 22.0002 13C22.0002 15.168 20.8424 17.132 18.9979 18.1984Z"
        stroke="#08080A"
      />
      <path d="M5 13.5H8M24 13.5H27M9 7L6.5 5M22 7L24.5 5M15.5 5V2" stroke="black" />
    </IconPrimitive>
  );
}

IconPrompt.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPrompt.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPrompt.REFS = REFS;
