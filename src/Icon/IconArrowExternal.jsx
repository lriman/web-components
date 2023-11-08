import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowExternal(props) {
  const type = TYPES.ARROW_EXTERNAL;

  return (
    <IconPrimitive {...props} type={type} viewBox={9}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99066 2.06716L1.53553 2.06716L1.53553 0.534779L8.6066 0.534779L8.6066 7.60585H7.07422L7.07422 3.15072L2.07731 8.14763L0.993754 7.06407L5.99066 2.06716Z"
      />
    </IconPrimitive>
  );
}

IconArrowExternal.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowExternal.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowExternal.REFS = REFS;
