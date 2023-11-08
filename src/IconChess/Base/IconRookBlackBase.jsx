import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconRookBlackBase(props) {
  const type = TYPES.ROOK_BLACK_BASE;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.63413 2H5.84967V2.89083H6.81408V2H9.21208V2.89083H10.1765V2H12.392V4.54148L11.167 5.66812V9.75546L12.5484 11.0917V12.0087H13.2V14H2.80005V12.0087H3.50381V11.0917L4.8592 9.75546V5.66812L3.63413 4.54148V2ZM11.975 12.5852V11.3275L10.6196 9.99127V5.43231L11.8186 4.27948V2.57642H10.7239V3.44105H8.66471V2.57642H7.36145V3.44105H5.27624V2.57642H4.20757V4.27948L5.40657 5.43231V9.99127L4.05118 11.3275V12.5852H3.37348V13.4236H12.6527V12.5852H11.975Z"
        fill="white"
      />
      <path
        d="M11.975 12.5852V11.3275L10.6196 9.99127V5.43231L11.8186 4.27948V2.57642H10.7239V3.44105H8.66471V2.57642H7.36145V3.44105H5.27624V2.57642H4.20757V4.27948L5.40657 5.43231V9.99127L4.05118 11.3275V12.5852H3.37348V13.4236H12.6527V12.5852H11.975Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.975 12.5852V11.3275L10.6196 9.99127V5.43231L11.8186 4.27947V2.57642H10.7239V3.44105H8.66476V2.57642H7.3615V3.44105H5.27629V2.57642H4.20762V4.27947L5.40662 5.43231V9.99127L4.05123 11.3275V12.5852H3.37354V13.4236H12.6527V12.5852H11.975Z"
        fill="#161622"
      />
    </IconPrimitive>
  );
}

IconRookBlackBase.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRookBlackBase.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRookBlackBase.REFS = REFS;
