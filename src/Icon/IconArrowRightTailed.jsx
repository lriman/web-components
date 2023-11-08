import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowRIghtTailed(props) {
  const type = TYPES.ARROW_RIGHT_TAILED;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <polygon points="19.8539 11.5001 11.7075 3.35359 12.4146 2.64648 21.7681 12.0001 12.4146 21.3536 11.7075 20.6465 19.8539 12.5001 2.06104 12.5001 2.06104 11.5001" />
    </IconPrimitive>
  );
}

IconArrowRIghtTailed.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowRIghtTailed.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowRIghtTailed.REFS = REFS;
