import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowUpTailed(props) {
  const type = TYPES.ARROW_UP_TAILED;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="12.707565 4.060675 12.707565 21.853615 11.707565 21.853615 11.707565 4.060685 3.561165 12.207115 2.854065 11.500015 12.207565 2.146465 21.561185 11.500015 20.854075 12.207115" />
    </IconPrimitive>
  );
}

IconArrowUpTailed.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowUpTailed.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowUpTailed.REFS = REFS;
