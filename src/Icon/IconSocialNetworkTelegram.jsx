import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconSocialNetworkTelegram(props) {
  const type = TYPES.SOCIAL_NETWORK_TELEGRAM;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M9.63864059,14.8947114 L18.9419,6.49919 C19.3502,6.13681 18.8527,5.96009 18.3107,6.28879 L6.82867,13.5327 L1.86907,11.9847 C0.798011,11.6567 0.79032,10.9208 2.10953,10.3916 L21.436,2.93942 C22.3187,2.53868 23.1706,3.15143 22.8337,4.50242 L19.5424,20.0123 C19.3125,21.1144 18.6466,21.378 17.7239,20.8689 L12.7100586,17.1646168 L10.3001,19.508 C10.0201,19.7802 9.79847,20.0096 9.29688,20.0096 L9.63829,14.8945 L9.63864059,14.8947114 Z" />
    </IconPrimitive>
  );
}

IconSocialNetworkTelegram.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconSocialNetworkTelegram.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconSocialNetworkTelegram.REFS = REFS;
