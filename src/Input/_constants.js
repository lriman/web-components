import { MEDIA_SIZES } from '../_constants';
import { BOX_REFS as POPUP_BOX_REFS } from '../Popup/_constants';

export const TYPES = {
  ACCOUNT: 'InputAccount',
  CHECKBOX: 'InputCheckbox',
  DATE: 'InputDate',
  DATE_RANGE: 'InputDateRange',
  DATE_CALENDAR: 'InputDateCalendar',
  DATE_RANGE_CALENDAR: 'InputDateRangeCalendar',
  DATE_TIME: 'InputDateTime',
  DATE_TIME_CALENDAR: 'InputDateTimeCalendar',
  DIGITAL: 'InputDigital',
  MONTH: 'InputMonth',
  MULTI_SELECT: 'InputMultiSelect',
  FILES: 'InputFiles',
  NUMBER_DECIMAL: 'InputNumberDecimal',
  NUMBER_INTEGER: 'InputNumberInteger',
  PASSWORD: 'InputPassword',
  PHONE: 'InputPhone',
  RADIO_GROUP: 'InputRadioGroup',
  RADIO_GROUP_OPTION: 'InputRadioOption',
  SEARCH: 'InputSearch',
  SELECT: 'InputSelect',
  SMS_CODE: 'InputSmsCode',
  SUGGEST: 'InputSuggest',
  TEXT: 'InputText',
  TEXT_AREA: 'InputTextArea',
  TIME: 'InputTime',
  TOGGLE_SWITCH: 'InputToggleSwitch',
  BUTTON: 'Button',
};

export const COMPONENTS = {
  GENERAL: 'Input',
  CALENDAR: 'InputCalendar',
  RANGE_CALENDAR: 'InputRangeCalendar',
  OPTIONS: 'Options',
  OPTIONS_ITEM: 'OptionsItem',
};

export const SIZES = {
  S: 's',
  M: 'm',
  L: 'l',
};

export const TEXT_ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

export const SEPARATORS = {
  DOT: '.',
  DASH: '-',
  SLASH: '/',
};

export const INPUT_SELECT_POPUP_BOX_ALIGN = {
  START: POPUP_BOX_REFS.START,
  END: POPUP_BOX_REFS.END,
};

export const BACKGROUND_COLOR_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export const INPUT_REFS = {
  SIZES,
  TEXT_ALIGN,
  SEPARATORS,
  COLORS: {
    MAJOR: 'major',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MINOR: 'minor',
    POSITIVE: 'positive',
    WARNING: 'warning',
    NEGATIVE: 'negative',
    LINK: 'link',
    DISABLED: 'disabled',
  },
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
};

export const INPUT_SELECT_REFS = {
  SIZES,
  TEXT_ALIGN,
  POPUP_BOX_ALIGN: INPUT_SELECT_POPUP_BOX_ALIGN,
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
};

export const INPUT_DATE_REFS = {
  SIZES,
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
};

export const INPUT_RADIO_GROUP_REFS = {
  SIZES,
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  MARKS: {
    DOT: 'dot',
    CHECK: 'check',
  },
};

