import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSandglass(props) {
  const type = TYPES.SANDGLASS;

  return (
    <IconPrimitive {...props} type={type} viewBox={22}>
      <path d="M20 2.5H5V4.5L11 12L5 19.5V21.5H20V19.5L14 12L20 4.5V2.5Z" stroke="#E1E2E3" />
      <g opacity="0.5">
        <path d="M14.5 8.5H10.5L12.5 11L14.5 8.5Z" fill="#E1E2E3" />
        <path d="M12 17L12.5 14L13 17L17.5 19V20H7.5V19L12 17Z" fill="#E1E2E3" />
      </g>
    </IconPrimitive>
  );
}

IconSandglass.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSandglass.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSandglass.REFS = REFS;
