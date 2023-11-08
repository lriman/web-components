import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconFavorite(props) {
  const type = TYPES.CARD;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3521 2.43181C11.4736 2.16773 11.7278 2 12.0065 2C12.2853 2 12.5395 2.16773 12.661 2.43181L15.3502 8.15453L21.3772 9.0731C21.6516 9.11503 21.8795 9.31753 21.9647 9.59524C22.05 9.87294 21.9778 10.1775 21.7787 10.3805L17.4155 14.8203L18.4452 21.0972C18.492 21.384 18.3803 21.6739 18.157 21.8453C17.9336 22.0168 17.6373 22.0401 17.3922 21.9056L12.0051 18.9447L6.60781 21.9132C6.36273 22.0478 6.06636 22.0244 5.84303 21.853C5.6197 21.6815 5.50801 21.3916 5.55482 21.1049L6.58454 14.828L2.22134 10.3882C2.02217 10.1852 1.95 9.88059 2.03526 9.60289C2.12052 9.32519 2.34838 9.12268 2.62275 9.08076L8.65124 8.16218L11.3521 2.43181Z"
      />
    </IconPrimitive>
  );
}

IconFavorite.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconFavorite.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconFavorite.REFS = REFS;
