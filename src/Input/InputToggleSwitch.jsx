import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { TYPES, INPUT_REFS as REFS } from './_constants';
import {
  StyledInputToggleSlider,
  StyledInputToggleHtmlInput,
  StyledInputToggleSwitch,
  StyledInputToggle,
  StyledInputToggleSwitchTitle,
} from './_style';

export default class InputToggleSwitch extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.CHECKBOX;

  static propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    children: PropTypes.node,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    color: PropTypes.oneOf(Object.values(REFS.COLORS)),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    isSingle: PropTypes.bool,
    disabled: PropTypes.bool,
    isReversed: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    checked: false,
    children: null,
    size: REFS.SIZES.M,
    color: REFS.COLORS.MAJOR,
    type: REFS.TYPES.PRIMARY,
    isWarning: false,
    isError: false,
    isSingle: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    setInputNode: null,
    isReversed: false,
  };

  constructor(props) {
    super(props);

    const { checked } = this.props;

    this.state = {
      isInitialized: false,
      isFocused: false,
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

  render() {
    const { id, disabled, size, color, type, isWarning, isError, isSingle, isReversed, children } = this.props;
    const { isFocused, checked } = this.state;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInputToggle
            {...addDataAttributes({ component: TYPES.CHECKBOX })}
            isReversed={isReversed}
            sColorType={colorType}
            sType={type}
          >
            <StyledInputToggleSwitch
              sSize={size}
              isDisabled={disabled}
              isChecked={checked}
              isSingle={isSingle}
              onMouseDown={this.disallowBlur}
              onMouseUp={this.allowBlur}
              sColorType={colorType}
            >
              <StyledInputToggleHtmlInput
                ref={this.inputNode}
                sSize={size}
                id={id}
                checked={!!checked}
                disabled={disabled}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <StyledInputToggleSlider
                sSize={size}
                sColor={color}
                isChecked={checked}
                isDisabled={disabled}
                isFocused={isFocused}
                isWarning={isWarning}
                isError={isError}
                sColorType={colorType}
              />
            </StyledInputToggleSwitch>
            {children && (
              <StyledInputToggleSwitchTitle sSize={size} isReversed={isReversed}>
                {children}
              </StyledInputToggleSwitchTitle>
            )}
          </StyledInputToggle>
        )}
      </ColorContext.Consumer>
    );
  }
}
