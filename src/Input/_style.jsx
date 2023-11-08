import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';
import { StyledIcon, StyledIconSvg } from '../Icon/_style';

import {
  getInputLabelTop,
  getInputLabelColor,
  getInputLabelFontSize,
  getInputWidth,
  getInputElementColor,
  getInputElementBackgroundColor,
  getInputElementBorderColor,
  getInputElementLineHeight,
  getInputElementPadding,
  getInputElementFontSize,
  getInputElementHeight,
  getInputPlaceholderColor,
  getInputPasswordType,
  getInputPasswordAutoComplete,
  getInputTextAreaPadding,
  getInputTextAreaHeight,
  getInputWithIconElementPaddingRight,
  getInputWithIconLabelPaddingRight,
  getInputIconColor,
  getInputSwitchIconBackgroundColor,
  getInputSwitchIconTop,
  getInputSwitchIconSize,
  getInputSwitchTitleMarginLeft,
  getInputOptionsStyle,
  getInputToggleSwitchSliderSize,
  getInputToggleSwitchSliderInnerIcon,
  getInputToggleSwitchSliderInnerTranslate,
  getInputToggleSwitchSliderInnerOffset,
  getInputToggleSwitchTitleMarginLeft,
  getInputOptionsItemColor,
  getInputOptionsItemBackgroundColor,
  getInputCheckboxIconBorderColor,
  getInputCheckboxIconBackgroundColor,
  getInputCheckboxIconColor,
  getInputRadioIconBorderColor,
  getInputRadioIconBackgroundColor,
  getInputRadioIconColor,
  getInputToggleSliderBackgroundColor,
  getInputToggleSliderInnerColor,
  getInputRadioButtonColor,
  getInputRadioButtonBackgroundColor,
  getInputRadioButtonBorderColor,
  getInputDateRangeSize,
  getInputRadioGroupButtonSize,
} from './_utils';

export const StyledInputLabel = styled.label`
  display: block;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  text-align: ${props => (props.isCentered ? 'center' : 'left')};
  left: ${props => (props.isSmall ? '0px' : '12px')};
  right: ${props => (props.isSmall ? '0px' : '12px')};
  line-height: 24px;
  transform: translateY(-50%);
  top: ${props => getInputLabelTop(props.isSmall, props.isTextArea)};
  transition: all 0.12s ease-out;
  pointer-events: none;
  color: ${({ theme, sColorType, sType, isDisabled, isError, isWarning, isFocused }) =>
    getInputLabelColor(theme, sColorType, sType, isDisabled, isError, isWarning, isFocused)};
  font-size: ${props => getInputLabelFontSize(MEDIA_SIZES.S, props.sSize, props.isSmall)};

  @media (${MEDIA.TABLET}) {
    font-size: ${props => getInputLabelFontSize(MEDIA_SIZES.M, props.sSize, props.isSmall)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${props => getInputLabelFontSize(MEDIA_SIZES.L, props.sSize, props.isSmall)};
  }
`;

export const StyledInput = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getInputWidth(props.sWidth)};
  margin-top: ${({ isWithLabel }) => (isWithLabel ? 24 : 0)}px;

  & input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:valid,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-transition-delay: 99999s;
  }
