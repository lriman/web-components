import moment from 'moment';

import { getBrowser } from '../_utils';

import { STYLES } from './_constants';

export function getInputLabelTop(isSmall, isTextArea) {
  if (isSmall) return '-12px';
  if (isTextArea) return '20px';
  return '50%';
}

export function getInputLabelColor(theme, colorType, type, isDisabled, isError, isWarning, isFocused) {
  if (isDisabled) return theme.input[colorType].labelColors[type].disabled;
  if (isFocused) return theme.input[colorType].labelColors[type].focused;
  if (isError) return theme.input[colorType].labelColors[type].error;
  if (isWarning) return theme.input[colorType].labelColors[type].warning;
  return theme.input[colorType].labelColors[type].normal;
}

export function getInputLabelFontSize(mediaSize, sSize, isSmall) {
  if (isSmall) return `${STYLES.INPUT_LABEL.FONT_SIZES[mediaSize][sSize].SMALL}px`;
  return `${STYLES.INPUT_LABEL.FONT_SIZES[mediaSize][sSize].NORMAL}px`;
}

export function getInputWidth(width) {
  if (typeof width === 'number') return `${width}px`;
  return width || '100%';
}

export function getInputElementColor(theme, colorType, type, isEntered, isDisabled, isFocused) {
  if (isDisabled) return theme.input[colorType].elementColors[type].disabled;
  if (isEntered) return theme.input[colorType].elementColors[type].entered;
  if (isFocused) return theme.input[colorType].elementColors[type].focused;
  return theme.input[colorType].elementColors[type].normal;
}

export function getInputElementBackgroundColor(theme, colorType, type, isEntered, isDisabled, isFocused) {
  if (isDisabled) return theme.input[colorType].elementBackgroundColors[type].disabled;
  if (isEntered) return theme.input[colorType].elementBackgroundColors[type].entered;
  if (isFocused) return theme.input[colorType].elementBackgroundColors[type].focused;
  return theme.input[colorType].elementBackgroundColors[type].normal;
}

export function getInputElementBorderColor(
  theme,
  colorType,
  type,
  isEntered,
  isDisabled,
  isFocused,
  isError,
  isWarning,
  isWithoutBorder,
) {
  if (isWithoutBorder) return theme.input[colorType].elementBorderColors[type].transparent;
  if (isDisabled) return theme.input[colorType].elementBorderColors[type].disabled;
  if (isFocused) return theme.input[colorType].elementBorderColors[type].focused;
  if (isError) return theme.input[colorType].elementBorderColors[type].error;
  if (isWarning) return theme.input[colorType].elementBorderColors[type].warning;
  if (isEntered) return theme.input[colorType].elementBorderColors[type].entered;
  return theme.input[colorType].elementBorderColors[type].normal;
}

export function getInputCheckboxIconBackgroundColor(theme, colorType, isChecked, isDisabled, isHovered) {
  if (isDisabled && isChecked) return theme.input[colorType].checkboxIconBackgroundColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].checkboxIconBackgroundColors.disabled;
  if (isHovered && isChecked) return theme.input[colorType].checkboxIconBackgroundColors.hoveredChecked;
  if (isHovered) return theme.input[colorType].checkboxIconBackgroundColors.hovered;
  if (isChecked) return theme.input[colorType].checkboxIconBackgroundColors.checked;
  return theme.input[colorType].checkboxIconBackgroundColors.normal;
}

export function getInputCheckboxIconBorderColor(
  theme,
  colorType,
  isChecked,
  isDisabled,
  isWarning,
  isError,
  isHovered,
) {
  if (isDisabled && isChecked) return theme.input[colorType].checkboxIconBorderColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].checkboxIconBorderColors.disabled;
  if (isError) return theme.input[colorType].checkboxIconBorderColors.error;
  if (isWarning) return theme.input[colorType].checkboxIconBorderColors.warning;
  if (isHovered && isChecked) return theme.input[colorType].checkboxIconBorderColors.hoveredChecked;
  if (isHovered) return theme.input[colorType].checkboxIconBorderColors.hovered;
  if (isChecked) return theme.input[colorType].checkboxIconBorderColors.checked;
  return theme.input[colorType].checkboxIconBorderColors.normal;
}

