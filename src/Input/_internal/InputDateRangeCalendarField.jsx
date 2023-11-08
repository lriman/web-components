import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import IconCalendar from '../../Icon/IconCalendar';

import { TYPES, INPUT_REFS as REFS } from '../_constants';
import { StyledInputWithIcon, StyledInputIcon } from '../_style';
import InputDateRange from '../InputDateRange';

const InputDateRangeCalendarField = forwardRef((props, ref) => {
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledInputWithIcon
      {...addDataAttributes({ component: TYPES.DATE_CALENDAR })}
      sWidth={props.width}
      sSize={props.size}
      isWithLabel={!!props.label}
    >
      <InputDateRange
        ref={ref}
        id={props.id}
        value={props.value}
        label={props.label}
        placeholder={props.placeholder}
        type={props.type}
        size={props.size}
        isWarning={props.isWarning}
        isError={props.isError}
        disabled={props.disabled}
        uncleanable={props.uncleanable}
        onFocus={props.onInputElementFocus}
        onBlur={props.onInputElementBlur}
        onChange={props.onInputElementChange}
        isFocused={props.isFocused}
        disabledDate={props.disabledDate}
        setInputNode={props.setInputNode}
      />
      <StyledInputIcon
        sSize={props.size}
        onMouseDown={props.onIconElementMouseDown}
        onMouseUp={props.onIconElementMouseUp}
        onClick={props.onIconElementClick}
        isClickable
        isDisabled={props.disabled}
        sColorType={colorType}
        sType={props.type}
      >
        <IconCalendar size={IconCalendar.REFS.SIZES.M} display={IconCalendar.REFS.DISPLAY.BLOCK} />
      </StyledInputIcon>
    </StyledInputWithIcon>
  );
});

InputDateRangeCalendarField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.node,
  placeholder: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)).isRequired,
  isFocused: PropTypes.bool,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  uncleanable: PropTypes.bool,
  disabledDate: PropTypes.func,
  onInputElementFocus: PropTypes.func.isRequired,
  onInputElementBlur: PropTypes.func.isRequired,
  onInputElementChange: PropTypes.func.isRequired,
  onIconElementMouseDown: PropTypes.func.isRequired,
  onIconElementMouseUp: PropTypes.func.isRequired,
  onIconElementClick: PropTypes.func.isRequired,
  setInputNode: PropTypes.func,
};

InputDateRangeCalendarField.defaultProps = {
  id: null,
  value: [],
  label: null,
  placeholder: [],
  isFocused: false,
  isWarning: false,
  isError: false,
  disabled: false,
  uncleanable: false,
  disabledDate: () => false,
  setInputNode: null,
};

export default InputDateRangeCalendarField;