`;

export const StyledInputElement = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  outline: 0 none;
  box-shadow: none;
  opacity: 1;
  width: 100%;
  max-width: 100%;
  font-family: inherit;
  border-radius: 6px;
  transition: border-color 0.32s ease-out;
  text-align: ${props => (props.sTextAlign ? props.sTextAlign : 'left')};
  color: ${({ theme, sColorType, sType, isEntered, isDisabled, isFocused }) =>
    getInputElementColor(theme, sColorType, sType, isEntered, isDisabled, isFocused)};
  background: ${({ theme, sColorType, sType, isEntered, isDisabled, isFocused }) =>
    getInputElementBackgroundColor(theme, sColorType, sType, isEntered, isDisabled, isFocused)};
  border: 1px solid
    ${({ theme, sColorType, sType, isEntered, isDisabled, isFocused, isError, isWarning, isWithoutBorder }) =>
      getInputElementBorderColor(
        theme,
        sColorType,
        sType,
        isEntered,
        isDisabled,
        isFocused,
        isError,
        isWarning,
        isWithoutBorder,
      )};
  line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.S, props.sSize)};
  padding: ${props => getInputElementPadding(MEDIA_SIZES.S, props.sSize)};
  font-size: ${props => getInputElementFontSize(MEDIA_SIZES.S, props.sSize)};

  @media (${MEDIA.TABLET}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    padding: ${props => getInputElementPadding(MEDIA_SIZES.M, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.L, props.sSize)};
    padding: ${props => getInputElementPadding(MEDIA_SIZES.L, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.L, props.sSize)};
  }

  :-ms-input-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
  :-moz-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
  ::-moz-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
  ::-webkit-input-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
`;

export const StyledInputText = styled(StyledInputElement).attrs(props => ({
  type: 'text',
  spellCheck: 'false',
  autoCorrect: 'off',
  autoComplete: props.isAutoComplete ? 'on' : 'off',
}))`
  -webkit-appearance: none;
  padding-right: ${({ isWithIcon, sSize }) => isWithIcon && getInputWithIconElementPaddingRight(MEDIA_SIZES.S, sSize)};
  height: ${props => getInputElementHeight(MEDIA_SIZES.S, props.sSize)};

  &::-webkit-contacts-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  @media (${MEDIA.TABLET}) {
    height: ${props => getInputElementHeight(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getInputElementHeight(MEDIA_SIZES.L, props.sSize)};
  }

  :-ms-input-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
  :-moz-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
  ::-moz-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
  ::-webkit-input-placeholder {
    color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
    opacity: 1;
  }
`;

export const StyledInputPassword = styled(StyledInputText).attrs(props => ({
  type: getInputPasswordType(props.isHidden, props.isAutoComplete),
  autoComplete: getInputPasswordAutoComplete(props.isHidden, props.isAutoComplete),
  spellCheck: 'false',
  autoCorrect: 'off',
}))`
  -webkit-text-security: ${props => (props.isHidden ? 'disc' : 'none')};
`;

export const StyledInputSmsCode = styled(StyledInputText).attrs(props => ({
  type: props.isHidden ? 'password' : 'text',
  autoComplete: 'one-time-code',
}))``;

export const StyledInputTextArea = styled(StyledInputElement).attrs({
  spellCheck: 'false',
  autoComplete: 'off',
  autoCorrect: 'off',
})`
  -webkit-appearance: none;
  resize: vertical;
  padding: ${props => getInputTextAreaPadding(MEDIA_SIZES.S, props.sSize)};
  height: ${props => getInputTextAreaHeight(MEDIA_SIZES.S, props.sSize, props.sRows)};
  min-height: ${props => getInputTextAreaHeight(MEDIA_SIZES.S, props.sSize, props.sRows)};

  @media (${MEDIA.TABLET}) {
    padding: ${props => getInputTextAreaPadding(MEDIA_SIZES.M, props.sSize)};
    height: ${props => getInputTextAreaHeight(MEDIA_SIZES.M, props.sSize, props.sRows)};
    min-height: ${props => getInputTextAreaHeight(MEDIA_SIZES.M, props.sSize, props.sRows)};
  }

  @media (${MEDIA.DESKTOP}) {
    padding: ${props => getInputTextAreaPadding(MEDIA_SIZES.L, props.sSize)};
    height: ${props => getInputTextAreaHeight(MEDIA_SIZES.L, props.sSize, props.sRows)};
    min-height: ${props => getInputTextAreaHeight(MEDIA_SIZES.L, props.sSize, props.sRows)};
  }
`;

