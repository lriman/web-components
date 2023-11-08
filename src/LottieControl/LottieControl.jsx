import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

const LottieControl = props => {
  const { loop, autoplay, animationData, isPaused, isStopped } = props;

  const defaultOptions = {
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    animationData,
    autoplay,
    loop,
  };

  return <Lottie options={defaultOptions} isPaused={isPaused} isStopped={isStopped} isClickToPauseDisabled />;
};

LottieControl.propTypes = {
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  isPaused: PropTypes.bool,
  isStopped: PropTypes.bool,
  animationData: PropTypes.shape({}).isRequired,
};

LottieControl.defaultProps = {
  loop: true,
  autoplay: true,
  isPaused: false,
  isStopped: false,
};

export default LottieControl;
