import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { TYPES, INPUT_REFS as REFS } from '../_constants';
import { InputRadioGroupContext } from '../_context';
import { StyledInputRadioButton, StyledInputRadioHtmlInput } from '../_style';

class InputRadioGroupButtonWithContext extends PureComponent {
  static propTypes = {
    group: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    children: PropTypes.node,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
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

  render() {
    const { group, value, checked, disabled, size, isWarning, isError, children } = this.props;
    const { isFocused, isHovered } = this.state;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInputRadioButton
            {...addDataAttributes({ component: TYPES.RADIO_GROUP_OPTION })}
            sSize={size}
            isChecked={checked}
            isDisabled={disabled}
            isFocused={isFocused}
            isWarning={isWarning}
            isError={isError}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onMouseDown={this.disallowBlur}
            onMouseUp={this.allowBlur}
            isHovered={isHovered}
            sColorType={colorType}
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
              sColorType={colorType}
            />
            {children}
          </StyledInputRadioButton>
        )}
      </ColorContext.Consumer>
    );
  }
}

const InputRadioGroupButton = props => (
  <InputRadioGroupContext.Consumer>
    {({ id, value, size, onFocus, onBlur, onChange }) => (
      <InputRadioGroupButtonWithContext
        {...props}
        group={id}
        size={props.size || size}
        checked={props.value === value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        setInputNode={props.setInputNode}
      />
    )}
  </InputRadioGroupContext.Consumer>
);

InputRadioGroupButton.inputType = TYPES.RADIO_GROUP_OPTION;

InputRadioGroupButton.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  setInputNode: PropTypes.func,
};

InputRadioGroupButton.defaultProps = {
  size: null,
  setInputNode: null,
};

InputRadioGroupButton.REFS = REFS;

export default InputRadioGroupButton;
