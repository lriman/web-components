export const COMPONENTS = {
  GENERAL: 'MobileAppButtons',
};

export const REFS = {
  TYPE: {
    APP_STORE: 'appStore',
    GOOGLE_PLAY: 'googlePlay',
  },
  POSITION: {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
  },
};

export const LINKS = {
  [REFS.TYPE.APP_STORE]: 'https://apps.apple.com/app/levitov-chess/id1509217930',
  [REFS.TYPE.GOOGLE_PLAY]: 'https://play.google.com/store/apps/details?id=com.levitovchess',
};

export const STYLES = {
  DIRECTION: {
    [REFS.POSITION.HORIZONTAL]: 'row',
    [REFS.POSITION.VERTICAL]: 'column',
  },
};
