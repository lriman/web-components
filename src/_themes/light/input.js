import oldColors from '../oldColors';
import colors from '../colors';

export default {
  normal: {
    labelColors: {
      primary: {
        disabled: colors.grey40,
        focused: colors.grey50,
        warning: colors.accents.warning.medium,
        error: colors.accents.error.medium,
        normal: colors.grey50,
      },
      secondary: {
        disabled: colors.grey40,
        focused: colors.grey50,
        warning: colors.accents.warning.medium,
        error: colors.accents.error.medium,
        normal: colors.grey50,
      },
    },
    placeholderColor: {
      primary: colors.grey40,
      secondary: colors.grey40,
    },
    elementColors: {
      primary: {
        disabled: colors.grey40,
        focused: colors.base.onContrast.main,
        normal: colors.base.onContrast.high,
        entered: colors.base.onContrast.high,
      },
      secondary: {
        disabled: colors.grey40,
        focused: colors.white,
        normal: colors.white,
        entered: colors.white,
      },
    },
    elementBackgroundColors: {
      primary: {
        disabled: colors.grey20,
        focused: colors.white,
        normal: colors.white,
        entered: colors.white,
      },
      secondary: {
        disabled: colors.grey20,
        focused: colors.base.background.normal,
        normal: colors.base.background.normal,
        entered: colors.brand.primary.medium,
      },
    },
    elementBorderColors: {
      primary: {
        disabled: colors.grey20,
        focused: colors.brand.primary.medium,
        warning: colors.accents.warning.medium,
        error: colors.accents.error.medium,
        normal: colors.base.onContrast.strokes,
        entered: colors.base.onContrast.strokes,
        transparent: colors.transparent,
      },
      secondary: {
        disabled: colors.grey20,
        focused: colors.brand.primary.medium,
        warning: colors.accents.warning.medium,
        error: colors.accents.error.medium,
        normal: colors.base.onContrast.strokes,
        entered: colors.brand.primary.medium,
        transparent: colors.transparent,
      },
    },

    iconColors: {
      primary: {
        disabled: colors.grey40,
        hovered: colors.brand.primary.main,
        selected: colors.base.onBase.high,
        normal: colors.grey30,
      },
      secondary: {
        disabled: colors.grey40,
        hovered: colors.brand.primary.main,
        selected: colors.base.onBase.high,
        normal: colors.grey30,
      },
    },

    switchIconBoxShadowFocusedColor: colors.brand.primary.medium,
    checkboxIconBackgroundColors: {
      checkedDisabled: colors.grey20,
      disabled: colors.grey20,
      hoveredChecked: colors.base.onContrast.high,
      hovered: colors.base.background.normal,
      checked: colors.base.onContrast.high,
      normal: colors.base.background.normal,
    },
    checkboxIconBorderColors: {
      checkedDisabled: colors.grey20,
      disabled: colors.grey20,
      hoveredChecked: colors.base.onContrast.high,
      hovered: colors.base.onContrast.strokes,
      checked: colors.base.onContrast.high,
      warning: colors.accents.warning.medium,
      error: colors.accents.error.medium,
      normal: colors.base.onContrast.strokes,
    },
    checkboxIconColors: {
      disabled: colors.grey40,
      normal: colors.white,
    },

    radioIconBackgroundColors: {
      dot: {
        checkedDisabled: colors.grey20,
        disabled: colors.grey20,
        hoveredChecked: colors.base.onContrast.high,
        hovered: colors.base.background.normal,
        checked: colors.base.onContrast.high,
        normal: colors.base.background.normal,
      },
      check: {
        checkedDisabled: colors.grey20,
        disabled: colors.grey20,
        hoveredChecked: colors.base.onContrast.high,
        hovered: colors.base.background.normal,
        checked: colors.base.onContrast.main,
        normal: colors.transparent,
      },
    },
    radioIconBorderColors: {
      dot: {
        checkedDisabled: colors.grey20,
        disabled: colors.grey20,
        hoveredChecked: colors.base.onContrast.high,
        hovered: colors.base.onContrast.strokes,
        checked: colors.base.onContrast.high,
        warning: colors.accents.warning.medium,
        error: colors.accents.error.medium,
        normal: colors.base.onContrast.strokes,
      },
      check: {
        checkedDisabled: colors.grey20,
        disabled: colors.grey20,
        hoveredChecked: colors.base.onContrast.high,
        hovered: colors.brand.primary.pale,
        checked: colors.base.onContrast.main,
        warning: colors.accents.warning.medium,
        error: colors.accents.error.medium,
        normal: colors.brand.primary.pale,
      },
    },
    radioIconColors: {
      disabled: colors.grey40,
      normal: colors.white,
    },

    radioButtonColors: {
      checkedDisabled: colors.grey30,
      disabled: colors.grey20,
      hoveredChecked: colors.grey80,
      hovered: colors.grey100,
      checked: colors.grey100,
      normal: colors.grey30,
    },
    radioButtonBackgroundColors: {
      checkedDisabled: colors.transparent,
      disabled: colors.transparent,
      hoveredChecked: '#E3E8F5',
      hovered: '#E3E8F5',
      checked: '#E3E8F5',
      normal: colors.transparent,
    },
    radioButtonBorderColors: {
      checkedDisabled: colors.transparent,
      disabled: colors.transparent,
      hoveredChecked: colors.transparent,
      hovered: colors.transparent,
      checked: colors.transparent,
      normal: colors.transparent,
    },

    switchIconBackgroundColors: {
      normal: colors.white,
      checkedDisabled: colors.white,
      disabled: colors.white,
      checked: colors.white,
      hovered: colors.white,
    },
    optionsItemColors: {
      selectedActive: oldColors.purple,
      active: oldColors.purple,
      selected: oldColors.purpleHigh,
      normal: oldColors.greyDark90,
    },
    optionsItemBackgroundColors: {
      selectedActive: oldColors.white,
      active: oldColors.white,
      selected: oldColors.white,
      normal: oldColors.white,
    },

    toggleSliderBackgroundColors: {
      major: {
        checkedDisabled: colors.base.onContrast.strokes,
        disabled: colors.base.onContrast.strokes,
        hoveredChecked: colors.base.onContrast.medium,
        checked: colors.base.onContrast.main,
        hovered: colors.base.onBase.low,
        normal: colors.base.onContrast.disabled,
      },
      primary: {
        checkedDisabled: colors.base.onContrast.strokes,
        disabled: colors.base.onContrast.strokes,
        hoveredChecked: colors.base.onContrast.medium,
        checked: colors.base.onContrast.main,
        hovered: colors.base.onBase.low,
        normal: colors.base.onContrast.disabled,
      },
    },
    toggleSliderInnerColors: {
      checkedDisabled: colors.grey20,
      disabled: colors.grey10,
      hoveredChecked: colors.grey20,
      checked: colors.white,
      hovered: colors.white,
      normal: colors.white,
    },

    multiSelectValueColor: colors.white,
    multiSelectValueBackgroundColor: colors.black,
    multiSelectValueQtyColor: colors.white,
    multiSelectValueQtyBackgroundColor: colors.black,
    iconClearBackgroundColor: colors.grey20,
  },

  inverse: {
    labelColors: {
      primary: {
        disabled: colors.grey70,
        focused: colors.grey50,
        warning: colors.accents.warning.main,
        error: colors.accents.error.main,
        normal: colors.grey50,
      },
      secondary: {
        disabled: colors.grey70,
        focused: colors.grey30,
        warning: colors.accents.warning.main,
        error: colors.accents.error.main,
        normal: colors.grey30,
      },
    },
    placeholderColor: {
      primary: colors.grey70,
      secondary: colors.grey40,
    },
    elementColors: {
      primary: {
        disabled: colors.grey70,
        focused: colors.base.onBase.main,
        normal: colors.base.onBase.high,
        entered: colors.base.onBase.high,
      },
      secondary: {
        disabled: colors.grey70,
        focused: colors.base.onBase.main,
        normal: colors.base.onBase.high,
        entered: colors.white,
      },
    },
    elementBackgroundColors: {
      primary: {
        disabled: colors.grey90,
        focused: colors.transparent,
        normal: colors.transparent,
        entered: colors.transparent,
      },
      secondary: {
        disabled: colors.grey90,
        focused: colors.base.background.surface2,
        normal: colors.base.background.surface2,
        entered: colors.base.onContrast.medium,
      },
    },
    elementBorderColors: {
      primary: {
        disabled: colors.grey90,
        focused: colors.brand.primary.main,
        warning: colors.accents.warning.main,
        error: colors.accents.error.main,
        normal: colors.base.onBase.strokes,
        entered: colors.base.onBase.strokes,
        transparent: colors.transparent,
      },
      secondary: {
        disabled: colors.grey90,
        focused: colors.brand.primary.main,
        warning: colors.accents.warning.main,
        error: colors.accents.error.main,
        normal: colors.base.background.surface2,
        entered: colors.base.onContrast.medium,
        transparent: colors.transparent,
      },
    },

    iconColors: {
      primary: {
        disabled: colors.grey70,
        hovered: colors.brand.primary.main,
        selected: colors.base.onBase.high,
        normal: colors.grey50,
      },
      secondary: {
        disabled: colors.grey70,
        hovered: colors.brand.primary.main,
        selected: colors.base.onBase.high,
        normal: colors.grey30,
      },
    },

    switchIconBoxShadowFocusedColor: colors.brand.primary.main,
    checkboxIconBackgroundColors: {
      checkedDisabled: colors.grey90,
      disabled: colors.grey90,
      hoveredChecked: colors.brand.primary.medium,
      hovered: colors.base.background.deep,
      checked: colors.brand.primary.medium,
      normal: colors.base.background.deep,
    },
    checkboxIconBorderColors: {
      checkedDisabled: colors.grey90,
      disabled: colors.grey90,
      hoveredChecked: colors.brand.primary.medium,
      hovered: colors.base.onBase.strokes,
      checked: colors.brand.primary.medium,
      warning: colors.accents.warning.main,
      error: colors.accents.error.main,
      normal: colors.base.onBase.strokes,
    },
    checkboxIconColors: {
      disabled: colors.grey70,
      normal: colors.white,
    },

    radioIconBackgroundColors: {
      dot: {
        checkedDisabled: colors.grey90,
        disabled: colors.grey90,
        hoveredChecked: colors.brand.primary.medium,
        hovered: colors.base.background.deep,
        checked: colors.brand.primary.medium,
        normal: colors.base.background.deep,
      },
      check: {
        checkedDisabled: colors.grey90,
        disabled: colors.grey90,
        hoveredChecked: colors.brand.primary.medium,
        hovered: colors.base.background.deep,
        checked: colors.brand.primary.medium,
        normal: colors.transparent,
      },
    },
    radioIconBorderColors: {
      dot: {
        checkedDisabled: colors.grey90,
        disabled: colors.grey90,
        hoveredChecked: colors.brand.primary.medium,
        hovered: colors.base.onBase.strokes,
        checked: colors.brand.primary.medium,
        warning: colors.accents.warning.main,
        error: colors.accents.error.main,
        normal: colors.base.onBase.strokes,
      },
      check: {
        checkedDisabled: colors.grey90,
        disabled: colors.grey90,
        hoveredChecked: colors.brand.primary.medium,
        hovered: colors.base.onBase.strokes,
        checked: colors.brand.primary.medium,
        warning: colors.accents.warning.main,
        error: colors.accents.error.main,
        normal: colors.base.onBase.strokes,
      },
    },
    radioIconColors: {
      disabled: colors.grey70,
      normal: colors.white,
    },

    radioButtonColors: {
      checkedDisabled: colors.grey60,
      disabled: colors.grey80,
      hoveredChecked: colors.white,
      hovered: colors.brand.primary.main,
      checked: colors.white,
      normal: colors.base.onBase.disabled,
    },
    radioButtonBackgroundColors: {
      checkedDisabled: colors.transparent,
      disabled: colors.transparent,
      hoveredChecked: colors.transparent,
      hovered: colors.transparent,
      checked: colors.transparent,
      normal: colors.transparent,
    },
    radioButtonBorderColors: {
      checkedDisabled: colors.transparent,
      disabled: colors.transparent,
      hoveredChecked: colors.transparent,
      hovered: colors.transparent,
      checked: colors.transparent,
      normal: colors.transparent,
    },

    switchIconBackgroundColors: {
      normal: colors.white,
      checkedDisabled: colors.white,
      disabled: colors.white,
      checked: colors.white,
      hovered: colors.white,
    },
    optionsItemColors: {
      selectedActive: colors.white,
      active: colors.brand.primary.light,
      selected: colors.white,
      normal: colors.base.onBase.low,
    },
    optionsItemBackgroundColors: {
      selectedActive: colors.transparent,
      active: colors.transparent,
      selected: colors.transparent,
      normal: colors.transparent,
    },

    toggleSliderBackgroundColors: {
      major: {
        checkedDisabled: colors.base.background.surface2,
        disabled: colors.base.background.surface2,
        hoveredChecked: colors.brand.primary.medium,
        checked: colors.brand.primary.main,
        hovered: colors.base.onBase.disabled,
        normal: colors.base.onBase.low,
      },
      primary: {
        checkedDisabled: colors.base.background.surface2,
        disabled: colors.base.background.surface2,
        hoveredChecked: colors.brand.primary.medium,
        checked: colors.brand.primary.main,
        hovered: colors.base.onBase.disabled,
        normal: colors.base.onBase.low,
      },
    },
    toggleSliderInnerColors: {
      checkedDisabled: colors.grey20,
      disabled: colors.grey10,
      hoveredChecked: colors.grey20,
      checked: colors.white,
      hovered: colors.white,
      normal: colors.white,
    },

    multiSelectValueColor: colors.white,
    multiSelectValueBackgroundColor: colors.black,
    multiSelectValueQtyColor: colors.white,
    multiSelectValueQtyBackgroundColor: colors.black,
    iconClearBackgroundColor: colors.grey80,
  },
};
