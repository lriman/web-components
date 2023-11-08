import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPuzzleLite(props) {
  const type = TYPES.PUZZLE_LITE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M13.6154 0.75C11.7029 0.75 10.1538 2.29904 10.1538 4.21154H4.96154V8.53846C3.04904 8.53846 1.5 10.0875 1.5 12C1.5 13.9125 3.04904 15.4615 4.96154 15.4615V19.7885H10.1538C10.1538 21.701 11.7029 23.25 13.6154 23.25C15.5279 23.25 17.0769 21.701 17.0769 19.7885H22.2692V13.7308H20.5385C19.5078 13.7308 18.8077 13.0307 18.8077 12C18.8077 10.9693 19.5078 10.2692 20.5385 10.2692H22.2692V4.21154H17.0769C17.0769 2.29904 15.5279 0.75 13.6154 0.75Z" />
    </IconPrimitive>
  );
}

IconPuzzleLite.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPuzzleLite.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPuzzleLite.REFS = REFS;
