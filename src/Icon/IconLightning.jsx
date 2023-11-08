import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconLightning(props) {
  const type = TYPES.LIGHTNING;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.61997 3H16.809L13.809 9H18.5336L8.39204 21.8104L7.51192 21.3915L9.37671 13H5.84219L8.61997 3ZM9.38006 4L7.15783 12H10.6233L8.96096 19.4806L16.4665 10H12.191L15.191 4H9.38006Z"
        fillOpacity="0.87"
      />
    </IconPrimitive>
  );
}

IconLightning.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconLightning.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconLightning.REFS = REFS;
