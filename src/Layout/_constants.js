import { MEDIA_SIZES } from '../_constants';

import { TYPES as GEOMETRIC_TYPES } from '../Geometric/_constants';

export const COMPONENTS = {
  GENERAL: 'Layout',
  SECTION: 'LayoutSection',
  SECTION_BACKGROUND_IMAGE: 'LayoutSectionBackgroundImage',
  SECTION_GEOMETRIC: 'LayoutSectionGeometric',
  SECTION_PATTERN: 'LayoutSectionPattern',
  SECTION_CONTENT: 'LayoutSectionContent',
  BlOCK: 'LayoutBlock',
  HEADER: 'LayoutHeader',
  NAVIGATION: 'LayoutNavigation',
  NAVIGATION_MODAL: 'LayoutNavigationModal',
  NAVIGATION_SOCIAL_NETWORKS: 'LayoutNavigationSocialNetworks',
  NAVIGATION_APPLICATIONS: 'LayoutNavigationApplications',
  NAVIGATION_MENU: 'LayoutNavigationMenu',
  NAVIGATION_MENU_ITEM: 'LayoutNavigationMenuItem',
  NAVIGATION_LINKS: 'LayoutNavigationLinks',
  NAVIGATION_LINKS_ITEM: 'LayoutNavigationLinksItem',
  CLOSE: 'LayoutClose',
};

export const SECTION_REFS = {
  TYPES: {
    NORMAL: 'normal',
    CONTRAST: 'contrast',
    INVERSE: 'inverse',
    MAIN: 'main',
    DEEP: 'deep',
    ACCENTED: 'accented',

    BULLET: 'bullet',
    BLITZ: 'blitz',
    RAPID: 'rapid',
    CLASSIC: 'classic',
    OFFLINE: 'offline',
    ARMAGEDDON: 'armageddon',

    LEADERBOARD: 'leaderboard',
    LEARNING: 'learning',
  },
  PATTERNS: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  },
  GEOMETRIC: GEOMETRIC_TYPES,
};

export const BLOCK_REFS = {
  SPACING: {
    S: 's',
    M: 'm',
    L: 'l',
    NONE: 'none',
  },
  JUSTIFY: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
    SPACE_BETWEEN: 'spaceBetween',
    SPACE_AROUND: 'spaceAround',
    SPACE_EVENLY: 'spaceEvenly',
  },
};

