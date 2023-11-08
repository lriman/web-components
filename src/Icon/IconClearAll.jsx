import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconClearAll(props) {
  const type = TYPES.CLEAR_ALL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5V4.5C15 3.83696 14.7366 3.20107 14.2678 2.73223C13.7989 2.26339 13.163 2 12.5 2H11.5C10.837 2 10.2011 2.26339 9.73223 2.73223C9.26339 3.20107 9 3.83696 9 4.5V5H4.5C4.22386 5 4 5.22386 4 5.5C4 5.77614 4.22386 6 4.5 6H5.04468L6.01489 16L7.11887 17L6.04907 6H17.9509L17.3291 12L18.4123 11.2729L18.9553 6H19.5C19.7761 6 20 5.77614 20 5.5C20 5.22386 19.7761 5 19.5 5H15ZM11.5 3C11.1022 3 10.7206 3.15804 10.4393 3.43934C10.158 3.72064 10 4.10218 10 4.5V5H14V4.5C14 4.10218 13.842 3.72064 13.5607 3.43934C13.2794 3.15804 12.8978 3 12.5 3H11.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3536 14.6464C16.5488 14.8417 16.5488 15.1583 16.3536 15.3536L9 22.7071L5.64645 19.3536C5.45118 19.1583 5.45118 18.8417 5.64645 18.6464C5.84171 18.4512 6.15829 18.4512 6.35355 18.6464L9 21.2929L15.6464 14.6464C15.8417 14.4512 16.1583 14.4512 16.3536 14.6464ZM21.3536 14.6464C21.5488 14.8417 21.5488 15.1583 21.3536 15.3536L14 22.7071L13.2929 22L20.6464 14.6464C20.8417 14.4512 21.1583 14.4512 21.3536 14.6464Z"
      />
    </IconPrimitive>
  );
}

IconClearAll.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconClearAll.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconClearAll.REFS = REFS;
