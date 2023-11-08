import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconEyeOpen(props) {
  const type = TYPES.EYE_OPEN;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M3.1282,12 C4.67338,14.0008 7.48908,17 12,17 C16.5109,17 19.3266,14.0008 20.8718,12 C19.3266,9.99921 16.5109,7 12,7 C7.48908,7 4.67338,9.99921 3.1282,12 Z M2.1,11.7 C3.61153,9.68462 6.74273,6 12,6 C17.2573,6 20.3885,9.68462 21.9,11.7 L22.125,12 L21.9,12.3 C20.3885,14.3154 17.2573,18 12,18 C6.74273,18 3.61153,14.3154 2.1,12.3 L1.875,12 L2.1,11.7 Z M12,8.5 C10.067,8.5 8.5,10.067 8.5,12 C8.5,13.933 10.067,15.5 12,15.5 C13.933,15.5 15.5,13.933 15.5,12 C15.5,10.067 13.933,8.5 12,8.5 Z M7.5,12 C7.5,9.51472 9.51472,7.5 12,7.5 C14.4853,7.5 16.5,9.51472 16.5,12 C16.5,14.4853 14.4853,16.5 12,16.5 C9.51472,16.5 7.5,14.4853 7.5,12 Z" />
    </IconPrimitive>
  );
}

IconEyeOpen.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconEyeOpen.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconEyeOpen.REFS = REFS;
