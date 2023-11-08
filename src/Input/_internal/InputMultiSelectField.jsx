import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import IconArrowDownFilled from '../../Icon/IconArrowDownFilled';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from '../_constants';
import {
  StyledInput,
  StyledInputLabel,
  StyledInputMultiSelect,
  StyledInputSelect,
  StyledInputMultiSelectValue,
  StyledInputMultiSelectValueQty,
  StyledInputMultiSelectValueItem,
  StyledInputSelectPlaceholder,
  StyledInputIcon,
} from '../_style';

const InputSelectField = forwardRef((props, ref) => {
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledInputMultiSelect
      {...addDataAttributes({ component: TYPES.MULTI_SELECT })}
      sWidth={props.width}
      sMinWidth={props.minWidth}
      isDisabled={props.disabled}
      sSize={props.size}
      onClick={props.onElementClick}
      sColorType={colorType}
      sType={props.type}
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
          onFocus={props.onInputElementFocus}
          onBlur={props.onInputElementBlur}
          onClick={props.onInputElementClick}
          sColorType={colorType}
          sType={props.type}
        >
          {!props.value.length && props.placeholder && props.size === REFS.SIZES.S && (
            <StyledInputSelectPlaceholder sColorType={colorType} sType={props.type}>
              {props.placeholder}
            </StyledInputSelectPlaceholder>
          )}
          {!!props.value.length && (
            <StyledInputMultiSelectValue>
              <StyledInputMultiSelectValueQty sColorType={colorType}>
                {props.value.length}
              </StyledInputMultiSelectValueQty>
              {props.value.map(item => (
                <StyledInputMultiSelectValueItem key={item} sColorType={colorType}>
                  {props.valueRenderer({
                    id: props.id,
                    option: props.selectedOptions.find(option => item === option.value),
                  })}
                </StyledInputMultiSelectValueItem>
              ))}
            </StyledInputMultiSelectValue>
          )}
        </StyledInputSelect>
        {props.label && (
          <StyledInputLabel
            sSize={props.size}
            isSmall={props.isFocused || props.value.length}
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
        onMouseDown={props.onIconElementMouseDown}
        onMouseUp={props.onIconElementMouseUp}
        sColorType={colorType}
        sType={props.type}
      >
        <IconArrowDownFilled
          size={IconArrowDownFilled.REFS.SIZES.M}
          display={IconArrowDownFilled.REFS.DISPLAY.BLOCK}
          color={props.disabled ? IconArrowDownFilled.REFS.COLORS.MINOR : IconArrowDownFilled.REFS.COLORS.SECONDARY}
        />
      </StyledInputIcon>
    </StyledInputMultiSelect>
  );
});

InputSelectField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.node,
  selectedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  minWidth: PropTypes.number,
  isFocused: PropTypes.bool,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)).isRequired,
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
  value: [],
  label: null,
  selectedOptions: [],
  placeholder: null,
  minWidth: null,
  isFocused: false,
  isWarning: false,
  isError: false,
  disabled: false,
};

export default InputSelectField;
