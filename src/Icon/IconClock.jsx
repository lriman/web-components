import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconClock(props) {
  const type = TYPES.CLOCK;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M8 16C3.5122 15.935 0 12.4228 0 8C0 3.5122 3.5122 0 8 0C12.4228 0 16 3.57724 16 8C15.935 12.4228 12.4228 16 8 16ZM8 1.10569C4.22764 1.10569 1.10569 4.22764 1.10569 8C1.10569 11.7724 4.1626 14.8293 8 14.8943C11.7724 14.8943 14.8943 11.8374 14.8943 8.06504C14.8943 4.22764 11.8374 1.10569 8 1.10569Z" />
      <path d="M10.2114 10.7967C10.0813 10.7967 10.0163 10.7316 9.88622 10.6666C9.82118 10.6016 9.75614 10.6016 9.75614 10.5365L9.04069 9.82107C8.5854 9.36578 8.13012 8.9105 7.67484 8.45521C7.47971 8.26009 7.41467 8.06497 7.41467 7.80481C7.41467 7.28448 7.41467 6.8292 7.41467 6.30887C7.41467 6.30887 7.41467 4.03245 7.41467 3.44708C7.41467 3.18692 7.6098 2.92676 7.86996 2.92676C7.935 2.92676 7.935 2.92676 8.00004 2.92676C8.19516 2.92676 8.39028 3.05684 8.52036 3.25196C8.52036 3.317 8.58541 3.44708 8.58541 3.57716C8.58541 4.87798 8.58541 6.17879 8.58541 7.4796C8.58541 7.67472 8.65045 7.80481 8.78053 7.93489C9.43093 8.52025 10.0163 9.17066 10.6017 9.75603C10.7317 9.88611 10.7968 10.0812 10.7968 10.2764C10.7968 10.4715 10.6667 10.6016 10.5366 10.6666C10.4065 10.7316 10.2765 10.7967 10.2114 10.7967Z" />
    </IconPrimitive>
  );
}

IconClock.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconClock.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconClock.REFS = REFS;
