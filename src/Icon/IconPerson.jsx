import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPerson(props) {
  const type = TYPES.PERSON;

  return (
    <IconPrimitive {...props} type={type} viewBox={48}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 8C20.6863 8 18 10.6863 18 14C18 17.3137 20.6863 20 24 20C27.3137 20 30 17.3137 30 14C30 10.6863 27.3137 8 24 8ZM16 14C16 9.58172 19.5817 6 24 6C28.4182 6 32 9.58172 32 14C32 18.4183 28.4182 22 24 22C19.5817 22 16 18.4183 16 14ZM14.2614 26H33.7385L37.9557 39.7059L36.0442 40.2941L32.2614 28H15.7385L11.9557 40.2941L10.0442 39.7059L14.2614 26Z"
      />
    </IconPrimitive>
  );
}

IconPerson.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPerson.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPerson.REFS = REFS;
