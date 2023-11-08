import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconProcessFill(props) {
  const type = TYPES.PROCESS_FILL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9393 4.42907C14.5251 3.84328 15.4749 3.84328 16.0607 4.42907L17.9393 6.30775C18.5251 6.89354 18.5251 7.84328 17.9393 8.42907L16.5 9.86841L8 18.3684H4V14.3684L12.5 5.86841L13.9393 4.42907ZM5 14.8684L12.5 7.36841L15 9.86841L7.5 17.3684H5V14.8684ZM15.7071 5.59069C15.3166 5.20016 14.6834 5.20016 14.2929 5.59069L13.2576 6.62599L15.7424 9.11082L16.7777 8.07551C17.1682 7.68499 17.1682 7.05183 16.7777 6.6613L15.7071 5.59069Z"
      />
      <path d="M3 20.3684H21V21.3684H3V20.3684Z" />
    </IconPrimitive>
  );
}

IconProcessFill.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconProcessFill.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconProcessFill.REFS = REFS;
