import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes, isMobile } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from './_constants';
import {
  StyledDigitalCounter,
  StyledDigitalCounterButton,
  StyledInput,
  StyledInputLabel,
  StyledInputText,
} from './_style';
import { getChar, getCaretPosition, formatDigitalValue, deformatDigitalValue } from './_utils';

import IconPlusBasic from '../Icon/IconPlusBasic';
import IconMinusBasic from '../Icon/IconMinusBasic';

export default class InputDigitalWithCounterButtons extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.DIGITAL;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    autoComplete: PropTypes.bool,
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    format: PropTypes.func,

    /** @ignore */
    isFocused: PropTypes.bool,
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
    type: REFS.TYPES.PRIMARY,
    width: '100%',
    autoComplete: false,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    format: null,

    /** @ignore */
    isFocused: null,
    setInputNode: null,
  };

  constructor(props) {
    super(props);

    const { isFocused, value } = this.props;

    this.state = {
      isInitialized: false,
      isFocused,
      value,
      formattedValue: '',
      caretPosition: null,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    const propsValue = props.value || null;
    if (
      !state.isInitialized ||
      propsValue !== state.value ||
      (props.isFocused !== null && props.isFocused !== state.isFocused)
    ) {
      const formattedValue = props.format
        ? props.format(props.value, props.maxLength)
        : formatDigitalValue(props.value, props.maxLength);
      const value = deformatDigitalValue(formattedValue);
      return {
        isInitialized: true,
        value,
        formattedValue,
        isFocused: props.isFocused !== null ? props.isFocused : state.isFocused,
      };
    }
    return null;
  }

  componentDidMount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused, caretPosition } = this.state;
    if (disabled && isFocused) this.handleBlur();

    if (caretPosition !== null) {
      this.inputNode.current.setSelectionRange(caretPosition, caretPosition);
    }
  }

  componentWillUnmount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode, true);
  }

  handleFocus = () => {
    const { id, onFocus, isFocused } = this.props;
    const { value, formattedValue } = this.state;
    if (isFocused === null) this.setState({ isFocused: true });
    this.setState({ caretPosition: null });
    onFocus({ id, value, formattedValue });
  };

  handleBlur = () => {
    const { id, onBlur, isFocused } = this.props;
    const { value, formattedValue } = this.state;
    if (isFocused === null) this.setState({ isFocused: false });
    this.setState({ caretPosition: null });
    onBlur({ id, value, formattedValue });
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, maxLength, onChange, format } = this.props;
    const { value: stateValue } = this.state;
    const beforeCaretPosValue = value.substring(0, e.target.selectionEnd).replace(/\D/g, '');
    const formattedValue = format ? format(value, maxLength) : formatDigitalValue(value, maxLength);
    const deformattedValue = deformatDigitalValue(formattedValue);
    const caretPosition = getCaretPosition(formattedValue, beforeCaretPosValue);

    this.setState({
      value: deformattedValue,
      formattedValue,
      caretPosition,
    });

    if (deformattedValue !== stateValue) {
      onChange({ id, value: deformattedValue, formattedValue });
    }
  };

  handleCounterPlus = () => {
    const { disabled } = this.props;
    const { value } = this.state;
    if (disabled) return;
    this.handleChange({ target: { value: String(+value + 1) } });
  };

  handleCounterMinus = () => {
    const { disabled } = this.props;
    const { value } = this.state;
    if (value <= 0 || disabled) return;
    this.handleChange({ target: { value: String(+value - 1) } });
  };

  handleKeyDown = e => {
    this.setState({ caretPosition: null });
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 90) e.preventDefault(); // disable ctrl-z
  };

  handleKeyPress = e => {
    const char = getChar(e);
    if (!e.ctrlKey && !e.altKey && !e.metaKey && char !== null && (char < '0' || char > '9')) e.preventDefault();
  };

  render() {
    const {
      id,
      value,
      label,
      placeholder,
      disabled,
      size,
      width,
      maxLength,
      autoComplete,
      type,
      isWarning,
      isError,
    } = this.props;
    const { isFocused, formattedValue } = this.state;
    const isSmall = isFocused || !!value;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledDigitalCounter isWithLabel={!!label}>
            {!disabled && (
              <StyledDigitalCounterButton onClick={this.handleCounterMinus} isLeft sColorType={colorType} sType={type}>
                <IconMinusBasic size={IconMinusBasic.REFS.SIZES.L} />
              </StyledDigitalCounterButton>
            )}
            <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
              <StyledInputText
                {...addDataAttributes({ component: TYPES.DIGITAL })}
                as="input"
                pattern={isMobile() ? '[0-9]*' : null}
                inputmode="numeric"
                onInvalid={e => {
                  e.preventDefault();
                }}
                ref={this.inputNode}
                id={id}
                sSize={size}
                sTextAlign={REFS.TEXT_ALIGN.CENTER}
                isAutoComplete={autoComplete}
                isDisabled={disabled}
                isFocused={isFocused}
                isWarning={isWarning}
                isError={isError}
                value={formattedValue}
                placeholder={size === REFS.SIZES.S ? placeholder : undefined}
                maxLength={maxLength}
                disabled={disabled}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                onKeyPress={this.handleKeyPress}
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
                  isCentered
                >
                  {label}
                </StyledInputLabel>
              )}
            </StyledInput>
            {!disabled && (
              <StyledDigitalCounterButton onClick={this.handleCounterPlus} isRight sColorType={colorType} sType={type}>
                <IconPlusBasic size={IconMinusBasic.REFS.SIZES.L} />
              </StyledDigitalCounterButton>
            )}
          </StyledDigitalCounter>
        )}
      </ColorContext.Consumer>
    );
  }
}
