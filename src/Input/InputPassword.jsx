import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from './_constants';
import { StyledInput, StyledInputIcon, StyledInputLabel, StyledInputPassword } from './_style';
import { formatTextValue, deformatTextValue } from './_utils';
import IconEyeOpen from '../Icon/IconEyeOpen';
import IconEyeClosed from '../Icon/IconEyeClosed';

export default class InputPassword extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.PASSWORD;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    autoComplete: PropTypes.bool,
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    value: null,
    label: null,
    placeholder: null,
    maxLength: null,
    size: REFS.SIZES.M,
    textAlign: REFS.TEXT_ALIGN.LEFT,
    type: REFS.TYPES.PRIMARY,
    width: '100%',
    autoComplete: false,
    isWarning: false,
    isError: false,
    disabled: false,
    visible: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,

    setInputNode: null,
  };

  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = {
      isInitialized: false,
      isFocused: false,
      value,
      formattedValue: '',
      disallowBlurFlag: false,
      isHidden: true,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    const propsValue = props.value || null;
    if (!state.isInitialized || propsValue !== state.value) {
      const formattedValue = formatTextValue(props.value, props.maxLength);
      const value = deformatTextValue(formattedValue);
      return { isInitialized: true, value, formattedValue };
    }
    return null;
  }

  componentDidMount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused } = this.state;
    if (disabled && isFocused) this.handleBlur();
  }

  componentWillUnmount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode, true);
  }

  handleFocus = () => {
    const { id, onFocus } = this.props;
    const { value, formattedValue } = this.state;
    this.setState({ isFocused: true });
    onFocus({ id, value, formattedValue });
  };

  handleBlur = () => {
    const { id, onBlur } = this.props;
    const { value, formattedValue } = this.state;
    this.setState({ isFocused: false });
    onBlur({ id, value, formattedValue });
  };

  onInputElementBlur = () => {
    const { disallowBlurFlag } = this.state;

    if (!disallowBlurFlag) this.handleBlur();
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, maxLength, onChange } = this.props;
    const { value: stateValue } = this.state;
    const formattedValue = formatTextValue(value, maxLength);
    const deformattedValue = deformatTextValue(formattedValue);
    this.setState({ value: deformattedValue, formattedValue });

    if (deformattedValue !== stateValue) {
      onChange({ id, value: deformattedValue, formattedValue });
    }
  };

  disallowBlur = () => {
    this.setState({ disallowBlurFlag: true });
  };

  allowBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (disallowBlurFlag) {
      this.setState({ disallowBlurFlag: false });
      this.inputNode.current.focus();
    }
  };

  handleToggleHidden = () => {
    const { disabled } = this.props;
    const { isHidden } = this.state;
    if (!disabled) this.setState({ isHidden: !isHidden });
  };

  render() {
    const {
      id,
      value,
      label,
      placeholder,
      disabled,
      size,
      textAlign,
      width,
      maxLength,
      autoComplete,
      isWarning,
      isError,
      visible,
      type,
    } = this.props;
    const { isFocused, formattedValue, isHidden } = this.state;
    const isSmall = isFocused || value;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputPassword
              {...addDataAttributes({ component: TYPES.PASSWORD })}
              as="input"
              ref={this.inputNode}
              id={id}
              sSize={size}
              sTextAlign={textAlign}
              isAutoComplete={autoComplete}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              value={formattedValue}
              placeholder={size === REFS.SIZES.S ? placeholder : undefined}
              maxLength={maxLength}
              disabled={disabled}
              isHidden={isHidden || disabled}
              onFocus={this.handleFocus}
              onBlur={this.onInputElementBlur}
              onChange={this.handleChange}
              sColorType={colorType}
              sType={type}
              isEntered={!!formattedValue}
            />
            {label && (
              <StyledInputLabel
                sSize={size}
                isSmall={isSmall}
                sColorType={colorType}
                sType={type}
                isWarning={isWarning}
                isError={isError}
                isDisabled={disabled}
                isFocused={isFocused}
              >
                {label}
              </StyledInputLabel>
            )}
            {visible && (
              <StyledInputIcon
                sSize={size}
                onMouseDown={this.disallowBlur}
                onMouseUp={this.allowBlur}
                onClick={this.handleToggleHidden}
                isClickable
                isDisabled={disabled}
                sColorType={colorType}
                sType={type}
              >
                {(isHidden || disabled) && (
                  <IconEyeClosed
                    size={IconEyeClosed.REFS.SIZES.M}
                    display={IconEyeClosed.REFS.DISPLAY.BLOCK}
                    color={disabled ? IconEyeClosed.REFS.COLORS.MINOR : IconEyeClosed.REFS.COLORS.SECONDARY}
                  />
                )}
                {!isHidden && !disabled && (
                  <IconEyeOpen
                    size={IconEyeOpen.REFS.SIZES.M}
                    display={IconEyeOpen.REFS.DISPLAY.BLOCK}
                    color={disabled ? IconEyeOpen.REFS.COLORS.MINOR : IconEyeOpen.REFS.COLORS.SECONDARY}
                  />
                )}
              </StyledInputIcon>
            )}
          </StyledInput>
        )}
      </ColorContext.Consumer>
    );
  }
}
