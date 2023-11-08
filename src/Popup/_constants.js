export const COMPONENTS = {
  BOX: 'PopupBox',
  OPENER: 'PopupOpener',
};

export const OPENER_REFS = {
  DISPLAY: {
    INLINE: 'inline',
    BLOCK: 'block',
  },
};

export const BOX_REFS = {
  PLACEMENT: {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
  },
  ALIGN: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
  },
};

export const STYLES = {
  DISPLAY: {
    [OPENER_REFS.DISPLAY.INLINE]: 'inline-block',
    [OPENER_REFS.DISPLAY.BLOCK]: 'block',
  },
};
