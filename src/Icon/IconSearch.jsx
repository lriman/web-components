import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSearch(props) {
  const type = TYPES.SEARCH;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M15.6583,14.9229 L16.376,15.6406 L16.9142,15.4998 L21.1569,19.7425 L19.7426,21.1567 L15.5,16.9141 L15.6406,16.3759 L14.9229,15.6583 C13.6056,16.8054 11.8839,17.5 10,17.5 C5.85786,17.5 2.5,14.1421 2.5,10 C2.5,5.85786 5.85786,2.5 10,2.5 C14.1421,2.5 17.5,5.85786 17.5,10 C17.5,11.8839 16.8054,13.6056 15.6583,14.9229 Z M10,16.5 C13.5899,16.5 16.5,13.5899 16.5,10 C16.5,6.41015 13.5899,3.5 10,3.5 C6.41015,3.5 3.5,6.41015 3.5,10 C3.5,13.5899 6.41015,16.5 10,16.5 Z" />
    </IconPrimitive>
  );
}

IconSearch.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSearch.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSearch.REFS = REFS;
