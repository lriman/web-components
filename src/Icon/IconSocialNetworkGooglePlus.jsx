import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkGooglePlus(props) {
  const type = TYPES.SOCIAL_NETWORK_GOOGLE_PLUS;

  return (
    <IconPrimitive {...props} type={type} viewBox={40}>
      <path d="M19.783875,21.936875 L13.99,21.936875 L13.99,17.958 L24.23,17.958 L24.23,19.9475 C24.23,25.4325 19.636375,29.894875 13.99,29.894875 C8.343675,29.894875 3.75,25.4325 3.75,19.9475 C3.75,14.462375 8.343675,10 13.99,10 C16.449625,10 18.817125,10.8594625 20.660375,12.4192125 L17.96925,15.419375 C16.8715,14.49025 15.458375,13.979 13.99,13.979 C10.6026125,13.979 7.846,16.656875 7.846,19.9475 C7.846,23.238 10.6026125,25.915875 13.99,25.915875 C16.660625,25.915875 18.938,24.25275 19.783875,21.936875 Z M32.12925,18.66 L36.22525,18.66 L36.22525,20.6495 L32.12925,20.6495 L32.12925,24.6285 L30.08125,24.6285 L30.08125,20.6495 L25.98525,20.6495 L25.98525,18.66 L30.08125,18.66 L30.08125,14.681 L32.12925,14.681 L32.12925,18.66 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkGooglePlus.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkGooglePlus.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkGooglePlus.REFS = REFS;
