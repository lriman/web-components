import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkFacebook(props) {
  const type = TYPES.SOCIAL_NETWORK_FACEBOOK;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M8.29723,13.2963 L10.3173,13.2963 L10.3173,21.173 C10.3173,21.3285 10.4504,21.4545 10.6146,21.4545 L14.0396,21.4545 C14.2038,21.4545 14.3369,21.3285 14.3369,21.173 L14.3369,13.3334 L16.6591,13.3334 C16.8101,13.3334 16.9371,13.2261 16.9544,13.084 L17.3071,10.1842 C17.3168,10.1044 17.2901,10.0245 17.2337,9.9647 C17.1773,9.9047 17.0966,9.8705 17.0119,9.8705 L14.337,9.8705 L14.337,8.0527 C14.337,7.5048 14.6485,7.2269 15.2629,7.2269 C15.3505,7.2269 17.0119,7.2269 17.0119,7.2269 C17.1761,7.2269 17.3091,7.1008 17.3091,6.9454 L17.3091,4.2836 C17.3091,4.1281 17.1761,4.0021 17.0119,4.0021 L14.6016,4.0021 C14.5846,4.0013 14.5468,4 14.4912,4 C14.073,4 12.6193,4.0778 11.471,5.0783 C10.1988,6.1871 10.3756,7.5146 10.4179,7.7448 L10.4179,9.8704 L8.29723,9.8704 C8.13303,9.8704 8,9.9964 8,10.1519 L8,13.0147 C8,13.1702 8.13303,13.2963 8.29723,13.2963 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkFacebook.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkFacebook.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkFacebook.REFS = REFS;
