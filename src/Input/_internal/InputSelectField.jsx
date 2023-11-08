import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import IconArrowUp from '../../Icon/IconArrowUp';
import IconArrowDown from '../../Icon/IconArrowDown';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from '../_constants';
import {
  StyledInput,
  StyledInputLabel,
  StyledInputWithIcon,
  StyledInputSelect,
  StyledInputSelectValue,
  StyledInputSelectPlaceholder,
  StyledInputIcon,
} from '../_style';

const InputSelectField = forwardRef((props, ref) => {
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledInputWithIcon
      {...addDataAttributes({ component: TYPES.SELECT })}
      sWidth={props.width}
      sSize={props.size}
      onClick={props.onElementClick}
      isWithLabel={!!props.label}
    >
      <StyledInput
        {...addDataAttributes({ component: COMPONENTS.GENERAL })}
        sWidth={props.width}
        isWithLabel={!!props.label}
      >
        <StyledInputSelect
          as="a"
          ref={ref}
          id={props.id}
          sSize={props.size}
          isDisabled={props.disabled}
          isFocused={props.isFocused}
          isWarning={props.isWarning}
          isError={props.isError}
          isWithoutBorder={props.isWithoutBorder}
          onFocus={props.onInputElementFocus}
          onBlur={props.onInputElementBlur}
          onClick={props.onInputElementClick}
          sColorType={colorType}
          sType={props.type}
          isEntered={!!props.value}
        >
          {!props.value && props.placeholder && props.size === REFS.SIZES.S && (
            <StyledInputSelectPlaceholder sColorType={colorType} sType={props.type}>
              {props.placeholder}
            </StyledInputSelectPlaceholder>
          )}
          <StyledInputSelectValue>
            {props.valueRenderer({ id: props.id, option: props.selectedOption, ...props })}
          </StyledInputSelectValue>
        </StyledInputSelect>
        {props.label && (
          <StyledInputLabel
            sSize={props.size}
            isSmall={props.isFocused || props.value}
            sColorType={colorType}
            sType={props.type}
            isWarning={props.isWarning}
            isError={props.isError}
            isDisabled={props.disabled}
            isFocused={props.isFocused}
          >
            {props.label}
          </StyledInputLabel>
        )}
      </StyledInput>
      <StyledInputIcon
        sSize={props.size}
        sColorType={colorType}
        sType={props.type}
        isSelected={!!props.value}
        isDisabled={props.disabled}
        onMouseDown={props.onIconElementMouseDown}
        onMouseUp={props.onIconElementMouseUp}
      >
        {!props.isOpened && (
          <IconArrowDown size={IconArrowDown.REFS.SIZES.XS} display={IconArrowDown.REFS.DISPLAY.BLOCK} />
        )}
        {props.isOpened && <IconArrowUp size={IconArrowUp.REFS.SIZES.XS} display={IconArrowUp.REFS.DISPLAY.BLOCK} />}
      </StyledInputIcon>
    </StyledInputWithIcon>
  );
});

InputSelectField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.node,
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)).isRequired,
  isOpened: PropTypes.bool,
  isFocused: PropTypes.bool,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  isWithoutBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  valueRenderer: PropTypes.func.isRequired,
  onElementClick: PropTypes.func.isRequired,
  onInputElementFocus: PropTypes.func.isRequired,
  onInputElementBlur: PropTypes.func.isRequired,
  onInputElementClick: PropTypes.func.isRequired,
  onCleanElementClick: PropTypes.func.isRequired,
  onIconElementMouseDown: PropTypes.func.isRequired,
  onIconElementMouseUp: PropTypes.func.isRequired,
};

InputSelectField.defaultProps = {
  id: null,
  value: null,
  label: null,
  selectedOption: null,
  placeholder: null,
  isOpened: false,
  isFocused: false,
  isWarning: false,
  isError: false,
  isWithoutBorder: false,
  disabled: false,
};

export default InputSelectField;
