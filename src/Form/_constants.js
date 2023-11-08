import { COLORS } from '../_constants';
import { TYPES as INPUT_TYPES, SIZES as INPUT_SIZES } from '../Input/_constants';

export const COMPONENTS = {
  GENERAL: 'Form',
  FIELD: 'FormField',
};

export const FORM_REFS = {
  SIZES: INPUT_SIZES,
};

export const FIELD_REFS = {
  ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
  },
};

export const FIELD_INPUT_TYPES = Object.values(INPUT_TYPES);

export const STYLES = {
  FIELD_ALIGN: {
    [FIELD_REFS.ALIGN.LEFT]: 'left',
    [FIELD_REFS.ALIGN.CENTER]: 'center',
    [FIELD_REFS.ALIGN.RIGHT]: 'right',
  },
  ERROR_COLOR: COLORS.TRANSPORT_RED,
};
