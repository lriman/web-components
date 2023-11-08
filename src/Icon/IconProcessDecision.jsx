import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconProcessDecision(props) {
  const type = TYPES.PROCESS_DECISION;

  return (
    <IconPrimitive {...props} type={type} viewBox={32}>
      <path d="M20.3332,12.1009021 L20.3332,11.33337 C20.3332,9.67651575 18.9900542,8.33337 17.3332,8.33337 L14.6665,8.33337 C13.0096458,8.33337 11.6665,9.67651575 11.6665,11.33337 L11.6665,20.00007 C11.6665,21.6569242 13.0096458,23.00007 14.6665,23.00007 L17.3332,23.00007 C18.9900542,23.00007 20.3332,21.6569242 20.3332,20.00007 L20.3332,15.3193215 L17.1853752,19.2880231 C16.7808633,19.7980219 16.0046557,19.7917336 15.6084597,19.2752481 L12.5400597,15.2752481 C12.2039126,14.8370431 12.2866469,14.2093067 12.7248519,13.8731597 C13.1630569,13.5370126 13.7907933,13.6197469 14.1269403,14.0579519 L16.4150711,17.0407845 L20.3332,12.1009021 Z M22.1120263,9.85820078 L23.5500248,8.04520695 C23.8932273,7.61250554 24.5222216,7.53995232 24.9549231,7.8831548 C25.3876245,8.22635728 25.4601777,8.85535165 25.1169752,9.28805305 L22.3332,12.7977697 L22.3332,20.00007 C22.3332,22.7614937 20.0946237,25.00007 17.3332,25.00007 L14.6665,25.00007 C11.9050763,25.00007 9.6665,22.7614937 9.6665,20.00007 L9.6665,11.33337 C9.6665,8.57194625 11.9050763,6.33337 14.6665,6.33337 L17.3332,6.33337 C19.5811456,6.33337 21.4826093,7.81683519 22.1120263,9.85820078 Z M15.3335,23 C14.7812153,23 14.3335,22.5522847 14.3335,22 C14.3335,21.4477153 14.7812153,21 15.3335,21 L16.6668,21 C17.2190847,21 17.6668,21.4477153 17.6668,22 C17.6668,22.5522847 17.2190847,23 16.6668,23 L15.3335,23 Z" />
    </IconPrimitive>
  );
}

IconProcessDecision.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconProcessDecision.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconProcessDecision.REFS = REFS;