import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkTwitter(props) {
  const type = TYPES.SOCIAL_NETWORK_TWITTER;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M8.29,20 C5.97278,20 3.81611,19.331 2,18.185 C2.32111,18.223 2.64778,18.242 2.97889,18.242 C4.90111,18.242 6.67056,17.596 8.075,16.513 C6.27944,16.48 4.76389,15.312 4.24167,13.707 C4.49222,13.755 4.74944,13.78 5.01389,13.78 C5.38778,13.78 5.75056,13.731 6.095,13.638 C4.21778,13.267 2.80333,11.635 2.80333,9.678 C2.80333,9.661 2.80333,9.643 2.80389,9.627 C3.35722,9.929 3.98944,10.111 4.66222,10.132 C3.56111,9.408 2.83667,8.171 2.83667,6.77 C2.83667,6.03 3.03889,5.336 3.39222,4.739 C5.41611,7.183 8.43944,8.791 11.85,8.959 C11.78,8.664 11.7433,8.355 11.7433,8.039 C11.7433,5.809 13.5806,4 15.8467,4 C17.0272,4 18.0933,4.491 18.8417,5.275 C19.7767,5.094 20.655,4.758 21.4478,4.295 C21.1411,5.238 20.4906,6.03 19.6433,6.53 C20.4733,6.433 21.2644,6.215 22,5.894 C21.45,6.704 20.7544,7.415 19.9528,7.985 C19.9606,8.158 19.9644,8.333 19.9644,8.507 C19.9644,13.845 15.8372,20 8.29,20 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkTwitter.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkTwitter.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkTwitter.REFS = REFS;