/* eslint-disable */
export const PATTERNS = {
  [SECTION_REFS.PATTERNS['1']]: [
    ['t', 't', 'a', 't', 't'],
    ['t', 'a', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'a', 't'],
    ['a', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'a', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'a'],
    ['w', 'a', [['b', 't'], ['t', 'b']], 'a', 't'],
  ],
  [SECTION_REFS.PATTERNS['2']]: [
    ['b', 'a', 'b', [['b', 'a'], ['a', 'b']], [['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b']], 'b'],
    ['t', 'b', [['b', 'a'], ['a', 'b']], 't', 'b', 'w'],
    ['t', 't', 't', 'b', 'a', 'b'],
    ['t', 't', 'b', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 't', 'a',],
    ['t', 't', 't', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 't', 'b'],
  ],
  [SECTION_REFS.PATTERNS['3']]: [
    ['a', 't', [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], 'b', 't', 't', 't'],
    ['b', [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], 'b', [['a', 'b'], ['b', 'a']], [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], 't'],
    [[['w', 'b', 'w', 'b'], ['b', 'w', 'b', 'w'], ['w', 'b', 'w', 'b'], ['b', 'w', 'b', 'w']], 't', [['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'], ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'], ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'], ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'], ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'], ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'], ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'], ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w']], 'a', [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], 'b'],
    ['b', [['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't']], [['a', 'b'], ['b', 'a']], 'b', 'a', 'b', 't'],
    ['w', 'b', 't', [['a', 'b'], ['b', 'a']], 'b', 't', 't'],
    ['b', 'a', 'b', 't', 't', 't', 't'],
    ['a', 't', [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], 'b', 't', 't', 't'],
    ['b', 't', [['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't']], 't', 't', 't', 't'],
  ],
  [SECTION_REFS.PATTERNS['4']]: [
    ['w', [['b', 't'], ['t', 'b']], [['b', 't'], ['t', 'b']], 't'],
    [[['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'a', [['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b']], [['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b'], ['b', 't', 'b', 't', 'b', 't', 'b', 't'], ['t', 'b', 't', 'b', 't', 'b', 't', 'b']]],
    ['b', [['b', 't'], ['t', 'b']], 'b', 'w'],
    [[['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'b', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'b'],
    ['b', [['b', 't', 'b', 't'], ['t', 'b', 't', 'b'], ['b', 't', 'b', 't'], ['t', 'b', 't', 'b']], 'b', 't'],
    ['w', 'b', 't', 't'],
  ],
  [SECTION_REFS.PATTERNS['5']]: [[[['t', 'w15', 't', 'w15'], ['w15', 't', 'w15', 't'], ['t', 'w15', 't', 'w15'], ['w15', 't', 'w15', 't']], 'w15', 'w15', [['w15', 't'], ['t', 'w15']], [['w15', 't'], ['t', 'w15']], 'w15', 'w15', 't', 't', 't', 't', [['t', 'w15', 't', 'w15'], ['w15', 't', 'w15', 't'], ['t', 'w15', 't', 'w15'], ['t', 't', 't', 't']], [ ['t', 'w15', 't', 'w15'], ['w15', 't', 'w15', 't'], ['t', 'w15', 't', 'w15'], ['t', 't', 't', 't']], 't', 't', [['t', 't'], ['w15', 'w15']], [['w15', 'w15'], ['w15', 'w15']]],
    [[['t', 'w15', 't', 'w15'], ['w15', 't', 'w15', 't'], ['w15', 'w15', 'w15', 'w15'], ['w15', 'w15', 'w15', 'w15']], [['w15', 'w15'],['t', 't'],], [['w15', 'w15'], ['t', 't']], [['w15', 't'],['w15', 'w15']], [['w15', 't'],['w15', 'w15']], [['w15', 'w15'], ['t', 'w15']], [['w15', 'w15'], ['t', 'w15']],'t', 't', 'w15', 't', 't', 't', 't', 't','w15', [['w15', 'w15'], ['w15', 'w15']]],
    ['w15', 't', 't', 'w15', 'w15', [['w15', 't'],['t', 'w15']], [['w15', 't'], ['t', 'w15']], 'w15', 'w15', 't', 'w15', 't', 't', 't', 't', 'w15', 'w15'],
    [[['w15', 'w15'],['t', 'w15']], 't', 't', [['w15', 'w15'], ['t', 't']], [['w15', 'w15'], ['t', 't']], [['w15', 't'], ['w15', 'w15']], [['w15', 't'], ['w15', 'w15']], [['w15', 'w15'], ['t', 't']], [['w15', 'w15'], ['t', 't']], 't', 't', 't', 't', 'w15', 'w15'],
    [[['w15', 't'], ['t', 'w15']], 't', 't', 't', 't', 'w15', 'w15', 't', 't', 't', 't', 't', 't',  [['w15', 'w15'], ['t', 't']], [['w15', 'w15'], ['t', 't']], [['t', 't'], ['w15', 'w15']], [['t', 't'], ['w15', 'w15']]],
    [[['t', 't'], ['t', 't'], ], 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 'w15', 'w15']]
};

/* eslint-enable */
export const COLOR_TYPES = {
  [SECTION_REFS.TYPES.NORMAL]: 'normal',
  [SECTION_REFS.TYPES.CONTRAST]: 'normal',
  [SECTION_REFS.TYPES.INVERSE]: 'inverse',
  [SECTION_REFS.TYPES.MAIN]: 'inverse',
  [SECTION_REFS.TYPES.DEEP]: 'inverse',
  [SECTION_REFS.TYPES.ACCENTED]: 'inverse',

  [SECTION_REFS.TYPES.BULLET]: 'normal',
  [SECTION_REFS.TYPES.BLITZ]: 'normal',
  [SECTION_REFS.TYPES.RAPID]: 'normal',
  [SECTION_REFS.TYPES.CLASSIC]: 'normal',
  [SECTION_REFS.TYPES.OFFLINE]: 'normal',
  [SECTION_REFS.TYPES.ARMAGEDDON]: 'inverse',

  [SECTION_REFS.TYPES.LEADERBOARD]: 'inverse',
  [SECTION_REFS.TYPES.LEARNING]: 'inverse',
};

export const STYLES = {
  SECTIONS_PATTERN_POSITIONS: {
    [SECTION_REFS.PATTERNS['1']]: { top: 'auto', right: 0, left: 'auto', bottom: 0 },
    [SECTION_REFS.PATTERNS['2']]: { top: 0, right: 0, left: 'auto', bottom: 'auto' },
    [SECTION_REFS.PATTERNS['3']]: { top: 'auto', right: 'auto', left: 0, bottom: 0 },
    [SECTION_REFS.PATTERNS['4']]: { top: 0, right: 'auto', left: 0, bottom: 'auto' },
    [SECTION_REFS.PATTERNS['5']]: { top: 0, right: 'auto', left: 0, bottom: 'auto' },
  },
  SECTIONS_GEOMETRIC_POSITIONS: {
    [SECTION_REFS.GEOMETRIC.ALPHA]: { top: 0, right: 'auto', left: 0, bottom: 'auto' },
    [SECTION_REFS.GEOMETRIC.BETA]: { top: 0, right: 0, left: 'auto', bottom: 'auto' },
    [SECTION_REFS.GEOMETRIC.GAMMA]: { top: 0, right: 0, left: 'auto', bottom: 'auto' },
    [SECTION_REFS.GEOMETRIC.DELTA]: { top: 0, right: 0, left: 'auto', bottom: 'auto' },
  },
  SECTIONS_GEOMETRIC_WIDTHS: {
    [SECTION_REFS.GEOMETRIC.ALPHA]: {
      [MEDIA_SIZES.S]: 192.25,
      [MEDIA_SIZES.M]: 384.5,
      [MEDIA_SIZES.L]: 830,
    },
    [SECTION_REFS.GEOMETRIC.BETA]: {
      [MEDIA_SIZES.S]: 155,
      [MEDIA_SIZES.M]: 310,
      [MEDIA_SIZES.L]: 620,
    },
    [SECTION_REFS.GEOMETRIC.GAMMA]: {
      [MEDIA_SIZES.S]: 187.5,
      [MEDIA_SIZES.M]: 375,
      [MEDIA_SIZES.L]: 750,
    },
    [SECTION_REFS.GEOMETRIC.DELTA]: {
      [MEDIA_SIZES.S]: 171,
      [MEDIA_SIZES.M]: 342,
      [MEDIA_SIZES.L]: 684,
    },
  },
  SECTIONS_GEOMETRIC_HEIGHTS: {
    [SECTION_REFS.GEOMETRIC.ALPHA]: {
      [MEDIA_SIZES.S]: 236.75,
      [MEDIA_SIZES.M]: 473.5,
      [MEDIA_SIZES.L]: 947,
    },
    [SECTION_REFS.GEOMETRIC.BETA]: {
      [MEDIA_SIZES.S]: 260,
      [MEDIA_SIZES.M]: 520,
      [MEDIA_SIZES.L]: 1040,
    },
    [SECTION_REFS.GEOMETRIC.GAMMA]: {
      [MEDIA_SIZES.S]: 220.75,
      [MEDIA_SIZES.M]: 441.5,
      [MEDIA_SIZES.L]: 883,
    },
    [SECTION_REFS.GEOMETRIC.DELTA]: {
      [MEDIA_SIZES.S]: 282.5,
      [MEDIA_SIZES.M]: 565,
      [MEDIA_SIZES.L]: 1130,
    },
  },
  SECTION_BLOCK_PADDING: {
    NORMAL: {
      [MEDIA_SIZES.S]: {
        [BLOCK_REFS.SPACING.S]: '8px 32px 8px 64px',
        [BLOCK_REFS.SPACING.M]: '16px 32px 16px 64px',
        [BLOCK_REFS.SPACING.L]: '32px 32px 32px 64px',
        [BLOCK_REFS.SPACING.NONE]: '0 32px 0 64px',
      },
      [MEDIA_SIZES.M]: {
        [BLOCK_REFS.SPACING.S]: '12px 48px 12px 96px',
        [BLOCK_REFS.SPACING.M]: '24px 48px 24px 96px',
        [BLOCK_REFS.SPACING.L]: '48px 48px 48px 96px',
        [BLOCK_REFS.SPACING.NONE]: '0 48px 0 96px',
      },
      [MEDIA_SIZES.L]: {
        [BLOCK_REFS.SPACING.S]: '16px 64px 16px 128px',
        [BLOCK_REFS.SPACING.M]: '32px 64px 32px 128px',
        [BLOCK_REFS.SPACING.L]: '64px 64px 64px 128px',
        [BLOCK_REFS.SPACING.NONE]: '0 64px 0 128px',
      },
    },
    PROPORTIONAL: {
      [MEDIA_SIZES.S]: {
        [BLOCK_REFS.SPACING.S]: '8px 16px',
        [BLOCK_REFS.SPACING.M]: '16px 24px',
        [BLOCK_REFS.SPACING.L]: '32px 32px',
      },
      [MEDIA_SIZES.M]: {
        [BLOCK_REFS.SPACING.S]: '12px 48px',
        [BLOCK_REFS.SPACING.M]: '24px 48px',
        [BLOCK_REFS.SPACING.L]: '48px 48px',
      },
      [MEDIA_SIZES.L]: {
        [BLOCK_REFS.SPACING.S]: '16px 64px',
        [BLOCK_REFS.SPACING.M]: '32px 64px',
        [BLOCK_REFS.SPACING.L]: '64px 64px',
      },
    },
  },
  SECTION_BLOCK_JUSTIFY: {
    [BLOCK_REFS.JUSTIFY.START]: 'flex-start',
    [BLOCK_REFS.JUSTIFY.CENTER]: 'center',
    [BLOCK_REFS.JUSTIFY.END]: 'flex-end',
    [BLOCK_REFS.JUSTIFY.SPACE_BETWEEN]: 'space-between',
    [BLOCK_REFS.JUSTIFY.SPACE_AROUND]: 'space-around',
    [BLOCK_REFS.JUSTIFY.SPACE_EVENLY]: 'space-evenly',
  },
  NAVIGATION_TOGGLE_POSITION: {
    [MEDIA_SIZES.S]: { top: 20, left: 20 },
    [MEDIA_SIZES.M]: { top: 36, left: 36 },
    [MEDIA_SIZES.L]: { top: 52, left: 52 },
  },
  NAVIGATION_SOCIAL_NETWORKS_POSITION: {
    [MEDIA_SIZES.S]: { top: 84, left: 20 },
    [MEDIA_SIZES.M]: { top: 132, left: 36 },
    [MEDIA_SIZES.L]: { top: 180, left: 52 },
  },
  NAVIGATION_CONTENT_PADDING: {
    [MEDIA_SIZES.S]: '0px 20px 0px 40px',
    [MEDIA_SIZES.M]: '0px 30px 0px 60px',
    [MEDIA_SIZES.L]: '0px 40px 0px 80px',
  },
};
