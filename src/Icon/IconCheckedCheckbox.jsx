import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCheckedCheckbox(props) {
  const type = TYPES.CHECKED_CHECKBOX;

  return (
    <IconPrimitive {...props} type={type} viewBox={20}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3536 6.35359L8.00004 14.7071L3.64648 10.3536L4.35359 9.64648L8.00004 13.2929L15.6465 5.64648L16.3536 6.35359Z"
      />
    </IconPrimitive>
  );
}

IconCheckedCheckbox.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCheckedCheckbox.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCheckedCheckbox.REFS = REFS;