export const StyledInputSelect = styled(StyledInputElement).attrs(({ isDisabled }) => ({
  href: '#',
  tabIndex: isDisabled ? '-1' : null,
}))`
  cursor: default;
  text-decoration: none;
  font-weight: 500;
  height: ${props => getInputElementHeight(MEDIA_SIZES.S, props.sSize)};

  @media (${MEDIA.TABLET}) {
    height: ${props => getInputElementHeight(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getInputElementHeight(MEDIA_SIZES.L, props.sSize)};
  }

  :hover,
  :active,
  :visited {
    color: ${({ theme, sColorType, sType, isEntered, isDisabled }) =>
      getInputElementColor(theme, sColorType, sType, isEntered, isDisabled)};
  }
`;

export const StyledInputSelectValue = styled.div`
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledInputMultiSelectValue = styled(StyledInputSelectValue)`
  text-overflow: clip;
`;

export const StyledInputMultiSelectValueQty = styled.span`
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: bold;
  color: ${({ theme, sColorType }) => theme.input[sColorType].multiSelectValueQtyColor};
  background: ${({ theme, sColorType }) => theme.input[sColorType].multiSelectValueQtyBackgroundColor};
`;

export const StyledInputMultiSelectValueItem = styled.span`
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 2px 4px;
  border-radius: 4px;
  margin-left: 4px;
  color: ${({ theme, sColorType }) => theme.input[sColorType].multiSelectValueColor};
  background: ${({ theme, sColorType }) => theme.input[sColorType].multiSelectValueBackgroundColor};
`;

export const StyledInputSelectPlaceholder = styled(StyledInputSelectValue)`
  color: ${({ theme, sColorType, sType }) => getInputPlaceholderColor(theme, sColorType, sType)};
`;

export const StyledInputDateRange = styled(StyledInputElement)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  height: ${props => getInputElementHeight(MEDIA_SIZES.S, props.sSize)};

  @media (${MEDIA.TABLET}) {
    height: ${props => getInputElementHeight(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getInputElementHeight(MEDIA_SIZES.L, props.sSize)};
  }
`;

export const StyledInputDateRangeItem = styled(StyledInputElement)`
  border: none;
  outline: 0 none;
  box-shadow: none;
  background: transparent;
  width: ${({ sWidth, sSize }) => sWidth || getInputDateRangeSize(MEDIA_SIZES.S, sSize)};
  height: 100%;

  @media (${MEDIA.TABLET}) {
    width: ${({ sWidth, sSize }) => sWidth || getInputDateRangeSize(MEDIA_SIZES.M, sSize)};
    height: 100%;
  }

  @media (${MEDIA.DESKTOP}) {
    width: ${({ sWidth, sSize }) => sWidth || getInputDateRangeSize(MEDIA_SIZES.L, sSize)};
    height: 100%;
  }
`;

export const StyledInputIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: ${props => (props.isClickable && !props.isDisabled ? 'pointer' : 'default')};

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, sType, isSelected, isDisabled }) =>
      getInputIconColor(theme, sColorType, sType, isSelected, isDisabled, false)};

    &:hover {
      fill: ${({ theme, sColorType, sType, isSelected, isDisabled }) =>
        getInputIconColor(theme, sColorType, sType, isSelected, isDisabled, true)};
    }
  }
`;

export const StyledInputIconClear = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  right: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${({ theme, sColorType }) => theme.input[sColorType].iconClearBackgroundColor};
  cursor: ${props => (props.isClickable && !props.isDisabled ? 'pointer' : 'default')};
`;

