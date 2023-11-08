import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconStarFavouriteFill(props) {
  const type = TYPES.STAR_FAVOURITE_FILL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5622 5.52528C11.6442 5.35693 11.8158 5.25 12.0039 5.25C12.1921 5.25 12.3637 5.35693 12.4457 5.52528L14.2609 9.17351L18.3292 9.7591C18.5144 9.78583 18.6682 9.91493 18.7257 10.092C18.7833 10.269 18.7345 10.4632 18.6001 10.5926L15.6549 13.4229L16.35 17.4245C16.3816 17.6073 16.3062 17.7921 16.1555 17.9014C16.0047 18.0107 15.8047 18.0256 15.6392 17.9398L12.0029 16.0522L8.35978 17.9447C8.19435 18.0305 7.99431 18.0156 7.84356 17.9063C7.69281 17.797 7.61742 17.6122 7.64902 17.4294L8.34408 13.4278L5.39892 10.5975C5.26448 10.468 5.21576 10.2739 5.27331 10.0968C5.33086 9.91981 5.48467 9.79071 5.66987 9.76398L9.7391 9.17839L11.5622 5.52528Z"
      />
    </IconPrimitive>
  );
}

IconStarFavouriteFill.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconStarFavouriteFill.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconStarFavouriteFill.REFS = REFS;
