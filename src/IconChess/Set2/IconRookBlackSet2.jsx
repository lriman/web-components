import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconRookBlackSet2(props) {
  const type = TYPES.ROOK_BLACK_SET_2;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.1284 35.7331H11.8716V33.6086L15.4291 30.112V18.7372L11.2128 15.7718V9H15.5608V12.1867H20.0845V9H24.9155V12.1867H29.4392V9H33.7872V15.7718L29.5709 18.7372V30.112L33.1284 33.6086V35.7331Z"
        fill="#2D2E37"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2128 15.7718H33.7872H11.2128Z" fill="#2D2E37" />
      <path fillRule="evenodd" clipRule="evenodd" d="M29.5709 18.7372H15.4291H29.5709Z" fill="#2D2E37" />
      <path fillRule="evenodd" clipRule="evenodd" d="M33.1284 33.6086H11.8716H33.1284Z" fill="#2D2E37" />
      <path d="M35.5 35.7331H9.5V41H35.5V35.7331Z" fill="#2D2E37" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7128 8H16.0608V11.1867H19.5845V8H25.4155V11.1867H28.9392V8H34.2872V15.5314L30.0709 18.4968V29.4024L33.6284 32.8989V34.7331H36V41H9V34.7331H11.3716V32.8989L14.9291 29.4024V18.4968L10.7128 15.5314V8ZM15.9291 18.7372V29.8217L13.0936 32.6086H31.9064L29.0709 29.8217V18.7372H15.9291ZM29.4127 17.7372L32.2071 15.7718H12.7929L15.5873 17.7372H29.4127ZM11.7128 14.7718V9H15.0608V12.1867H20.5845V9H24.4155V12.1867H29.9392V9H33.2872V14.7718H11.7128ZM32.6284 33.6086H12.3716V34.7331H32.6284V33.6086ZM10 35.7331V40H35V35.7331H10Z"
        fill="white"
      />
    </IconPrimitive>
  );
}

IconRookBlackSet2.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRookBlackSet2.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRookBlackSet2.REFS = REFS;