export const StyledInputWithIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getInputWidth(props.sWidth)};
  min-width: ${props => (props.sMinWidth ? `${props.sMinWidth}px` : 'inherit')};
  max-width: 100%;
  margin-top: ${({ isWithLabel }) => (isWithLabel ? 24 : 0)}px;

  ${StyledInputText}, ${StyledInputTextArea}, ${StyledInputSelect} {
    padding-right: ${props => getInputWithIconElementPaddingRight(MEDIA_SIZES.S, props.sSize)};
  }

  ${StyledInputLabel} {
    right: ${props => getInputWithIconLabelPaddingRight(MEDIA_SIZES.S, props.sSize)};
  }

  @media (${MEDIA.TABLET}) {
    ${StyledInputText}, ${StyledInputTextArea}, ${StyledInputSelect} {
      padding-right: ${props => getInputWithIconElementPaddingRight(MEDIA_SIZES.M, props.sSize)};
    }

    ${StyledInputLabel} {
      right: ${props => getInputWithIconLabelPaddingRight(MEDIA_SIZES.M, props.sSize)};
    }
  }

  @media (${MEDIA.DESKTOP}) {
    ${StyledInputText}, ${StyledInputTextArea}, ${StyledInputSelect} {
      padding-right: ${props => getInputWithIconElementPaddingRight(MEDIA_SIZES.L, props.sSize)};
    }

    ${StyledInputLabel} {
      right: ${props => getInputWithIconLabelPaddingRight(MEDIA_SIZES.L, props.sSize)};
    }
  }
`;

export const StyledInputMultiSelect = styled(StyledInputWithIcon)`
  margin-top: ${({ isWithLabel }) => (isWithLabel ? 24 : 0)}px;

  :after {
    content: '';
    display: block;
    position: absolute;
    right: ${props => getInputWithIconElementPaddingRight(MEDIA_SIZES.S, props.sSize)};
    top: 1px;
    bottom: 1px;
    width: 24px;
    background: linear-gradient(
      to left,
      ${({ theme, sColorType, sType, isDisabled }) =>
        getInputElementBackgroundColor(theme, sColorType, sType, isDisabled)},
      transparent
    );
  }
`;

export const StyledInputOptions = styled.div.attrs(({ sStyle, sDefaultWidth }) => ({
  style: getInputOptionsStyle(sStyle, sDefaultWidth),
}))`
  position: relative;
  box-sizing: border-box;
  border: 1px solid transparent;
  padding: 18px 0;
`;

const StyledInputOptionsItemPrimitive = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  word-wrap: break-word;
`;

export const StyledInputOptionsItem = styled(StyledInputOptionsItemPrimitive)`
  cursor: pointer;
  color: ${({ theme, sColorType, isSelected, isActive }) =>
    getInputOptionsItemColor(theme, sColorType, isSelected, isActive)};
  background-color: ${({ theme, sColorType, isSelected, isActive }) =>
    getInputOptionsItemBackgroundColor(theme, sColorType, isSelected, isActive)};
  padding: ${props => (props.isMulti ? '8px 32px' : '14px 24px')};

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, isSelected, isActive }) =>
      getInputOptionsItemColor(theme, sColorType, isSelected, isActive)};
  }
`;

export const StyledInputOptionsItemCheckbox = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: ${({ theme, sColorType, isSelected }) =>
    getInputSwitchIconBackgroundColor(theme, sColorType, isSelected)};
  border: 1px solid
    ${({ theme, sColorType, sType, isDisabled, isFocused, isError, isWarning }) =>
      getInputElementBorderColor(theme, sColorType, sType, false, isDisabled, isFocused, isError, isWarning)};

  ${StyledIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType }) => theme.input[sColorType].switchIconColor}; // todo проверить
  }
`;

export const StyledInputOptionsEmpty = styled(StyledInputOptionsItemPrimitive)`
  cursor: default;
`;

export const StyledInputCalendar = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const StyledInputSwitch = styled.label`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  cursor: default;
  font-family: inherit;
  line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.S, props.sSize)};
  min-height: ${props => getInputElementLineHeight(MEDIA_SIZES.S, props.sSize)};
  min-width: ${props => getInputSwitchIconSize(MEDIA_SIZES.L, props.sSize)};
  font-size: ${props => getInputElementFontSize(MEDIA_SIZES.S, props.sSize)};
  color: ${({ theme, sColorType, sType, isDisabled }) => getInputElementColor(theme, sColorType, sType, isDisabled)};

  @media (${MEDIA.TABLET}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    min-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.L, props.sSize)};
    min-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.L, props.sSize)};
  }
