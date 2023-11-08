import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessSearch(props) {
  const type = TYPES.CHESS_SEARCH;

  return (
    <IconPrimitive {...props} type={type} viewBox={35}>
      <rect x="0.5" y="0.5" width="27" height="27" stroke="#5D5F65" />
      <rect x="0.5" y="14.5" width="13" height="13" stroke="#5D5F65" />
      <rect x="14.5" y="0.5" width="13" height="13" stroke="#5D5F65" />
      <line x1="14.6877" y1="4.60957" x2="19.6877" y2="0.609565" stroke="#5D5F65" />
      <line x1="14.6877" y1="8.60957" x2="24.6877" y2="0.609566" stroke="#5D5F65" />
      <line x1="14.6951" y1="12.6037" x2="27.6951" y2="2.60369" stroke="#5D5F65" />
      <line x1="18.693" y1="13.6053" x2="27.693" y2="6.60532" stroke="#5D5F65" />
      <line x1="23.7" y1="13.6" x2="27.7" y2="10.6" stroke="#5D5F65" />
      <line x1="0.687652" y1="18.6096" x2="5.68765" y2="14.6096" stroke="#5D5F65" />
      <line x1="0.687652" y1="22.6096" x2="10.6877" y2="14.6096" stroke="#5D5F65" />
      <line x1="0.695145" y1="26.6037" x2="13.6951" y2="16.6037" stroke="#5D5F65" />
      <line x1="4.69303" y1="27.6053" x2="13.693" y2="20.6053" stroke="#5D5F65" />
      <line x1="9.7" y1="27.6" x2="13.7" y2="24.6" />
      <circle cx="21" cy="21" r="14" fill="#FEFEFE" />
      <path
        d="M20 27C23.866 27 27 23.866 27 20C27 16.134 23.866 13 20 13C16.134 13 13 16.134 13 20C13 23.866 16.134 27 20 27Z"
        fill="none"
        stroke="#5D5F65"
      />
      <path d="M29.0004 29.0004L25.4648 25.4648" stroke="#5D5F65" strokeLinecap="round" />
    </IconPrimitive>
  );
}

IconChessSearch.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessSearch.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessSearch.REFS = REFS;
