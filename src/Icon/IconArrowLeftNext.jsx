import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowLeftNext(props) {
  const type = TYPES.ARROW_LEFT_NEXT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="1.99999983 12.1001 1.99999987 13.1001 18.0074 13.1001 18.0074 16 22.671 12.4356 18.0074 8.871199 18.0074 12.1001" />
    </IconPrimitive>
  );
}

IconArrowLeftNext.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowLeftNext.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowLeftNext.REFS = REFS;