`;

export const StyledInputSwitchHtmlInput = styled.input`
  position: absolute;
  top: 2px;
  left: 2px;
  height: 0;
  width: 0;
  opacity: 0;
  border: none;
  outline: none;
`;

export const StyledInputCheckboxHtmlInput = styled(StyledInputSwitchHtmlInput).attrs({ type: 'checkbox' })``;

export const StyledInputRadioHtmlInput = styled(StyledInputSwitchHtmlInput).attrs({ type: 'radio' })``;

export const StyledInputSwitchIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  left: 0;
  overflow: hidden;
  top: ${props => getInputSwitchIconTop(MEDIA_SIZES.S, props.sSize)};
  height: ${props => getInputSwitchIconSize(MEDIA_SIZES.S, props.sSize)};
  width: ${props => getInputSwitchIconSize(MEDIA_SIZES.S, props.sSize)};
  box-shadow: ${({ theme, sColorType, isDisabled, isFocused }) =>
    isFocused && !isDisabled ? `0px 0px 0px 2px ${theme.input[sColorType].switchIconBoxShadowFocusedColor}` : 'none'};
  transition: 0.4s;

  @media (${MEDIA.TABLET}) {
    top: ${props => getInputSwitchIconTop(MEDIA_SIZES.M, props.sSize)};
    height: ${props => getInputSwitchIconSize(MEDIA_SIZES.M, props.sSize)};
    width: ${props => getInputSwitchIconSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    top: ${props => getInputSwitchIconTop(MEDIA_SIZES.L, props.sSize)};
    height: ${props => getInputSwitchIconSize(MEDIA_SIZES.L, props.sSize)};
    width: ${props => getInputSwitchIconSize(MEDIA_SIZES.L, props.sSize)};
  }

  ${StyledIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const StyledInputCheckboxIcon = styled(StyledInputSwitchIcon)`
  background: ${({ theme, sColorType, isChecked, isDisabled, isHovered }) =>
    getInputCheckboxIconBackgroundColor(theme, sColorType, isChecked, isDisabled, isHovered)};
  border: 1px solid
    ${({ theme, sColorType, isChecked, isDisabled, isWarning, isError, isHovered }) =>
      getInputCheckboxIconBorderColor(theme, sColorType, isChecked, isDisabled, isWarning, isError, isHovered)};
  border-radius: 4px;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, isDisabled }) => getInputCheckboxIconColor(theme, sColorType, isDisabled)};
  }
`;

export const StyledInputRadioIcon = styled(StyledInputSwitchIcon)`
  background: ${({ theme, sColorType, sMark, isChecked, isDisabled, isHovered }) =>
    getInputRadioIconBackgroundColor(theme, sColorType, sMark, isChecked, isDisabled, isHovered)};
  border: 1px solid
    ${({ theme, sColorType, sMark, isChecked, isDisabled, isWarning, isError, isHovered }) =>
      getInputRadioIconBorderColor(theme, sColorType, sMark, isChecked, isDisabled, isWarning, isError, isHovered)};
  border-radius: 50%;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, isDisabled }) => getInputRadioIconColor(theme, sColorType, isDisabled)};
  }
`;

export const StyledInputSwitchTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin-left: ${props => getInputSwitchTitleMarginLeft(MEDIA_SIZES.S, props.sSize)};

  @media (${MEDIA.TABLET}) {
    margin-left: ${props => getInputSwitchTitleMarginLeft(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    margin-left: ${props => getInputSwitchTitleMarginLeft(MEDIA_SIZES.L, props.sSize)};
  }
`;

