import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowDownNext(props) {
  const type = TYPES.ARROW_DOWN_NEXT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="12.6709996 1.22890041 12.6709996 17.2363006 15.8999006 17.2363006 12.3354996 21.8999006 8.77109959 17.2363006 11.6709996 17.2363006 11.6709996 1.22890041" />
    </IconPrimitive>
  );
}

IconArrowDownNext.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowDownNext.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowDownNext.REFS = REFS;
