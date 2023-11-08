import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCheckedList(props) {
  const type = TYPES.CHECKED_LIST;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H21V4H3V3ZM3 8H21V9H3V8ZM3 13H8V14H3V13ZM16.7071 14L9 21.7071L5.29289 18L6 17.2929L9 20.2929L16 13.2929L16.7071 14ZM21.7071 14L14 21.7071L13.2929 21L21 13.2929L21.7071 14Z"
      />
    </IconPrimitive>
  );
}

IconCheckedList.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCheckedList.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCheckedList.REFS = REFS;
