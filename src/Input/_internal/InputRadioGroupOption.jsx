import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import Icon from '../../Icon';

import { TYPES, INPUT_RADIO_GROUP_REFS as REFS } from '../_constants';
import { InputRadioGroupContext } from '../_context';
import { StyledInputSwitch, StyledInputRadioHtmlInput, StyledInputRadioIcon, StyledInputSwitchTitle } from '../_style';

class InputRadioGroupOptionWithContext extends PureComponent {
  static propTypes = {
    group: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    children: PropTypes.node,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    mark: PropTypes.oneOf(Object.values(REFS.MARKS)),
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    children: null,
    size: REFS.SIZES.M,
    type: REFS.TYPES.PRIMARY,
    mark: REFS.MARKS.DOT,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    setInputNode: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      isHovered: false,
      disallowBlurFlag: false,
    };

    this.inputNode = React.createRef();
  }

  componentDidMount() {
    const { group, setInputNode } = this.props;
    if (setInputNode) setInputNode(group, this.inputNode);

    document.addEventListener('mouseup', this.allowBlur);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused } = this.state;
    if (disabled && isFocused) this.handleBlur();
  }

  componentWillUnmount() {
    const { group, setInputNode } = this.props;
    if (setInputNode) setInputNode(group, this.inputNode, true);

    document.removeEventListener('mouseup', this.allowBlur);
  }

  disallowBlur = () => {
    this.setState({ disallowBlurFlag: true });
  };

  allowBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (disallowBlurFlag) {
      this.inputNode.current.focus();
      this.setState({ disallowBlurFlag: false });
    }
  };

  handleFocus = () => {
    const { onFocus } = this.props;
    const { isFocused } = this.state;
    if (!isFocused) {
      this.setState({ isFocused: true });
      onFocus();
    }
  };

  handleBlur = () => {
    const { onBlur } = this.props;
    const { disallowBlurFlag } = this.state;
    if (!disallowBlurFlag) {
      this.setState({ isFocused: false });
      onBlur();
    }
  };

  handleChange = e => {
    const { onChange, value } = this.props;
    onChange({ value, checked: e.target.checked });
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  getIconType = () => {
    const { mark } = this.props;
    switch (mark) {
      case REFS.MARKS.DOT:
        return Icon.REFS.TYPES.CHECKED_RADIO;
      case REFS.MARKS.CHECK:
        return Icon.REFS.TYPES.SUCCESS;
      default:
        return Icon.REFS.TYPES.CHECKED_RADIO;
    }
  };

  render() {
    const { group, value, checked, disabled, size, mark, type, isWarning, isError, children } = this.props;
    const { isFocused, isHovered } = this.state;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInputSwitch
            {...addDataAttributes({ component: TYPES.RADIO_GROUP_OPTION })}
            sSize={size}
            isDisabled={disabled}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onMouseDown={this.disallowBlur}
            onMouseUp={this.allowBlur}
            sColorType={colorType}
            sType={type}
          >
            <StyledInputRadioHtmlInput
              ref={this.inputNode}
              sSize={size}
              value={value}
              name={group}
              checked={checked}
              disabled={disabled}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            />
            <StyledInputRadioIcon
              sSize={size}
              sMark={mark}
              isChecked={checked}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              isHovered={isHovered}
              sColorType={colorType}
            >
              {checked && (
                <Icon type={this.getIconType()} display={Icon.REFS.DISPLAY.BLOCK} size={Icon.REFS.SIZES.XS} />
              )}
            </StyledInputRadioIcon>
            {children && <StyledInputSwitchTitle sSize={size}>{children}</StyledInputSwitchTitle>}
          </StyledInputSwitch>
        )}
      </ColorContext.Consumer>
    );
  }
}

const InputRadioGroupOption = props => (
  <InputRadioGroupContext.Consumer>
    {({ id, value, size, mark, onFocus, onBlur, onChange }) => (
      <InputRadioGroupOptionWithContext
        {...props}
        group={id}
        size={props.size || size}
        mark={mark}
        checked={props.value === value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        setInputNode={props.setInputNode}
      />
    )}
  </InputRadioGroupContext.Consumer>
);

InputRadioGroupOption.inputType = TYPES.RADIO_GROUP_OPTION;

InputRadioGroupOption.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  mark: PropTypes.oneOf(Object.values(REFS.MARKS)),
  setInputNode: PropTypes.func,
};

InputRadioGroupOption.defaultProps = {
  size: null,
  mark: null,
  setInputNode: null,
};

InputRadioGroupOption.REFS = REFS;

export default InputRadioGroupOption;
