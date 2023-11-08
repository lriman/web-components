import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPeople(props) {
  const type = TYPES.PEOPLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={48}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 6C27.1279 6 26.3018 6.18543 25.5567 6.51807L24.7414 4.69182C25.738 4.24687 26.8415 4 28 4C32.4182 4 36 7.58172 36 12C36 14.1794 35.1271 16.157 33.7142 17.5989L32.2857 16.1991C33.3472 15.1159 34 13.6352 34 12C34 8.68629 31.3137 6 28 6ZM20 10C16.6863 10 14 12.6863 14 16C14 19.3137 16.6863 22 20 22C23.3137 22 26 19.3137 26 16C26 12.6863 23.3137 10 20 10ZM12 16C12 11.5817 15.5817 8 20 8C24.4182 8 28 11.5817 28 16C28 20.4183 24.4182 24 20 24C15.5817 24 12 20.4183 12 16ZM36.2614 26H32V24H37.7385L41.9557 37.7059L40.0442 38.2941L36.2614 26ZM10.2614 28H29.7385L33.9557 41.7059L32.0442 42.2941L28.2614 30H11.7385L7.95575 42.2941L6.04419 41.7059L10.2614 28Z"
      />
    </IconPrimitive>
  );
}

IconPeople.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPeople.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPeople.REFS = REFS;
