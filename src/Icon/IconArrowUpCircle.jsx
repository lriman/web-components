import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowUpCircle(props) {
  const type = TYPES.ARROW_UP_CIRCLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4987 11.8437C21.4124 6.5977 17.0897 2.41494 11.8437 2.50126C6.59775 2.58757 2.415 6.91026 2.50131 12.1563C2.58763 17.4022 6.91031 21.585 12.1563 21.4987C17.4023 21.4124 21.5851 17.0897 21.4987 11.8437ZM11.8273 1.50139C17.6255 1.406 22.4032 6.02904 22.4986 11.8272C22.594 17.6254 17.971 22.4032 12.1728 22.4985C6.37455 22.5939 1.59685 17.9709 1.50145 12.1727C1.40605 6.3745 6.02909 1.59679 11.8273 1.50139ZM16.3738 13.1926L11.9492 8.91126L7.66786 13.3358L8.38651 14.0312L11.9725 10.3253L15.6784 13.9113L16.3738 13.1926Z"
      />
    </IconPrimitive>
  );
}

IconArrowUpCircle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowUpCircle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowUpCircle.REFS = REFS;
