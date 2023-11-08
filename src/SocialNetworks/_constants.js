import { REFS as ICON_REFS } from '../Icon/_constants';

export const COMPONENTS = {
  GENERAL: 'SocialNetworks',
  SHARE: 'SocialNetworksShare',
};

export const REFS = {
  SOCIAL_NETWORKS: {
    TWITTER: 'twitter',
    FACEBOOK: 'facebook',
    VK: 'vk',
    TWITCH: 'twitch',
    YOUTUBE: 'youtube',
    DISCORD: 'discord',
    TELEGRAM: 'telegram',
  },
  POSITION: {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
  },
  SIZES: {
    ...ICON_REFS.SIZES,
  },
  SHARE_BOX_SIZES: {
    HEIGHT: 650,
    WIDTH: 600,
  },
};

export const LINKS = {
  [REFS.SOCIAL_NETWORKS.TWITTER]: 'https://twitter.com/LevitovChess',
  [REFS.SOCIAL_NETWORKS.VK]: 'https://vk.com/levitovchess',
  [REFS.SOCIAL_NETWORKS.FACEBOOK]: 'https://www.facebook.com/levitovchess',
  [REFS.SOCIAL_NETWORKS.TWITCH]: 'https://www.twitch.tv/levitovchess',
  [REFS.SOCIAL_NETWORKS.YOUTUBE]: 'https://www.youtube.com/channel/UC2LfLTCrohyJvUDl9-51RjQ',
  [REFS.SOCIAL_NETWORKS.DISCORD]: 'https://discord.com/invite/Tr2z3SQ',
  [REFS.SOCIAL_NETWORKS.TELEGRAM]: 'https://t.me/chess',
};

export const SHARE_LINKS = {
  [REFS.SOCIAL_NETWORKS.TWITTER]: 'https://twitter.com/intent/tweet/?text={:title}&url={:url}',
  [REFS.SOCIAL_NETWORKS.VK]: 'http://vk.com/share.php?title={:title}&url={:url}',
  [REFS.SOCIAL_NETWORKS.FACEBOOK]: 'https://facebook.com/sharer/sharer.php?u={:url}',
  [REFS.SOCIAL_NETWORKS.TELEGRAM]: 'https://telegram.me/share/url?text={:title}&url={:url}',
};

export const STYLES = {
  DIRECTION: {
    [REFS.POSITION.HORIZONTAL]: 'row',
    [REFS.POSITION.VERTICAL]: 'column',
  },
};
