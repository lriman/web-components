import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessBadgeWhite(props) {
  const type = TYPES.CHESS_BADGE_WHITE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        d="M10.1991 2.75H9.94915V3V6.35008L6.60063 6.3506L6.35067 6.35064V6.6006V9.94983H3H2.75V10.1998V13.7999V14.0499L2.99998 14.0499L6.35067 14.0501V17.4002V17.6502H6.60067H9.94915V17.6502V21V21.25H10.1991H13.7986H14.0486V21V17.6502H17.3966H17.6466V17.4002V14.0499H21H21.25V13.7999V10.1998V9.94983H21H17.6466V6.6006V6.3506H17.3966H14.0486V3V2.75H13.7986H10.1991ZM17.1505 10.4506V13.5502H14.0486V10.4506H17.1505ZM10.4492 6.85004H13.5471V9.94983H10.4501L10.4492 6.85004ZM6.84957 10.4506H9.94915V13.5499L6.85059 13.5501L6.84957 10.4506ZM10.4491 14.0499H13.5471V17.15L10.4491 17.1502V14.0499Z"
        stroke="#5B5D6A"
        strokeWidth="0.5"
      />
      <path d="M10.1991 3H13.7986V6.60004H10.1991V3Z" fill="white" />
      <path
        d="M10.1991 6.60004L6.60067 6.6006V10.2006H10.1991V13.7999H13.7986V10.2006H17.3966V6.6006H13.7971V10.1998H10.2002L10.1991 6.60004Z"
        fill="white"
      />
      <path
        d="M10.1991 13.7999L6.60067 13.8002V17.4002H10.1991V21H13.7986V17.4002H17.3966V13.8002H13.7971V17.3999L10.1991 17.4002V13.7999Z"
        fill="white"
      />
      <path d="M6.59949 10.1998H3V13.7999L6.60067 13.8002L6.59949 10.1998Z" fill="white" />
      <path d="M17.4005 10.1998H21V13.7999H17.4005V10.1998Z" fill="white" />
      <path
        d="M10.1998 6.6001H13.7999V10.1992H17.3976V13.7999H13.7999V17.4003H10.1998V13.7996H13.7974V10.2008H10.1998V6.6001Z"
        fill="#E1E2E3"
      />
      <path d="M6.59949 10.1992H10.1996L10.1998 13.7996L6.59949 13.7999V10.1992Z" fill="#E1E2E3" />
    </IconPrimitive>
  );
}

IconChessBadgeWhite.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessBadgeWhite.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessBadgeWhite.REFS = REFS;