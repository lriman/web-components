import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconAlarmClock(props) {
  const type = TYPES.ALARM_CLOCK;

  return (
    <IconPrimitive {...props} type={type} viewBox={14}>
      <path d="M14 2.68322L10.7835 0.00347567L9.884 1.06703L13.1005 3.74677L14 2.68322ZM4.116 1.06356L3.2165 0L0 2.67974L0.8995 3.7433L4.116 1.06356ZM7.35 4.26812H6.3V8.43893L9.6215 10.4235L10.15 9.56505L7.35 7.91758V4.26812ZM6.9965 1.48759C3.514 1.48759 0.7 4.28898 0.7 7.74379C0.7 11.1986 3.514 14 6.9965 14C10.479 14 13.3 11.1986 13.3 7.74379C13.3 4.28898 10.479 1.48759 6.9965 1.48759ZM7 12.6097C4.2945 12.6097 2.1 10.4305 2.1 7.74379C2.1 5.0571 4.2945 2.87786 7 2.87786C9.7055 2.87786 11.9 5.0571 11.9 7.74379C11.9 10.4305 9.709 12.6097 7 12.6097Z" />
    </IconPrimitive>
  );
}

IconAlarmClock.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconAlarmClock.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconAlarmClock.REFS = REFS;
