import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCup(props) {
  const type = TYPES.CUP;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <g clipPath="url(#IconCupClip0)">
        <circle cx="12" cy="12" r="12" fill="#2D2E37" />
        <path
          d="M16.8 5.55005H7.19999C7.19999 5.55005 7.15231 7.32353 7.19999 8.25005C7.3586 11.3317 8.27738 14.5161 9.19999 15.9C10.4 17.7 12 18.15 12 18.15C12 18.15 13.6 17.7 14.8 15.9C16 14.1 16.7009 11.0105 16.8 8.25005C16.8199 7.69578 16.8 5.55005 16.8 5.55005Z"
          fill="white"
        />
        <path
          d="M12 18.15V20.8501M12 18.15C12 18.15 13.6 17.7 14.8 15.9M12 18.15C12 18.15 10.4 17.7 9.19999 15.9M12 20.8501H9.19999M12 20.8501H14.8M16.8 8.25005C16.8199 7.69578 16.8 5.55005 16.8 5.55005H7.19999C7.19999 5.55005 7.15231 7.32353 7.19999 8.25005M16.8 8.25005H19.6C18.8 12.3 17.5232 15.0001 14.8 15.9M16.8 8.25005C16.7009 11.0105 16 14.1 14.8 15.9M9.19999 15.9C6.53823 15.0001 4.79999 12.3 4.39999 8.25005H7.19999M9.19999 15.9C8.27738 14.5161 7.3586 11.3317 7.19999 8.25005"
          stroke="white"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="IconCupClip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </IconPrimitive>
  );
}

IconCup.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCup.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCup.REFS = REFS;