export const StyledInputRadioButton = styled.label`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isChecked, isDisabled }) => (isChecked || isDisabled ? 'default' : 'pointer')};
  font-family: inherit;
  line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.S, props.sSize)};
  height: ${props => getInputRadioGroupButtonSize(MEDIA_SIZES.S, props.sSize)};
  width: ${props => getInputRadioGroupButtonSize(MEDIA_SIZES.S, props.sSize)};
  font-size: ${props => getInputElementFontSize(MEDIA_SIZES.S, props.sSize)};
  border-radius: 4px;
  color: ${({ theme, sColorType, isChecked, isDisabled, isHovered }) =>
    getInputRadioButtonColor(theme, sColorType, isChecked, isDisabled, isHovered)};
  background: ${({ theme, sColorType, isChecked, isDisabled, isHovered }) =>
    getInputRadioButtonBackgroundColor(theme, sColorType, isChecked, isDisabled, isHovered)};
  border: 2px solid
    ${({ theme, sColorType, isChecked, isDisabled, isHovered }) =>
      getInputRadioButtonBorderColor(theme, sColorType, isChecked, isDisabled, isHovered)};
  transition: 0.4s;

  @media (${MEDIA.TABLET}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    height: ${props => getInputRadioGroupButtonSize(MEDIA_SIZES.M, props.sSize)};
    width: ${props => getInputRadioGroupButtonSize(MEDIA_SIZES.M, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.L, props.sSize)};
    height: ${props => getInputRadioGroupButtonSize(MEDIA_SIZES.L, props.sSize)};
    width: ${props => getInputRadioGroupButtonSize(MEDIA_SIZES.L, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.L, props.sSize)};
  }

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, isChecked, isDisabled, isHovered }) =>
      getInputRadioButtonColor(theme, sColorType, isChecked, isDisabled, isHovered)};
  }
`;

export const StyledDigitalCounter = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-top: ${({ isWithLabel }) => (isWithLabel ? 24 : 0)}px;
`;

export const StyledDigitalCounterButton = styled.div.attrs({ type: 'button' })`
  background-color: transparent;
  position: absolute;
  left: ${props => props.isLeft && '15px'};
  right: ${props => props.isRight && '15px'};
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  z-index: 1;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, sType }) => getInputIconColor(theme, sColorType, sType, false, false)};

    &:hover {
      fill: ${({ theme, sColorType, sType }) => getInputIconColor(theme, sColorType, sType, false, true)};
    }
  }
`;

export const StyledInputToggle = styled.label`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
  justify-content: ${props => (props.isReversed ? 'space-between' : 'flex-start')};
  align-items: center;
  cursor: default;
  font-family: inherit;
  line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.S, props.sSize)};
  min-height: ${props => getInputElementLineHeight(MEDIA_SIZES.S, props.sSize)};
  font-size: ${props => getInputElementFontSize(MEDIA_SIZES.S, props.sSize)};
  color: ${({ theme, sColorType, sType, isDisabled }) =>
    getInputElementColor(theme, sColorType, sType, false, isDisabled)};

  @media (${MEDIA.TABLET}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    min-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    line-height: ${props => getInputElementLineHeight(MEDIA_SIZES.L, props.sSize)};
    min-height: ${props => getInputElementLineHeight(MEDIA_SIZES.M, props.sSize)};
    font-size: ${props => getInputElementFontSize(MEDIA_SIZES.L, props.sSize)};
  }
`;

export const StyledInputToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  height: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.S, props.sSize, true)};
  width: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.S, props.sSize)};
  min-width: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.S, props.sSize)};

  @media (${MEDIA.TABLET}) {
    height: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.M, props.sSize, true)};
    width: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.L, props.sSize, true)};
    width: ${props => getInputToggleSwitchSliderSize(MEDIA_SIZES.L, props.sSize)};
  }
`;

