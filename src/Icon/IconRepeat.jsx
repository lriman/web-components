import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconRepeat(props) {
  const type = TYPES.REPEAT;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M18.8450467,6.15495329 C17.1638794,4.18614017 14.6860297,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C15.4234239,21 18.5022909,19.0721702 20.0272173,16.0745912 L21.8098113,16.9814312 C19.9468855,20.6434226 16.1832811,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C15.2278768,1 18.2110059,2.40268002 20.2628472,4.73715278 L23,2 L23,10 L15,10 L18.8450467,6.15495329 Z" />
    </IconPrimitive>
  );
}

IconRepeat.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRepeat.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRepeat.REFS = REFS;
