import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkYoutube(props) {
  const type = TYPES.SOCIAL_NETWORK_YOUTUBE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M22.453,6.31241 C22.909,8.05942 22.909,11.7046 22.909,11.7046 C22.909,11.7046 22.909,15.3496 22.453,17.0967 C22.2021,18.0606 21.4628,18.8197 20.524,19.0774 C18.8227,19.5455 11.9999,19.5455 11.9999,19.5455 C11.9999,19.5455 5.17714,19.5455 3.4757,19.0774 C2.53689,18.8197 1.79756,18.0606 1.54665,17.0967 C1.09082,15.3496 1.09082,11.7046 1.09082,11.7046 C1.09082,11.7046 1.09082,8.05942 1.54665,6.31241 C1.79756,5.34849 2.53689,4.58944 3.4757,4.33183 C5.17714,3.86365 11.9999,3.86365 11.9999,3.86365 C11.9999,3.86365 18.8227,3.86365 20.524,4.33183 C21.4628,4.58944 22.2021,5.34849 22.453,6.31241 Z M9.95446,15.4546 L15.409,12.0456 L9.95446,8.63637 L9.95446,15.4546 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkYoutube.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkYoutube.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkYoutube.REFS = REFS;
