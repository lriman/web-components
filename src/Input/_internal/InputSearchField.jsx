import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import Loader from '../../Loader/Loader';
import IconSearch from '../../Icon/IconSearch';

import { TYPES, INPUT_REFS as REFS } from '../_constants';
import { StyledInputWithIcon, StyledInputIcon } from '../_style';

const InputSearchField = forwardRef((props, ref) => {
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledInputWithIcon
      {...addDataAttributes({ component: TYPES.SEARCH })}
      sWidth={props.width}
      sSize={props.size}
      onClick={props.onInputElementClick}
      isWithLabel={!!props.label}
    >
      <props.inputElement
        ref={ref}
        id={props.id}
        value={props.value}
        label={props.label}
        type={props.type}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        size={props.size}
        textAlign={props.textAlign}
        isWarning={props.isWarning}
        isError={props.isError}
        disabled={props.disabled}
        onFocus={props.onInputElementFocus}
        onBlur={props.onInputElementBlur}
        onChange={props.onInputElementChange}
        isFocused={props.isFocused}
        setInputNode={props.setInputNode}
      />
      <StyledInputIcon
        sSize={props.size}
        onMouseDown={props.onIconElementMouseDown}
        onMouseUp={props.onIconElementMouseUp}
        sColorType={colorType}
        sType={props.type}
      >
        {!props.disabled && props.isSearching && (
          <Loader size={Loader.REFS.SIZES.S} display={Loader.REFS.DISPLAY.BLOCK} />
        )}
        {(props.disabled || !props.isSearching) && (
          <IconSearch
            size={IconSearch.REFS.SIZES.M}
            display={IconSearch.REFS.DISPLAY.BLOCK}
            color={props.disabled ? IconSearch.REFS.COLORS.MINOR : IconSearch.REFS.COLORS.SECONDARY}
          />
        )}
      </StyledInputIcon>
    </StyledInputWithIcon>
  );
});

InputSearchField.propTypes = {
  inputElement: PropTypes.func.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)).isRequired,
  textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)).isRequired,
  isFocused: PropTypes.bool,
  isSearching: PropTypes.bool,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  onInputElementFocus: PropTypes.func.isRequired,
  onInputElementBlur: PropTypes.func.isRequired,
  onInputElementChange: PropTypes.func.isRequired,
  onInputElementClick: PropTypes.func.isRequired,
  onIconElementMouseDown: PropTypes.func.isRequired,
  onIconElementMouseUp: PropTypes.func.isRequired,
  onCleanElementClick: PropTypes.func.isRequired,
  setInputNode: PropTypes.func,
};

InputSearchField.defaultProps = {
  id: null,
  value: '',
  label: null,
  placeholder: null,
  maxLength: null,
  isFocused: false,
  isSearching: false,
  isWarning: false,
  isError: false,
  disabled: false,
  setInputNode: null,
};

export default InputSearchField;
