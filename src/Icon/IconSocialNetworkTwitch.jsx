import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkTwitch(props) {
  const type = TYPES.SOCIAL_NETWORK_TWITCH;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M4.25216,2 L21.3615,2 L21.3615,13.688 L16.3531,18.694 L12.5976,18.694 L10.0946,21.2 L7.58912,21.2 L7.58912,18.694 L3,18.694 L3,5.339 L4.25216,2 Z M5.92042,3.669 L5.92042,15.774 L9.6785,15.774 L9.6785,18.276 L12.1808,15.774 L16.7706,15.774 L19.6926,12.851 L19.6926,3.669 L5.92042,3.669 Z M10.5114,12.018 L10.5114,7.01 L12.1808,7.01 L12.1808,12.018 L10.5114,12.018 Z M15.1015,12.018 L15.1015,7.01 L16.7706,7.01 L16.7706,12.018 L15.1015,12.018 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkTwitch.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkTwitch.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkTwitch.REFS = REFS;
