import { MEDIA_SIZES } from '../_constants';
import { REFS as TYPOGRAPHY_REFS, STYLES as TYPOGRAPHY_STYLES } from '../Typography/_constants';

export const COMPONENTS = {
  GENERAL: 'Icon',
};

export const TYPES = {
  ADVANCED_OPTIONS: 'advancedOptions',
  ALARM_CLOCK: 'alarmClock',
  ALTERNATIVE: 'alternative',
  ARROW_DOWN: 'arrowDown',
  ARROW_DOWN_CIRCLE: 'arrowDownCircle',
  ARROW_DOWN_FILLED: 'arrowDownFilled',
  ARROW_DOWN_TAILED: 'arrowDownTailed',
  ARROW_DOWN_NEXT: 'arrowDownNext',
  ARROW_EXTERNAL: 'arrowExternal',
  ARROW_FIRST: 'arrowFirst',
  ARROW_FORWARD: 'arrowForward',
  ARROW_LEFT: 'arrowLeft',
  ARROW_LAST: 'arrowLast',
  ARROW_LEFT_DOUBLE: 'arrowLeftDouble',
  ARROW_LEFT_FILLED: 'arrowLeftFilled',
  ARROW_LEFT_NEXT: 'arrowLeftNext',
  ARROW_LEFT_TAILED: 'arrowLeftTailed',
  ARROW_RIGHT: 'arrowRight',
  ARROW_RIGHT_DOUBLE: 'arrowRightDouble',
  ARROW_RIGHT_FILLED: 'arrowRightFilled',
  ARROW_RIGHT_TAILED: 'arrowRightTailed',
  ARROW_UP: 'arrowUp',
  ARROW_UP_CIRCLE: 'arrowUpCircle',
  ARROW_UP_FILLED: 'arrowUpFilled',
  ARROW_UP_TAILED: 'arrowUpTailed',
  BELL: 'bell',
  BLANK: 'blank',
  BOOKMARK: 'bookmark',
  BULLET: 'bullet',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CAMERA_CHANGE: 'cameraChange',
  CARD: 'card',
  CART: 'cart',
  CHART: 'chart',
  CHART_THICK: 'chartThick',
  CHECKED_CHECKBOX: 'checkedCheckbox',
  CHECKED_LIST: 'checkedList',
  CHECKED_RADIO: 'checkedRadio',
  CHESSBOARD: 'chessboard',
  CHESSBOARD_3_X_3: 'chessboard3x3',
  CHESSBOARD_4_X_4: 'chessboard4x4',
  CHESSBOARD_CUP: 'chessboardCup',
  CHESSBOARD_MINI: 'chessboardMini',
  CHESSBOARD_MULTI: 'chessboardMulti',
  CHESS_BADGE: 'chessBadge',
  CHESS_BADGE_BLACK: 'chessBadgeBlack',
  CHESS_BADGE_FILL: 'chessBadgeFill',
  CHESS_BADGE_MULTI: 'chessBadgeMulti',
  CHESS_BADGE_WHITE: 'chessBadgeWhite',
  CHESS_CLOCK: 'chessClock',
  CHESS_FELLED: 'chessFelled',
  CHESS_PAWN_WITH_CROWN: 'chessPawnWithCrown',
  CHESS_PAWN_WITH_CROWN_FILL: 'chessPawnWithCrownFill',
  CHESS_QUEEN: 'chessQueen',
  CHESS_ROOK_BACKLIT: 'chessRookBacklit',
  CHESS_SEARCH: 'chessSearch',
  CLEAR_ALL: 'clearAll',
  CLOCK: 'clock',
  CLOSE: 'close',
  CLOSE_THIN: 'closeThin',
  COLUMNS: 'columns',
  COMBINATION: 'combination',
  CONTEXT_HORIZONTAL: 'contextHorizontal',
  CONTEXT_VERTICAL: 'contextVertical',
  COPY: 'copy',
  CUP: 'cup',
  CUP_FILL: 'cupFill',
  CUP_GOLD: 'cupGold',
  DATABASE: 'database',
  DOCUMENT: 'document',
  DOCUMENT_PDF: 'documentPDF',
  DOT_WITH_WAVE: 'dotWithWave',
  DOWNLOAD: 'download',
  EQUAL: 'equal',
  ERROR: 'error',
  ETUDE: 'etude',
  EXPAND: 'expand',
  EYE_CLOSED: 'eyeClosed',
  EYE_OPEN: 'eyeOpen',
  FAVORITE: 'favorite',
  FILTER: 'filter',
  FIRE: 'fire',
  FIRE_FILL: 'fireFill',
  FLAG: 'flag',
  FLIP: 'flip',
  FLIP_BOARD: 'flipBoard',
  FRIENDS: 'friends',
  GEAR: 'gear',
  HAND: 'hand',
  HAND_SHAKE: 'handShake',
  INFO_CIRCLE: 'infoCircle',
  KNOCKOUT: 'knockout',
  LIGHTNING: 'lightning',
  LINK: 'link',
  MENU: 'menu',
  MENU_CLOSE: 'menuClose',
  MENU_OPEN: 'menuOpen',
  MINUS_BASIC: 'minusBasic',
  MINUS_CIRCLE: 'minusCircle',
  MONEY: 'money',
  NOT_EQUAL: 'notEqual',
  ONLINE: 'online',
  OPEN_NEW_WINDOW: 'openNewWindow',
  PAUSE: 'pause',
  PEOPLE: 'people',
  PERSON: 'person',
  PLAY: 'play',
  PLUS: 'plus',
  PLUS_BASIC: 'plusBasic',
  PLUS_CIRCLE: 'plusCircle',
  POINTER: 'pointer',
  PRINT: 'print',
  PROCESS_CHOOSE: 'processChoose',
  PROCESS_CONTRACT: 'processContract',
  PROCESS_DECISION: 'processDecision',
  PROCESS_FILL: 'processFill',
  PROCESS_MONEY: 'processMoney',
  PROCESSOR: 'processor',
  PROMPT: 'prompt',
  PUZZLE: 'puzzle',
  PUZZLE_LITE: 'puzzleLite',
  PUZZLE_NEW: 'puzzleNew',
  PUZZLE_RUSH: 'puzzleRush',
  QUESTION: 'question',
  QUESTION_CIRCLE: 'questionCircle',
  QUESTION_FILLED: 'questionFilled',
  RABBIT: 'rabbit',
  REDUCE: 'reduce',
  REMOVE: 'remove',
  REPEAT: 'repeat',
  SEARCH: 'search',
  SHIELD: 'shield',
  SIDE_OPEN: 'sideOpen',
  SIDE_CLOSE: 'sideClose',
  SIGN: 'sign',
  SOCIAL_NETWORK_DISCORD: 'socialNetworkDiscord',
  SOCIAL_NETWORK_FACEBOOK: 'socialNetworkFacebook',
  SOCIAL_NETWORK_GOOGLE: 'socialNetworkGoogle',
  SOCIAL_NETWORK_GOOGLE_PLUS: 'socialNetworkGooglePlus',
  SOCIAL_NETWORK_INSTAGRAM: 'socialNetworkInstagram',
  SOCIAL_NETWORK_TELEGRAM: 'socialNetworkTelegram',
  SOCIAL_NETWORK_TWITCH: 'socialNetworkTwitch',
  SOCIAL_NETWORK_TWITTER: 'socialNetworkTwitter',
  SOCIAL_NETWORK_VK: 'socialNetworkVk',
  SOCIAL_NETWORK_YOUTUBE: 'socialNetworkYoutube',
  SORTING: 'sorting',
  SORTING_ASC: 'sortingAsc',
  SORTING_DESC: 'sortingDesc',
  STAR: 'star',
  STARS: 'stars',
  STAR_FAVOURITE: 'starFavourite',
  STAR_FAVOURITE_FILL: 'starFavouriteFill',
  SUCCESS: 'success',
  SUCCESS_CIRCLE: 'successCircle',
  SUCCESS_FILL: 'successFill',
  THERMOMETER: 'thermometer',
  TICK: 'tick',
  UPLOAD: 'upload',
  USERS: 'users',
  VIEW_TABLE: 'viewTable',
  VIEW_TIMELINE: 'viewTimeline',
  WAIT: 'wait',
  WARNING: 'warning',
  WARNING_FILL: 'warningFill',
  WREATH: 'wreath',
  SANDGLASS: 'sandglass',
  BOARD_EDITOR: 'boardEditor',
  QUIZ: 'quiz',
  BRUSH: 'brush',
  LOCK: 'lock',
};

export const REFS = {
  SIZES: {
    XXS: 'xxs',
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
    XXL: 'xxl',
    XXXL: 'xxxl',
  },

  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },

  COLORS: TYPOGRAPHY_REFS.COLORS,
};

export const STYLES = {
  SIZES: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.XXS]: 12,
      [REFS.SIZES.XS]: 16,
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
      [REFS.SIZES.XL]: 40,
      [REFS.SIZES.XXL]: 48,
      [REFS.SIZES.XXXL]: 63,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.XXS]: 12,
      [REFS.SIZES.XS]: 16,
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
      [REFS.SIZES.XL]: 40,
      [REFS.SIZES.XXL]: 48,
      [REFS.SIZES.XXXL]: 63,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.XXS]: 12,
      [REFS.SIZES.XS]: 16,
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
      [REFS.SIZES.XL]: 40,
      [REFS.SIZES.XXL]: 48,
      [REFS.SIZES.XXXL]: 63,
    },
  },

  DISPLAY: {
    [REFS.DISPLAY.BLOCK]: 'block',
    [REFS.DISPLAY.INLINE]: 'inline-block',
  },

  COLORS: TYPOGRAPHY_STYLES.COLORS,
};
