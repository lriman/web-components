import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkGoogle(props) {
  const type = TYPES.SOCIAL_NETWORK_GOOGLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M17.793875,13.9894375 L12,13.9894375 L12,10.0105625 L22.24,10.0105625 L22.24,12.0000625 C22.24,17.4850625 17.646375,21.9474375 12,21.9474375 C6.353675,21.9474375 1.76,17.4850625 1.76,12.0000625 C1.76,6.5149375 6.353675,2.0525625 12,2.0525625 C14.459625,2.0525625 16.827125,2.912025 18.670375,4.471775 L15.97925,7.4719375 C14.8815,6.5428125 13.468375,6.0315625 12,6.0315625 C8.6126125,6.0315625 5.856,8.7094375 5.856,12.0000625 C5.856,15.2905625 8.6126125,17.9684375 12,17.9684375 C14.670625,17.9684375 16.948,16.3053125 17.793875,13.9894375 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkGoogle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkGoogle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkGoogle.REFS = REFS;
