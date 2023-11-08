import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import IconSocialNetworkTwitter from '../Icon/IconSocialNetworkTwitter';
import IconSocialNetworkFacebook from '../Icon/IconSocialNetworkFacebook';
import IconSocialNetworkVk from '../Icon/IconSocialNetworkVk';
import IconSocialNetworkTwitch from '../Icon/IconSocialNetworkTwitch';
import IconSocialNetworkYoutube from '../Icon/IconSocialNetworkYoutube';
import IconSocialNetworkTelegram from '../Icon/IconSocialNetworkTelegram';
import IconSocialNetworkDiscord from '../Icon/IconSocialNetworkDiscord';

import SocialNetworksShare from './_internal/SocialNetworksShare';

import { COMPONENTS, REFS, LINKS } from './_constants';
import { StyledSocialNetworks, StyledSocialNetworksInner, StyledSocialNetworksItem } from './_style';

export default function SocialNetworks(props) {
  const { position, size } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledSocialNetworks {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledSocialNetworksInner sPosition={position}>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.VK]} sColorType={colorType}>
          <IconSocialNetworkVk size={size} />
        </StyledSocialNetworksItem>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.FACEBOOK]} sColorType={colorType}>
          <IconSocialNetworkFacebook size={size} />
        </StyledSocialNetworksItem>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.TELEGRAM]} sColorType={colorType}>
          <IconSocialNetworkTelegram size={size} />
        </StyledSocialNetworksItem>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.TWITCH]} sColorType={colorType}>
          <IconSocialNetworkTwitch size={size} />
        </StyledSocialNetworksItem>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.TWITTER]} sColorType={colorType}>
          <IconSocialNetworkTwitter size={size} />
        </StyledSocialNetworksItem>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.YOUTUBE]} sColorType={colorType}>
          <IconSocialNetworkYoutube size={size} />
        </StyledSocialNetworksItem>
        <StyledSocialNetworksItem href={LINKS[REFS.SOCIAL_NETWORKS.DISCORD]} sColorType={colorType}>
          <IconSocialNetworkDiscord size={size} />
        </StyledSocialNetworksItem>
      </StyledSocialNetworksInner>
    </StyledSocialNetworks>
  );
}

SocialNetworks.propTypes = {
  position: PropTypes.oneOf(Object.values(REFS.POSITION)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
};

SocialNetworks.defaultProps = {
  position: REFS.POSITION.HORIZONTAL,
  size: REFS.SIZES.M,
};

SocialNetworks.REFS = REFS;
SocialNetworks.Share = SocialNetworksShare;
