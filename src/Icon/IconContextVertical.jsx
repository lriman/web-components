import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconContextVertical(props) {
  const type = TYPES.CONTEXT_VERTICAL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M10,5 C10,3.8954305 10.8954305,3 12,3 C13.1045695,3 14,3.8954305 14,5 C14,6.1045695 13.1045695,7 12,7 C10.8954305,7 10,6.1045695 10,5 Z M10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 Z M10,19 C10,17.8954305 10.8954305,17 12,17 C13.1045695,17 14,17.8954305 14,19 C14,20.1045695 13.1045695,21 12,21 C10.8954305,21 10,20.1045695 10,19 Z" />
    </IconPrimitive>
  );
}

IconContextVertical.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconContextVertical.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconContextVertical.REFS = REFS;
