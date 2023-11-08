import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconRookWhiteSet4(props) {
  const type = TYPES.ROOK_WHITE_SET_4;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 35.1016H14.2848L16.7116 17.9573L13.4096 16.8733V8H17.189V11.2923H20.5307V8H22.5199H24.4693V11.2923H27.811V8H31.5904V16.8733L28.3282 17.9573L30.755 35.1016H33.5V40H11.5V35.1016Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9096 7.5H17.689V10.7923H20.0307V7.5H24.9693V10.7923H27.311V7.5H32.0904V17.234L28.8817 18.3003L31.1892 34.6016H34V40.5H11V34.6016H13.8506L16.1578 18.3018L12.9096 17.2354V7.5ZM13.9096 8.5V16.5112L17.2653 17.6129L14.719 35.6016H12V39.5H33V35.6016H30.3208L27.7747 17.6144L31.0904 16.5125V8.5H28.311V11.7923H23.9693V8.5H21.0307V11.7923H16.689V8.5H13.9096Z"
        fill="#2D2E37"
      />
    </IconPrimitive>
  );
}

IconRookWhiteSet4.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRookWhiteSet4.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRookWhiteSet4.REFS = REFS;
