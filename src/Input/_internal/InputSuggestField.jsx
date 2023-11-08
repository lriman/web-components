import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import Loader from '../../Loader';

import { TYPES, INPUT_REFS as REFS } from '../_constants';
import { StyledInputWithIcon, StyledInputIcon } from '../_style';

const InputSuggestField = forwardRef((props, ref) => {
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledInputWithIcon
      {...addDataAttributes({ component: TYPES.SUGGEST })}
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
        format={props.format}
        isFocused={props.isFocused}
        setInputNode={props.setInputNode}
      />
      {!props.disabled && props.isSearching && (
        <StyledInputIcon
          sSize={props.size}
          sColorType={colorType}
          sType={props.type}
          onMouseDown={props.onIconElementMouseDown}
          onMouseUp={props.onIconElementMouseUp}
        >
          <Loader size={Loader.REFS.SIZES.S} display={Loader.REFS.DISPLAY.BLOCK} />
        </StyledInputIcon>
      )}
    </StyledInputWithIcon>
  );
});

InputSuggestField.propTypes = {
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
  isCleanable: PropTypes.bool,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  format: PropTypes.func,
  onInputElementClick: PropTypes.func.isRequired,
  onInputElementFocus: PropTypes.func.isRequired,
  onInputElementBlur: PropTypes.func.isRequired,
  onInputElementChange: PropTypes.func.isRequired,
  onIconElementMouseDown: PropTypes.func.isRequired,
  onIconElementMouseUp: PropTypes.func.isRequired,
  setInputNode: PropTypes.func,
};

InputSuggestField.defaultProps = {
  id: null,
  value: '',
  label: null,
  placeholder: null,
  maxLength: null,
  isFocused: false,
  isSearching: false,
  isCleanable: false,
  isWarning: false,
  isError: false,
  disabled: false,
  format: null,
  setInputNode: null,
};

export default InputSuggestField;
