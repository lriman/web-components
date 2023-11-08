import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, INPUT_REFS as REFS } from '../_constants';
import { StyledInputOptionsItem, StyledInputOptionsItemCheckbox } from '../_style';
import IconCheckedCheckbox from '../../Icon/IconCheckedCheckbox';

const InputOptionsItem = forwardRef((props, ref) => {
  const { colorType = 'normal' } = useContext(ColorContext);

  const handleOnClick = () => {
    props.onClick(props.value);
  };

  const handleOnMouseEnter = () => {
    props.onMouseEnter(props.value);
  };

  const handleOnMouseLeave = () => {
    props.onMouseLeave(props.value);
  };

  return (
    <StyledInputOptionsItem
      {...addDataAttributes({ component: COMPONENTS.OPTIONS_ITEM, value: props.value })}
      ref={ref}
      sSize={props.size}
      isSelected={props.isSelected}
      isActive={props.isActive}
      isMulti={props.isMulti}
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      sColorType={colorType}
      sType={props.type}
    >
      {props.isMulti && (
        <StyledInputOptionsItemCheckbox sColorType={colorType} isSelected={props.isSelected} sType={props.type}>
          {props.isSelected && (
            <IconCheckedCheckbox
              display={IconCheckedCheckbox.REFS.DISPLAY.BLOCK}
              size={IconCheckedCheckbox.REFS.SIZES.S}
            />
          )}
        </StyledInputOptionsItemCheckbox>
      )}
      {props.children}
    </StyledInputOptionsItem>
  );
});

InputOptionsItem.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  isActive: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isMulti: PropTypes.bool,
};

InputOptionsItem.defaultProps = {
  size: REFS.SIZES.M,
  isSelected: false,
  isActive: false,
  isMulti: false,
};

export default InputOptionsItem;
