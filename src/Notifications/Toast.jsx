import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  StyledToasts,
  StyledToastsCloseButton,
  StyledToastsItem,
  StyledToastsItemMessage,
  StyledToastsItemTitle,
} from './style';
import IconClose from '../Icon/IconClose';
import Countdown from './Countdown';

function Toast({ notification, remove }) {
  const { dismiss } = notification;
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    if (!dismiss.duration) return;
    const id = setTimeout(() => removeRef.current(), dismiss.duration);
    return () => clearTimeout(id);  /* eslint-disable-line */
  }, [dismiss.duration]);

  return (
    <StyledToasts type={notification.type}>
      <StyledToastsItem type={notification.type}>
        <StyledToastsItemTitle type={notification.type}>{notification.title}</StyledToastsItemTitle>
        <StyledToastsItemMessage type={notification.type}>{notification.message}</StyledToastsItemMessage>
      </StyledToastsItem>
      {dismiss.timer && <Countdown init={dismiss.timer} />}
      {dismiss.showIcon && (
        <StyledToastsCloseButton>
          <IconClose onClick={remove} size={IconClose.REFS.SIZES.XS} color={IconClose.REFS.COLORS.MINOR} />
        </StyledToastsCloseButton>
      )}
    </StyledToasts>
  );
}

Toast.propTypes = {
  notification: PropTypes.shape().isRequired,
  remove: PropTypes.func,
};

Toast.defaultProps = {
  remove: undefined,
};

export default Toast;
