import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconRemove(props) {
  const type = TYPES.REMOVE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 3C11.1022 3 10.7206 3.15804 10.4393 3.43934C10.158 3.72064 10 4.10218 10 4.5V5H14V4.5C14 4.10218 13.842 3.72064 13.5607 3.43934C13.2794 3.15804 12.8978 3 12.5 3H11.5ZM15 5V4.5C15 3.83696 14.7366 3.20107 14.2678 2.73223C13.7989 2.26339 13.163 2 12.5 2H11.5C10.837 2 10.2011 2.26339 9.73223 2.73223C9.26339 3.20107 9 3.83696 9 4.5V5H4.5C4.22386 5 4 5.22386 4 5.5C4 5.77614 4.22386 6 4.5 6H5.04468L6.3247 19.1931C6.42414 20.2181 7.28559 21 8.31535 21H15.606C16.6313 21 17.4905 20.2247 17.5955 19.2049L18.9553 6H19.5C19.7761 6 20 5.77614 20 5.5C20 5.22386 19.7761 5 19.5 5H15ZM17.9509 6H6.04907L7.32279 19.0968C7.37263 19.6092 7.80331 20 8.3181 20H15.5983C16.1107 20 16.5401 19.6127 16.593 19.1031L17.9509 6Z"
        fill="#161622"
      />
    </IconPrimitive>
  );
}

IconRemove.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRemove.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRemove.REFS = REFS;
