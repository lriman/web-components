import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessBadgeFill(props) {
  const type = TYPES.CHESS_BADGE_FILL;

  return (
    <IconPrimitive {...props} type={type} viewBox={20}>
      <path d="M7.99906 0H11.9985V4.00005H7.99906V0Z" />
      <path d="M7.99906 4.00005L4.00075 4.00067V8.00072H7.99906V11.9999H11.9985V8.00072H15.9962V4.00067H11.9968V7.99982H8.00019L7.99906 4.00005Z" />
      <path d="M7.99906 11.9999L4.00075 12.0002V16.0002H7.99906V20H11.9985V16.0002H15.9962V12.0002H11.9968V16L7.99906 16.0002V11.9999Z" />
      <path d="M3.99943 7.99982H0V11.9999L4.00075 12.0002L3.99943 7.99982Z" />
      <path d="M16.0006 7.99982H20V11.9999H16.0006V7.99982Z" />
      <path d="M7.99984 4.00073H12V7.99974H15.9974V12.0005H12V16.001H7.99984V12.0002H11.9972V8.00151H7.99984V4.00073Z" />
      <path d="M3.99951 7.99974H7.99968L7.99984 12.0002L3.99951 12.0005V7.99974Z" />
    </IconPrimitive>
  );
}

IconChessBadgeFill.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessBadgeFill.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessBadgeFill.REFS = REFS;
