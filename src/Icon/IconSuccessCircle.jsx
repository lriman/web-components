import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSuccessCircle(props) {
  const type = TYPES.SUCCESS_CIRCLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM7.45317 11.2352C7.08652 10.8222 6.45447 10.7846 6.04145 11.1513C5.62843 11.5179 5.59083 12.15 5.95748 12.563L10.1691 17.3073C10.3661 17.5292 10.6516 17.6522 10.9483 17.6429C11.245 17.6336 11.5222 17.493 11.7049 17.2591L18.3541 8.74854C18.6941 8.31333 18.6169 7.68488 18.1817 7.34486C17.7465 7.00484 17.1181 7.08201 16.7781 7.51721L10.8679 15.0819L7.45317 11.2352Z" />
    </IconPrimitive>
  );
}

IconSuccessCircle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSuccessCircle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSuccessCircle.REFS = REFS;
