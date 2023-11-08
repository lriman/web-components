import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconBrush(props) {
  const type = TYPES.BRUSH;

  return (
    <IconPrimitive {...props} type={type} viewBox={25}>
      <path
        d="M14.2936 14.856L32.0285 -2.11698C32.8845 -3.04538 33.1596 -4.34167 32.7501 -5.51754C32.3406 -6.69342 31.3087 -7.57024 30.0432 -7.81772C28.7777 -8.0652 27.4708 -7.64573 26.6148 -6.71733L11.1804 12.2962"
        stroke="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.53768 23.178C1.27871 23.0598 1.11698 22.8059 1.12544 22.5307C1.1339 22.2556 1.31094 22.0112 1.57672 21.9079C5.01959 20.5697 3.91053 16.8022 4.93284 14.788C6.18482 12.367 9.23066 11.3607 11.7694 12.5295C19.4562 16.1276 10.3061 27.1843 1.53768 23.178Z"
        stroke="white"
      />
    </IconPrimitive>
  );
}

IconBrush.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconBrush.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconBrush.REFS = REFS;
