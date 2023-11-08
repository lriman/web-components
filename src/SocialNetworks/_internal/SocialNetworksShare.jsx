import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ColorContext from '../../_context/colorContext';
import { addDataAttributes } from '../../_utils';

import {
  IconSocialNetworkFacebook,
  IconSocialNetworkTelegram,
  IconSocialNetworkTwitter,
  IconSocialNetworkVk,
} from '../../Icon';

import { getBoxPositionOnWindowCenter, getShareLink } from '../_utils';
import { COMPONENTS, REFS, SHARE_LINKS } from '../_constants';
import { StyledSocialNetworks, StyledSocialNetworksInner, StyledSocialNetworksShareItem } from '../_style';

export default function SocialNetworksShare(props) {
  const { url, title, position, size } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const handleClick = link => {
    const boxPosition = getBoxPositionOnWindowCenter(REFS.SHARE_BOX_SIZES.WIDTH, REFS.SHARE_BOX_SIZES.HEIGHT);
    const config = {
      ...boxPosition,
      height: REFS.SHARE_BOX_SIZES.HEIGHT,
      width: REFS.SHARE_BOX_SIZES.WIDTH,
      location: 'no',
      toolbar: 'no',
      status: 'no',
      directories: 'no',
      menubar: 'no',
      scrollbars: 'yes',
      resizable: 'no',
      centerscreen: 'yes',
      chrome: 'yes',
    };

    window.open(
      getShareLink(link, url, title),
      '',
      Object.keys(config)
        .map(key => `${key}=${config[key]}`)
        .join(', '),
    );
  };

  return (
    <StyledSocialNetworks {...addDataAttributes({ component: COMPONENTS.SHARE })}>
      <StyledSocialNetworksInner sPosition={position}>
        <StyledSocialNetworksShareItem
          onClick={() => handleClick(SHARE_LINKS[REFS.SOCIAL_NETWORKS.FACEBOOK])}
          sColorType={colorType}
        >
          <IconSocialNetworkFacebook size={size} />
        </StyledSocialNetworksShareItem>
        <StyledSocialNetworksShareItem
          onClick={() => handleClick(SHARE_LINKS[REFS.SOCIAL_NETWORKS.TWITTER])}
          sColorType={colorType}
        >
          <IconSocialNetworkTwitter size={size} />
        </StyledSocialNetworksShareItem>
        <StyledSocialNetworksShareItem
          onClick={() => handleClick(SHARE_LINKS[REFS.SOCIAL_NETWORKS.TELEGRAM])}
          sColorType={colorType}
        >
          <IconSocialNetworkTelegram size={size} />
        </StyledSocialNetworksShareItem>
        <StyledSocialNetworksShareItem
          onClick={() => handleClick(SHARE_LINKS[REFS.SOCIAL_NETWORKS.VK])}
          sColorType={colorType}
        >
          <IconSocialNetworkVk size={size} />
        </StyledSocialNetworksShareItem>
      </StyledSocialNetworksInner>
    </StyledSocialNetworks>
  );
}

SocialNetworksShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  position: PropTypes.oneOf(Object.values(REFS.POSITION)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
};

SocialNetworksShare.defaultProps = {
  title: undefined,
  position: REFS.POSITION.HORIZONTAL,
  size: REFS.SIZES.M,
};
