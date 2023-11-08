import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconFriends(props) {
  const type = TYPES.FRIENDS;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <circle cx="8" cy="8" r="8" />
      <path d="M4 9L3 12H9.86839L9 9H4Z" fill="white" />
      <path d="M13 11L12 8.05263H10L10.8947 11H13Z" fill="white" />
      <path
        d="M8.50003 6C8.50003 7.10457 7.6046 8 6.50003 8C5.39546 8 4.50003 7.10457 4.50003 6C4.50003 4.89543 5.39546 4 6.50003 4C7.6046 4 8.50003 4.89543 8.50003 6Z"
        fill="white"
      />
      <path
        d="M9.33178 6.99302C9.44077 6.68222 9.50003 6.34803 9.50003 6C9.50003 4.96099 8.97183 4.04534 8.1693 3.50693C8.52283 3.19162 8.98905 3 9.50003 3C10.6046 3 11.5 3.89543 11.5 5C11.5 6.10457 10.6046 7 9.50003 7C9.44336 7 9.38725 6.99764 9.33178 6.99302Z"
        fill="white"
      />
    </IconPrimitive>
  );
}

IconFriends.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconFriends.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconFriends.REFS = REFS;