export function getInputCheckboxIconColor(theme, colorType, isDisabled) {
  if (isDisabled) return theme.input[colorType].checkboxIconColors.disabled;
  return theme.input[colorType].checkboxIconColors.normal;
}

export function getInputRadioIconBackgroundColor(theme, colorType, mark, isChecked, isDisabled, isHovered) {
  if (isDisabled && isChecked) return theme.input[colorType].radioIconBackgroundColors[mark].checkedDisabled;
  if (isDisabled) return theme.input[colorType].radioIconBackgroundColors[mark].disabled;
  if (isHovered && isChecked) return theme.input[colorType].radioIconBackgroundColors[mark].hoveredChecked;
  if (isHovered) return theme.input[colorType].radioIconBackgroundColors[mark].hovered;
  if (isChecked) return theme.input[colorType].radioIconBackgroundColors[mark].checked;
  return theme.input[colorType].radioIconBackgroundColors[mark].normal;
}

export function getInputRadioIconBorderColor(
  theme,
  colorType,
  mark,
  isChecked,
  isDisabled,
  isWarning,
  isError,
  isHovered,
) {
  if (isDisabled && isChecked) return theme.input[colorType].radioIconBorderColors[mark].checkedDisabled;
  if (isDisabled) return theme.input[colorType].radioIconBorderColors[mark].disabled;
  if (isError) return theme.input[colorType].radioIconBorderColors[mark].error;
  if (isWarning) return theme.input[colorType].radioIconBorderColors[mark].warning;
  if (isHovered && isChecked) return theme.input[colorType].radioIconBorderColors[mark].hoveredChecked;
  if (isHovered) return theme.input[colorType].radioIconBorderColors[mark].hovered;
  if (isChecked) return theme.input[colorType].radioIconBorderColors[mark].checked;
  return theme.input[colorType].radioIconBorderColors[mark].normal;
}

export function getInputRadioIconColor(theme, colorType, isDisabled) {
  if (isDisabled) return theme.input[colorType].radioIconColors.disabled;
  return theme.input[colorType].radioIconColors.normal;
}

export const getInputRadioButtonColor = (theme, colorType, isChecked, isDisabled, isHovered) => {
  if (isDisabled && isChecked) return theme.input[colorType].radioButtonColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].radioButtonColors.disabled;
  if (isHovered && isChecked) return theme.input[colorType].radioButtonColors.hoveredChecked;
  if (isHovered) return theme.input[colorType].radioButtonColors.hovered;
  if (isChecked) return theme.input[colorType].radioButtonColors.checked;
  return theme.input[colorType].radioButtonColors.normal;
};

export const getInputRadioButtonBackgroundColor = (theme, colorType, isChecked, isDisabled, isHovered) => {
  if (isDisabled && isChecked) return theme.input[colorType].radioButtonBackgroundColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].radioButtonBackgroundColors.disabled;
  if (isHovered && isChecked) return theme.input[colorType].radioButtonBackgroundColors.hoveredChecked;
  if (isHovered) return theme.input[colorType].radioButtonBackgroundColors.hovered;
  if (isChecked) return theme.input[colorType].radioButtonBackgroundColors.checked;
  return theme.input[colorType].radioButtonBackgroundColors.normal;
};

export const getInputRadioButtonBorderColor = (theme, colorType, isChecked, isDisabled, isHovered) => {
  if (isDisabled && isChecked) return theme.input[colorType].radioButtonBorderColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].radioButtonBorderColors.disabled;
  if (isHovered && isChecked) return theme.input[colorType].radioButtonBorderColors.hoveredChecked;
  if (isHovered) return theme.input[colorType].radioButtonBorderColors.hovered;
  if (isChecked) return theme.input[colorType].radioButtonBorderColors.checked;
  return theme.input[colorType].radioButtonBorderColors.normal;
};

export const getInputPlaceholderColor = (theme, colorType, type) => {
  return theme.input[colorType].placeholderColor[type];
};

export function getInputElementLineHeight(mediaSize, size) {
  return `${STYLES.INPUT_ELEMENT.LINE_HEIGHT[mediaSize][size]}px`;
}

export function getInputElementPadding(mediaSize, size) {
  const padding = STYLES.INPUT_ELEMENT.PADDING[mediaSize][size];
  return `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`;
}

