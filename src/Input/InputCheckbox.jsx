import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';
import IconCheckedCheckbox from '../Icon/IconCheckedCheckbox';

import { TYPES, INPUT_REFS as REFS } from './_constants';
import {
  StyledInputSwitch,
  StyledInputCheckboxHtmlInput,
  StyledInputCheckboxIcon,
  StyledInputSwitchTitle,
} from './_style';

export default class InputCheckbox extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.CHECKBOX;

  static propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    children: PropTypes.node,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    isSingle: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    children: null,
    size: REFS.SIZES.M,
    type: REFS.TYPES.PRIMARY,
    isWarning: false,
    isError: false,
    isSingle: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    setInputNode: null,
  };

  constructor(props) {
    super(props);

    const { checked } = this.props;

    this.state = {
      isInitialized: false,
      isFocused: false,
      isHovered: false,
      checked,
      disallowBlurFlag: false,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isInitialized || props.checked !== state.checked) {
      return { isInitialized: true, checked: props.checked };
    }
    return null;
  }

  componentDidMount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode);

    document.addEventListener('mouseup', this.allowBlur);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused } = this.state;
    if (disabled && isFocused) this.handleBlur();
  }

  componentWillUnmount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode, true);

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
    const { id, onFocus } = this.props;
    const { checked, isFocused } = this.state;

    if (!isFocused) {
      this.setState({ isFocused: true });
      onFocus({ id, value: checked });
    }
  };

  handleBlur = () => {
    const { id, onBlur } = this.props;
    const { checked, disallowBlurFlag } = this.state;

    if (!disallowBlurFlag) {
      this.setState({ isFocused: false });
      onBlur({ id, value: checked });
    }
  };

  handleChange = e => {
    const { checked } = e.target;
    const { id, onChange } = this.props;
    const { checked: stateChecked } = this.state;
    this.setState({ checked });

    if (checked !== stateChecked) {
      onChange({ id, value: checked });
    }
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { id, disabled, size, type, isWarning, isError, isSingle, children } = this.props;
    const { isFocused, isHovered, checked } = this.state;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInputSwitch
            {...addDataAttributes({ component: TYPES.CHECKBOX })}
            sSize={size}
            isDisabled={disabled}
            isChecked={checked}
            isSingle={isSingle}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onMouseDown={this.disallowBlur}
            onMouseUp={this.allowBlur}
            sColorType={colorType}
            sType={type}
          >
            <StyledInputCheckboxHtmlInput
              ref={this.inputNode}
              sSize={size}
              id={id}
              checked={!!checked}
              disabled={disabled}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            />
            <StyledInputCheckboxIcon
              sSize={size}
              isChecked={checked}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              isHovered={isHovered}
              sColorType={colorType}
            >
              {checked && (
                <IconCheckedCheckbox
                  display={IconCheckedCheckbox.REFS.DISPLAY.BLOCK}
                  size={IconCheckedCheckbox.REFS.SIZES.S}
                />
              )}
            </StyledInputCheckboxIcon>
            {children && <StyledInputSwitchTitle sSize={size}>{children}</StyledInputSwitchTitle>}
          </StyledInputSwitch>
        )}
      </ColorContext.Consumer>
    );
  }
}
