import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPlay(props) {
  const type = TYPES.PLAY;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        d="M9.43 5.67C9.3 5.59 9.14 5.58 9.01 5.65C8.88 5.72 8.8 5.85 8.8 6C8.8 7.2 8.8 16.8 8.8 18C8.8 18.15 8.88 18.28 9.01 18.35C9.07 18.38 9.14 18.4 9.2 18.4C9.28 18.4 9.36 18.38 9.43 18.33C10.31 17.73 17.35 12.93 18.23 12.33C18.33 12.26 18.4 12.13 18.4 12C18.4 11.87 18.33 11.74 18.23 11.67C16.47 10.47 10.31 6.27 9.43 5.67ZM9.6 6.76L17.29 12L9.6 17.24L9.6 6.76Z"
        id="b1M2lhwWwO"
      />
    </IconPrimitive>
  );
}

IconPlay.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPlay.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPlay.REFS = REFS;