export function getInputElementFontSize(mediaSize, size) {
  return `${STYLES.INPUT_ELEMENT.FONT_SIZES[mediaSize][size]}px`;
}

export function getInputElementHeight(mediaSize, size) {
  return `${STYLES.INPUT_ELEMENT.HEIGHTS[mediaSize][size]}px`;
}

export function getInputDateRangeSize(mediaSize, size) {
  return `${11 * STYLES.INPUT_DATE_RANGE.WIDTHS[mediaSize][size]}px`;
}

export function getInputPasswordType(isHidden, isAutoComplete) {
  const browser = getBrowser();
  if (isAutoComplete && isHidden) return 'password';
  if (!isHidden) return 'text';
  if (['Safari', 'Chrome'].includes(browser)) return 'text';
  return 'password';
}

export function getInputPasswordAutoComplete(isHidden, isAutoComplete) {
  if (isAutoComplete) return 'on';
  return isHidden ? 'new-password' : 'off';
}

export function getInputTextAreaPadding(mediaSize, size) {
  const padding = STYLES.INPUT_TEXT_AREA.PADDING[mediaSize][size];
  return `${padding[0]}px ${padding[1]}px`;
}

export function getInputTextAreaHeight(mediaSize, size, rows) {
  const height =
    rows * STYLES.INPUT_ELEMENT.LINE_HEIGHT[mediaSize][size] +
    STYLES.INPUT_TEXT_AREA.PADDING[mediaSize][size][0] * 2 +
    2;
  return `${height}px`;
}

export function getInputWithIconElementPaddingRight(mediaSize, size) {
  return `${STYLES.INPUT_WITH_ICON.PADDING_RIGHT[mediaSize][size]}px`;
}

export function getInputWithIconLabelPaddingRight(mediaSize, size) {
  return `${STYLES.INPUT_WITH_ICON.PADDING_RIGHT[mediaSize][size] + 1}px`;
}

export function getInputIconColor(theme, colorType, type, isSelected, isDisabled, isHovered) {
  if (isDisabled) return theme.input[colorType].iconColors[type].disabled;
  if (isHovered) return theme.input[colorType].iconColors[type].hovered;
  if (isSelected) return theme.input[colorType].iconColors[type].selected;
  return theme.input[colorType].iconColors[type].normal;
}

export function getInputSwitchIconBackgroundColor(theme, colorType, isChecked, isDisabled) {
  if (isDisabled && isChecked) return theme.input[colorType].switchIconBackgroundColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].switchIconBackgroundColors.disabled;
  if (isChecked) return theme.input[colorType].switchIconBackgroundColors.checked;
  return theme.input[colorType].switchIconBackgroundColors.normal;
}

export function getInputSwitchIconTop(mediaSize, size) {
  return `${STYLES.INPUT_SWITCH_ICON.TOP[mediaSize][size]}px`;
}

export function getInputSwitchIconSize(mediaSize, size) {
  return `${STYLES.INPUT_SWITCH_ICON.SIZES[mediaSize][size]}px`;
}

export function getInputSwitchTitleMarginLeft(mediaSize, size) {
  return `${STYLES.INPUT_SWITCH_TITLE.MARGIN_LEFT[mediaSize][size]}px`;
}

export function getInputRadioGroupButtonSize(mediaSize, size) {
  return `${STYLES.INPUT_RADIO_GROUP_BUTTON.SIZES[mediaSize][size]}px`;
}

export function getInputToggleSwitchSliderSize(mediaSize, size, isHeight) {
  if (isHeight) return `${STYLES.INPUT_TOGGLE_SWITCH_SLIDER.SIZES[mediaSize][size] / 1.66}px`;
  return `${STYLES.INPUT_TOGGLE_SWITCH_SLIDER.SIZES[mediaSize][size]}px`;
}

export function getInputToggleSwitchTitleMarginLeft(mediaSize, size, isReversed) {
  return isReversed ? 0 : `${STYLES.INPUT_TOGGLE_SWITCH_TITLE.MARGIN_LEFT[mediaSize][size]}px`;
}

export function getInputToggleSwitchSliderInnerIcon(mediaSize, size) {
  return `${Math.floor(STYLES.INPUT_TOGGLE_SWITCH_SLIDER.SIZES[mediaSize][size] / 2.2)}px`;
}

