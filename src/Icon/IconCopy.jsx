import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCopy(props) {
  const type = TYPES.COPY;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 4C7.5 2.89543 8.39543 2 9.5 2H20.5C21.6046 2 22.5 2.89543 22.5 4V14C22.5 15.1046 21.6046 16 20.5 16H19C18.7239 16 18.5 15.7761 18.5 15.5C18.5 15.2239 18.7239 15 19 15H20.5C21.0523 15 21.5 14.5523 21.5 14V4C21.5 3.44772 21.0523 3 20.5 3H9.5C8.94772 3 8.5 3.44772 8.5 4V5.5C8.5 5.77614 8.27614 6 8 6C7.72386 6 7.5 5.77614 7.5 5.5V4ZM2.5 10C2.5 8.89543 3.39543 8 4.5 8H14.5C15.6046 8 16.5 8.89543 16.5 10V20C16.5 21.1046 15.6046 22 14.5 22H4.5C3.39543 22 2.5 21.1046 2.5 20V10ZM4.5 9C3.94772 9 3.5 9.44772 3.5 10V20C3.5 20.5523 3.94772 21 4.5 21H14.5C15.0523 21 15.5 20.5523 15.5 20V10C15.5 9.44771 15.0523 9 14.5 9H4.5Z"
      />
    </IconPrimitive>
  );
}

IconCopy.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCopy.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCopy.REFS = REFS;
