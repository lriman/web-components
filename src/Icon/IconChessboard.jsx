import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessboard(props) {
  const type = TYPES.CHESSBOARD;

  return (
    <IconPrimitive {...props} type={type} viewBox={30}>
      <path d="M29.6668 15.1209C29.6668 19.7269 29.6668 24.333 29.6668 28.6966C29.6668 29.1815 29.182 29.6663 28.6971 29.6663C19.485 29.6663 10.5153 29.6663 1.30319 29.6663C0.818345 29.6663 0.333496 29.1815 0.333496 28.6966C0.333496 19.4845 0.333496 10.5148 0.333496 1.3027C0.333496 0.817856 0.57592 0.575432 1.06077 0.333008H1.30319C8.57592 0.333008 15.6062 0.333008 22.8789 0.333008C24.8183 0.333008 26.7577 0.333008 28.6971 0.333008C29.182 0.333008 29.6668 0.817856 29.6668 1.3027C29.6668 5.90876 29.6668 10.5148 29.6668 15.1209ZM2.27289 8.09058C2.27289 10.03 2.27289 11.9694 2.27289 13.9088C2.27289 14.1512 2.27289 14.1512 2.51531 14.1512C6.3941 14.1512 10.2729 14.1512 14.1517 14.1512C14.3941 14.1512 14.3941 14.1512 14.3941 13.9088C14.3941 10.03 14.3941 6.15119 14.3941 2.2724C14.3941 2.02998 14.3941 2.02998 14.1517 2.02998C10.2729 2.02998 6.3941 2.02998 2.51531 2.02998C2.27289 2.02998 2.27289 2.02998 2.27289 2.2724C2.27289 4.2118 2.27289 6.15119 2.27289 8.09058ZM27.9699 21.9088C27.9699 19.9694 27.9699 18.03 27.9699 16.0906C27.9699 15.8482 27.9699 15.8482 27.7274 15.8482C23.8486 15.8482 19.9699 15.8482 16.0911 15.8482C15.8486 15.8482 15.8486 15.8482 15.8486 16.0906C15.8486 19.9694 15.8486 23.8482 15.8486 27.7269C15.8486 27.9694 15.8486 27.9694 16.0911 27.9694C19.9699 27.9694 23.8486 27.9694 27.7274 27.9694C27.9699 27.9694 27.9699 27.9694 27.9699 27.7269C27.9699 25.7875 27.9699 23.8482 27.9699 21.9088Z" />
    </IconPrimitive>
  );
}

IconChessboard.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessboard.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessboard.REFS = REFS;