export function getInputToggleSwitchSliderInnerTranslate(mediaSize, size) {
  return `translateX(${Math.floor(STYLES.INPUT_TOGGLE_SWITCH_SLIDER.SIZES[mediaSize][size] / 2.41)}px)`;
}

export function getInputToggleSwitchSliderInnerOffset(mediaSize, size) {
  return `${Math.floor(STYLES.INPUT_TOGGLE_SWITCH_SLIDER.SIZES[mediaSize][size] / 18)}px`;
}

export function getInputOptionsStyle(sStyle, sDefaultWidth) {
  const width = sDefaultWidth;
  let minWidth = (sStyle && sStyle.minWidth) || null;
  if (sStyle && sStyle.minWidth && sStyle.minWidth === '100%') minWidth = width;
  let maxWidth = (sStyle && sStyle.maxWidth) || null;
  if (sStyle && sStyle.maxWidth && sStyle.maxWidth === '100%') maxWidth = width;
  return {
    width,
    ...sStyle,
    minWidth,
    maxWidth,
  };
}

export function getInputOptionsItemBackgroundColor(theme, colorType, isSelected, isActive) {
  if (isSelected) {
    if (isActive) return theme.input[colorType].optionsItemBackgroundColors.selectedActive;
    return theme.input[colorType].optionsItemBackgroundColors.selected;
  }
  if (isActive) return theme.input[colorType].optionsItemBackgroundColors.active;
  return theme.input[colorType].optionsItemBackgroundColors.normal;
}

export function getInputOptionsItemColor(theme, colorType, isSelected, isActive) {
  if (isSelected) {
    if (isActive) return theme.input[colorType].optionsItemColors.selectedActive;
    return theme.input[colorType].optionsItemColors.selected;
  }
  if (isActive) return theme.input[colorType].optionsItemColors.active;
  return theme.input[colorType].optionsItemColors.normal;
}

export const getInputToggleSliderBackgroundColor = (theme, colorType, sColor, isChecked, isDisabled, isHovered) => {
  if (isChecked && isDisabled) return theme.input[colorType].toggleSliderBackgroundColors[sColor].checkedDisabled;
  if (isDisabled) return theme.input[colorType].toggleSliderBackgroundColors[sColor].disabled;
  if (isHovered && isChecked) return theme.input[colorType].toggleSliderBackgroundColors[sColor].hoveredChecked;
  if (isChecked) return theme.input[colorType].toggleSliderBackgroundColors[sColor].checked;
  if (isHovered) return theme.input[colorType].toggleSliderBackgroundColors[sColor].hovered;
  return theme.input[colorType].toggleSliderBackgroundColors[sColor].normal;
};

export const getInputToggleSliderInnerColor = (theme, colorType, isChecked, isDisabled, isHovered) => {
  if (isChecked && isDisabled) return theme.input[colorType].toggleSliderInnerColors.checkedDisabled;
  if (isDisabled) return theme.input[colorType].toggleSliderInnerColors.disabled;
  if (isHovered && isChecked) return theme.input[colorType].toggleSliderInnerColors.hoveredChecked;
  if (isChecked) return theme.input[colorType].toggleSliderInnerColors.checked;
  if (isHovered) return theme.input[colorType].toggleSliderInnerColors.hovered;
  return theme.input[colorType].toggleSliderInnerColors.normal;
};

export const getChar = e => {
  if (e.which === null) {
    if (e.keyCode < 32) return null;
    return String.fromCharCode(e.keyCode);
  }
  if (e.which !== 0 && e.charCode !== 0) {
    if (e.which < 32) return null;
    return String.fromCharCode(e.which);
  }
  return null;
};

export const getCaretPosition = (value, beforeCaretPosValue, firstPosition) => {
  let pos = 0;
  let conj = 0;
  if (beforeCaretPosValue) {
    value.split('').some(symbol => {
      pos += 1;
      if (symbol === beforeCaretPosValue[conj]) {
        conj += 1;
        if (conj === beforeCaretPosValue.length) return true;
      }
      return false;
    });
  }
  if (firstPosition && pos < firstPosition) return firstPosition;
  return pos;
};