export const StyledInputToggleHtmlInput = styled(StyledInputSwitchHtmlInput).attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledInputToggleSlider = styled.div`
  position: absolute;
  cursor: ${({ isDisabled }) => (isDisabled ? 'normal' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, sColorType, sColor, isChecked, isDisabled }) =>
    getInputToggleSliderBackgroundColor(theme, sColorType, sColor, isChecked, isDisabled)};
  border: ${({ theme, sColorType, sColor, isChecked, isDisabled }) =>
    `1px solid ${getInputToggleSliderBackgroundColor(theme, sColorType, sColor, isChecked, isDisabled)}`};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    border-radius: 50%;
    background-color: ${({ theme, sColorType, isChecked, isDisabled }) =>
      getInputToggleSliderInnerColor(theme, sColorType, isChecked, isDisabled)};
    height: ${props => getInputToggleSwitchSliderInnerIcon(MEDIA_SIZES.S, props.sSize)};
    width: ${props => getInputToggleSwitchSliderInnerIcon(MEDIA_SIZES.S, props.sSize)};
    left: ${props => getInputToggleSwitchSliderInnerOffset(MEDIA_SIZES.S, props.sSize)};
    bottom: ${props => getInputToggleSwitchSliderInnerOffset(MEDIA_SIZES.S, props.sSize)};
    -webkit-transform: ${props =>
      props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.S, props.sSize)};
    -ms-transform: ${props => props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.S, props.sSize)};
    transform: ${props => props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.S, props.sSize)};
    -webkit-transition: 0.4s;
    transition: 0.4s;

    @media (${MEDIA.TABLET}) {
      height: ${props => getInputToggleSwitchSliderInnerIcon(MEDIA_SIZES.M, props.sSize)};
      width: ${props => getInputToggleSwitchSliderInnerIcon(MEDIA_SIZES.M, props.sSize)};
      left: ${props => getInputToggleSwitchSliderInnerOffset(MEDIA_SIZES.M, props.sSize)};
      bottom: ${props => getInputToggleSwitchSliderInnerOffset(MEDIA_SIZES.M, props.sSize)};
      -webkit-transform: ${props =>
        props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.M, props.sSize)};
      -ms-transform: ${props =>
        props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.M, props.sSize)};
      transform: ${props => props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.M, props.sSize)};
    }

    @media (${MEDIA.DESKTOP}) {
      height: ${props => getInputToggleSwitchSliderInnerIcon(MEDIA_SIZES.L, props.sSize)};
      width: ${props => getInputToggleSwitchSliderInnerIcon(MEDIA_SIZES.L, props.sSize)};
      left: ${props => getInputToggleSwitchSliderInnerOffset(MEDIA_SIZES.L, props.sSize)};
      bottom: ${props => getInputToggleSwitchSliderInnerOffset(MEDIA_SIZES.L, props.sSize)};
      -webkit-transform: ${props =>
        props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.L, props.sSize)};
      -ms-transform: ${props =>
        props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.L, props.sSize)};
      transform: ${props => props.isChecked && getInputToggleSwitchSliderInnerTranslate(MEDIA_SIZES.L, props.sSize)};
    }
  }

  &:hover {
    background-color: ${({ theme, sColorType, sColor, isChecked, isDisabled }) =>
      getInputToggleSliderBackgroundColor(theme, sColorType, sColor, isChecked, isDisabled, true)};
    border: ${({ theme, sColorType, sColor, isChecked, isDisabled }) =>
      `1px solid ${getInputToggleSliderBackgroundColor(theme, sColorType, sColor, isChecked, isDisabled, true)}`};

    &:before {
      background-color: ${({ theme, sColorType, isChecked, isDisabled }) =>
        getInputToggleSliderInnerColor(theme, sColorType, isChecked, isDisabled, true)};
    }
  }
`;

export const StyledInputToggleSwitchTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin-left: ${props => getInputToggleSwitchTitleMarginLeft(MEDIA_SIZES.S, props.sSize, props.isReversed)};

  @media (${MEDIA.TABLET}) {
    margin-left: ${props => getInputToggleSwitchTitleMarginLeft(MEDIA_SIZES.M, props.sSize, props.isReversed)};
  }

  @media (${MEDIA.DESKTOP}) {
    margin-left: ${props => getInputToggleSwitchTitleMarginLeft(MEDIA_SIZES.L, props.sSize, props.isReversed)};
  }
`;
