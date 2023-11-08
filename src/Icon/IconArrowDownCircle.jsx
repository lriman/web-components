import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconArrowDownCircle(props) {
  const type = TYPES.ARROW_DOWN_CIRCLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4987 12.1563C21.4124 17.4023 17.0897 21.5851 11.8437 21.4987C6.59775 21.4124 2.415 17.0897 2.50131 11.8437C2.58763 6.59775 6.91031 2.415 12.1563 2.50131C17.4023 2.58763 21.5851 6.91031 21.4987 12.1563ZM11.8273 22.4986C17.6255 22.594 22.4032 17.971 22.4986 12.1728C22.594 6.37455 17.971 1.59685 12.1728 1.50145C6.37455 1.40605 1.59685 6.02909 1.50145 11.8273C1.40605 17.6255 6.02909 22.4032 11.8273 22.4986ZM16.3738 10.8074L11.9492 15.0887L7.66786 10.6642L8.38651 9.96878L11.9725 13.6747L15.6784 10.0887L16.3738 10.8074Z"
      />
    </IconPrimitive>
  );
}

IconArrowDownCircle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconArrowDownCircle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconArrowDownCircle.REFS = REFS;