export const getStringFromMomentValue = value => {
  if (value === null) return value;
  const momentValue = moment(value);
  return momentValue.isValid() ? momentValue.format('DD.MM.YYYY') : '';
};

export const getStringFromNumberValue = value => (typeof value === 'number' ? value.toString() : value);

export const getOptionTitle = (value, options) => {
  if (!value || !options) return '';
  const selectedOption = options.find(option => option.value === value);
  return selectedOption ? selectedOption.title : '';
};

export const formatTextValue = (value, maxLength) => {
  if (value === null) return '';
  return maxLength ? value.substring(0, maxLength) : value;
};

export const deformatTextValue = value => {
  if (value === '') return null;
  return value;
};

export const formatDateValue = value => {
  if (value === null) return '';
  const dottedValue = value
    .replace(/[^\d\\.]/g, '')
    .replace(/\.+/g, '.')
    .substring(0, 10);
  const preparedValue = value.replace(/\D/g, '').substring(0, 8);

  const resultValue = [];
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && [1, 3].includes(index)) resultValue.push('.');
  });
  if ([3, 6].includes(dottedValue.length) && dottedValue[dottedValue.length - 1] === '.') resultValue.push('.');
  return resultValue.join('');
};

/**
 * Сбрасывается дата на 31.03.1981 при выборе даты 01.04.1981
 * Это связано с тем, что даты 1 апреля 1981(1982,1983,1984) 00:00:00+0300 - не существует.
 * Тогда ввели летнее время и после 31 марта 23:59:59 сразу наступал час ночи 1 апреля.
 * Проодолжалось это все до 1985 года - тогда отменили. и стали переводить часы не фиксированно, а в плавающую дату.
 * 1982,1983,1984 - сразу проставляется час ночи, а в 1981 - нет
 */
const checkStupidDate = date => {
  const stupidDateStart = moment('1981-03-31T22:59:59');
  const stupidDateEnd = moment('1981-04-01T01:00:00');
  if (date.isAfter(stupidDateStart) && date.isBefore(stupidDateEnd)) return stupidDateEnd;
  return date;
};

export const deformatDateValue = (value, disabledDate = () => false) => {
  if (value.length < 10) return null;
  const momentValue = moment(value, 'DD.MM.YYYY');
  const isValid = /^\d{2}\.\d{2}\.\d{4}$/gi.test(value) && momentValue.isValid() && !disabledDate(momentValue);
  return isValid ? checkStupidDate(momentValue).format() : null;
};

export const formatDigitalValue = (value, maxLength) => {
  if (value === null) return '';
  const result = value.replace(/\D/g, '');
  return maxLength ? result.substring(0, maxLength) : value;
};

export const deformatDigitalValue = value => {
  if (value === '') return null;
  return value.replace(/\D/g, '');
};

export const formatNumberDecimalValue = (value, isNegative, isFormatted, maxLength, frictionLength, isFinal) => {
  const stringValue = getStringFromNumberValue(value);
  if (stringValue === null) return '';

  const minus = !isNegative || stringValue.indexOf('-') < 0 ? '' : '-';
  const preparedValue = stringValue
    .replace(',', '.')
    .replace(/[^\d\\.]/g, '')
    .replace(/^0+/, '0')
    .replace(/^0([\d\\.]+)$/, '$1');
  const dotIndex = preparedValue.indexOf('.');
  const integerValue = preparedValue
    .substring(0, dotIndex < 0 ? preparedValue.length : dotIndex)
    .substring(0, maxLength);
  const decimalValue = dotIndex < 0 ? '' : preparedValue.substring(dotIndex + 1).substring(0, frictionLength);

  let integerResultValue = integerValue;
  if (isFormatted) {
    const integerResultValueArray = [];
    integerValue
      .split('')
      .reverse()
      .forEach((symbol, index) => {
        if (index && !(index % 3)) integerResultValueArray.unshift(' ');
        integerResultValueArray.unshift(symbol);
      });
    integerResultValue = integerResultValueArray.join('');
  }

  const emptyDecimal = Array(frictionLength).fill('0').join('');
  const decimalResultValue = isFinal ? `${decimalValue}${emptyDecimal}`.substring(0, frictionLength) : decimalValue;

  if (isFinal && !integerResultValue.length) return `${minus}0,${decimalResultValue}`;
  if (isFinal) return `${minus}${integerResultValue},${decimalResultValue}`;
  if (!integerResultValue.length && dotIndex > -1) return `${minus}0,${decimalResultValue}`;
  if (!integerResultValue.length) return minus;
  if (integerResultValue.length && dotIndex > -1) return `${minus}${integerResultValue},${decimalResultValue}`;
  return `${minus}${integerResultValue}`;
};

