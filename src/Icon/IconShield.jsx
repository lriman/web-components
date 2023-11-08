import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconShield(props) {
  const type = TYPES.SHIELD;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <g clipPath="url(#IconShieldClip0)">
        <circle cx="12" cy="12" r="12" fill="#2D2E37" />
        <path
          d="M8.71679 17.04L9.59999 13.3056L6.71999 10.8288L10.512 10.4736L12 7.00802L13.488 10.512L17.28 10.8288L14.4 13.3056L15.2832 17.04L12 15.0624L8.71679 17.04ZM12 2.40002C13.2607 2.40002 14.509 2.64834 15.6738 3.13078C16.8385 3.61323 17.8968 4.32036 18.7882 5.2118C19.6797 6.10324 20.3868 7.16154 20.8692 8.32626C21.3517 9.49099 21.6 10.7393 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6C10.7393 21.6 9.49096 21.3517 8.32623 20.8693C7.16151 20.3868 6.10321 19.6797 5.21177 18.7882C3.41142 16.9879 2.39999 14.5461 2.39999 12C2.39999 9.45395 3.41142 7.01215 5.21177 5.2118C7.01212 3.41145 9.45392 2.40002 12 2.40002ZM12 4.32002C9.96313 4.32002 8.00969 5.12917 6.56941 6.56944C5.12913 8.00972 4.31999 9.96316 4.31999 12C4.31999 14.0369 5.12913 15.9903 6.56941 17.4306C8.00969 18.8709 9.96313 19.68 12 19.68C14.0369 19.68 15.9903 18.8709 17.4306 17.4306C18.8709 15.9903 19.68 14.0369 19.68 12C19.68 9.96316 18.8709 8.00972 17.4306 6.56944C15.9903 5.12917 14.0369 4.32002 12 4.32002Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="IconShieldClip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </IconPrimitive>
  );
}

IconShield.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconShield.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconShield.REFS = REFS;