export const STYLES = {
  INPUT_LABEL: {
    FONT_SIZES: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: { SMALL: 14, NORMAL: 16 },
        [SIZES.M]: { SMALL: 14, NORMAL: 16 },
        [SIZES.L]: { SMALL: 14, NORMAL: 20 },
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: { SMALL: 14, NORMAL: 16 },
        [SIZES.M]: { SMALL: 14, NORMAL: 16 },
        [SIZES.L]: { SMALL: 14, NORMAL: 20 },
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: { SMALL: 14, NORMAL: 16 },
        [SIZES.M]: { SMALL: 14, NORMAL: 16 },
        [SIZES.L]: { SMALL: 14, NORMAL: 20 },
      },
    },
  },
  INPUT_ELEMENT: {
    LINE_HEIGHT: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 20,
        [SIZES.M]: 24,
        [SIZES.L]: 32,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 20,
        [SIZES.M]: 24,
        [SIZES.L]: 32,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 20,
        [SIZES.M]: 24,
        [SIZES.L]: 32,
      },
    },
    PADDING: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: [7, 11, 7, 11],
        [SIZES.M]: [11, 11, 11, 11],
        [SIZES.L]: [15, 11, 15, 11],
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: [7, 11, 7, 11],
        [SIZES.M]: [11, 11, 11, 11],
        [SIZES.L]: [15, 11, 15, 11],
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: [7, 11, 7, 11],
        [SIZES.M]: [11, 11, 11, 11],
        [SIZES.L]: [15, 11, 15, 11],
      },
    },
    FONT_SIZES: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 14,
        [SIZES.M]: 16,
        [SIZES.L]: 20,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 14,
        [SIZES.M]: 16,
        [SIZES.L]: 20,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 14,
        [SIZES.M]: 16,
        [SIZES.L]: 20,
      },
    },
    HEIGHTS: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 36,
        [SIZES.M]: 48,
        [SIZES.L]: 56,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 36,
        [SIZES.M]: 48,
        [SIZES.L]: 56,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 36,
        [SIZES.M]: 48,
        [SIZES.L]: 56,
      },
    },
  },
  INPUT_TEXT_AREA: {
    PADDING: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: [3, 11],
        [SIZES.M]: [3, 11],
        [SIZES.L]: [7, 11],
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: [3, 11],
        [SIZES.M]: [3, 11],
        [SIZES.L]: [7, 11],
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: [3, 11],
        [SIZES.M]: [3, 11],
        [SIZES.L]: [7, 11],
      },
    },
  },
  INPUT_WITH_ICON: {
    PADDING_RIGHT: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 31,
        [SIZES.M]: 31,
        [SIZES.L]: 31,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 31,
        [SIZES.M]: 31,
        [SIZES.L]: 31,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 31,
        [SIZES.M]: 31,
        [SIZES.L]: 31,
      },
    },
  },
  INPUT_SWITCH_ICON: {
    TOP: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: -1,
        [SIZES.M]: 1,
        [SIZES.L]: 5,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: -1,
        [SIZES.M]: 1,
        [SIZES.L]: 5,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: -1,
        [SIZES.M]: 1,
        [SIZES.L]: 5,
      },
    },
    SIZES: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 20,
        [SIZES.M]: 20,
        [SIZES.L]: 24,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 20,
        [SIZES.M]: 20,
        [SIZES.L]: 24,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 20,
        [SIZES.M]: 20,
        [SIZES.L]: 24,
      },
    },
  },
  INPUT_RADIO_GROUP_BUTTON: {
    SIZES: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 28,
        [SIZES.M]: 40,
        [SIZES.L]: 48,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 28,
        [SIZES.M]: 40,
        [SIZES.L]: 48,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 28,
        [SIZES.M]: 40,
        [SIZES.L]: 48,
      },
    },
  },
  INPUT_SWITCH_TITLE: {
    MARGIN_LEFT: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 32,
        [SIZES.M]: 32,
        [SIZES.L]: 32,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 32,
        [SIZES.M]: 32,
        [SIZES.L]: 32,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 32,
        [SIZES.M]: 32,
        [SIZES.L]: 32,
      },
    },
  },
  INPUT_TOGGLE_SWITCH_SLIDER: {
    TOP: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 1,
        [SIZES.M]: 1,
        [SIZES.L]: 5,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 1,
        [SIZES.M]: 1,
        [SIZES.L]: 5,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 1,
        [SIZES.M]: 1,
        [SIZES.L]: 5,
      },
    },
    SIZES: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 36,
        [SIZES.M]: 40,
        [SIZES.L]: 54,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 36,
        [SIZES.M]: 40,
        [SIZES.L]: 60,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 36,
        [SIZES.M]: 40,
        [SIZES.L]: 60,
      },
    },
  },
  INPUT_TOGGLE_SWITCH_TITLE: {
    MARGIN_LEFT: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 24,
        [SIZES.M]: 24,
        [SIZES.L]: 24,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 22,
        [SIZES.M]: 28,
        [SIZES.L]: 28,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 20,
        [SIZES.M]: 24,
        [SIZES.L]: 24,
      },
    },
  },
  INPUT_DATE_RANGE: {
    WIDTHS: {
      [MEDIA_SIZES.S]: {
        [SIZES.S]: 7.7,
        [SIZES.M]: 8.6,
        [SIZES.L]: 10.5,
      },
      [MEDIA_SIZES.M]: {
        [SIZES.S]: 7.7,
        [SIZES.M]: 8.6,
        [SIZES.L]: 10.5,
      },
      [MEDIA_SIZES.L]: {
        [SIZES.S]: 7.7,
        [SIZES.M]: 8.6,
        [SIZES.L]: 10.5,
      },
    },
  },
};