export const deformatNumberDecimalValue = value => {
  if (value === '' || value === '-') return null;
  return parseFloat(value.replace(/[^-\d\\,]/g, '').replace(',', '.'));
};

export const formatNumberIntegerValue = (value, isNegative, isFormatted, maxLength, isFinal) => {
  const stringValue = getStringFromNumberValue(value);
  if (stringValue === null) return '';

  const minus = !isNegative || stringValue.indexOf('-') < 0 ? '' : '-';
  const preparedValue = stringValue
    .replace(/[^\d]/g, '')
    .replace(/^0+/, '0')
    .replace(/^0([\d]+)$/, '$1');
  const integerValue = preparedValue.substring(0, maxLength);

  let integerResultValue = integerValue;
  if (isFormatted) {
    const integerResultValueArray = [];
    integerValue
      .split('')
      .reverse()
      .forEach((symbol, index) => {
        if (index && !(index % 3)) integerResultValueArray.unshift(' ');
        integerResultValueArray.unshift(symbol);
      });
    integerResultValue = integerResultValueArray.join('');
  }

  if (isFinal) return `${minus}${integerResultValue}`;
  if (!integerResultValue.length) return minus;
  return `${minus}${integerResultValue}`;
};

export const deformatNumberIntegerValue = value => {
  if (value === '' || value === '-') return null;
  return parseInt(value.replace(/[^-\d]/g, ''), 10);
};

export const formatPhoneValue = value => {
  if (value === null) return '';
  const preparedValue = value
    .replace('+', '')
    .replace(/\D/g, '')
    .replace(/^8/, '7')
    .replace(/^([^7])/, '7$1')
    .substring(0, 11);

  const resultValue = [];
  if (preparedValue.length) resultValue.push('+');
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && index === 0) resultValue.push(' (');
    if (index !== preparedValue.length - 1 && index === 3) resultValue.push(') ');
    if (index !== preparedValue.length - 1 && [6, 8].includes(index)) resultValue.push('-');
  });
  return resultValue.join('');
};

export const deformatPhoneValue = value => {
  if (value === '') return null;
  return `${value.replace(/[^+\d]/g, '')}`;
};

export const getHours = value => {
  if (value.length === 1) {
    if (parseInt(value, 10) > 2) return `0${value}`;
  }
  if (value.length === 2) {
    if (parseInt(value, 10) > 23) return value.substring(0, 1);
  }
  return value;
};

export const getMinutes = value => {
  if (value.length === 1) {
    if (parseInt(value, 10) > 5) return `0${value}`;
  }
  if (value.length === 2) {
    if (parseInt(value, 10) > 59) return value.substring(0, 1);
  }
  return value;
};

export const formatTimeValue = value => {
  if (value === null) return '';
  const prePreparedValue = value.replace(/\D/g, '');
  const hours = getHours(prePreparedValue.substring(0, 2), 10);
  const minutes = getMinutes(prePreparedValue.substring(2, 4), 10);
  const preparedValue = `${hours}${minutes}`;
  const resultValue = [];
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && index === 1) resultValue.push(':');
  });
  return resultValue.join('');
};

export const deformatTimeValue = value => {
  if (value === '') return null;
  return value.replace(/[^\d:]/g, '');
};

export const getNumberDisplayedValue = (value, units) => {
  if (!units || !value) return value;
  return `${value} ${units}`;
};

export const getNumberPureValue = (value, units) => {
  if (!units || !value) return value;
  return value.replace(` ${units}`);
};

export const formatInputMonth = (value, separator) => {
  if (value === null) return '';
  const preparedValue = value.replace(/\D/g, '').substring(0, 6);

  const resultValue = [];
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && index === 1) resultValue.push(separator);
  });
  return resultValue.join('');
};

export const deformatInputMonth = value => {
  if (value === '') return null;
  return `${value.replace(/[^.\-/\d]/g, '')}`;
};
