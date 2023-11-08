import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconViewTimeline(props) {
  const type = TYPES.VIEW_TIMELINE;

  return (
    <IconPrimitive {...props} type={type} viewBox={20}>
      <path d="M1,1 L2.8,1 L2.8,17.2000707 L19,17.2000707 L19,19 L1,19 L1,1 Z M5.5,8.20001885 L14.5,8.20001885 L14.5,10.9000353 L5.5,10.9000353 L5.5,8.20001885 Z M9.1,12.7000589 L18.1,12.7000589 L18.1,15.4000471 L9.1,15.4000471 L9.1,12.7000589 Z M4.6,2.80000471 L19,2.80000471 L19,6.40001414 L17.2,6.40001414 L17.2,4.60000943 L6.4,4.60000943 L6.4,6.40001414 L4.6,6.40001414 L4.6,2.80000471 Z" />
    </IconPrimitive>
  );
}

IconViewTimeline.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconViewTimeline.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconViewTimeline.REFS = REFS;
