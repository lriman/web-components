import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconBell(props) {
  const type = TYPES.BELL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 3.02053L11.5 2L12.5 2.00001L12.5 3.02053C15.3703 3.25716 17.7038 5.51289 17.995 8.42544L18.8483 16.9577C18.9074 17.5494 19.4053 18 20 18V19H14C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19H4V18C4.59466 18 5.09257 17.5494 5.15174 16.9577L6.00496 8.42544C6.29622 5.5129 8.62967 3.25715 11.5 3.02053ZM5.82103 18H18.179C18.003 17.7235 17.8878 17.4033 17.8532 17.0572L17 8.52494C16.7431 5.95619 14.5816 4.00001 12 4C9.41842 4 7.25688 5.95619 7 8.52495L6.14677 17.0572C6.11216 17.4033 5.99701 17.7235 5.82103 18ZM11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19H11ZM12.0001 3C12.0002 3 12.0001 3 12.0001 3V3Z"
      />
    </IconPrimitive>
  );
}

IconBell.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconBell.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconBell.REFS = REFS;
