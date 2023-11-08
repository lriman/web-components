import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes, isMobile } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from './_constants';
import { StyledInput, StyledInputLabel, StyledInputText } from './_style';
import {
  getChar,
  getCaretPosition,
  formatNumberIntegerValue,
  deformatNumberIntegerValue,
  getNumberDisplayedValue,
  getNumberPureValue,
} from './_utils';

export default class InputNumberInteger extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.NUMBER_INTEGER;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.number,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    /** Единицы измерения (нельзя использовать числа) */
    units: PropTypes.string,
    isNegative: PropTypes.bool,
    isFormatted: PropTypes.bool,
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    value: null,
    label: null,
    placeholder: null,
    maxLength: 14,
    size: REFS.SIZES.M,
    textAlign: REFS.TEXT_ALIGN.RIGHT,
    type: REFS.TYPES.PRIMARY,
    width: '100%',
    units: null,
    isNegative: false,
    isFormatted: false,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    onKeyDown: () => null,

    setInputNode: null,
  };

  constructor(props) {
    super(props);

    const { value, maxLength, units, isFormatted, isNegative } = this.props;

    this.state = {
      isInitialized: false,
      isFocused: false,
      value,
      formattedValue: '',
      caretPosition: null,
      maxLength:
        maxLength +
        (isFormatted ? Math.floor(maxLength / 3) : 0) +
        (isNegative ? 1 : 0) +
        (units ? units.length + 1 : 0),
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isInitialized || props.value !== state.value) {
      const formattedValue = formatNumberIntegerValue(
        props.value,
        props.isNegative,
        props.isFormatted,
        props.maxLength,
        !state.isFocused,
      );
      const value = deformatNumberIntegerValue(formattedValue);
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
    const { id, onFocus, isNegative, isFormatted, maxLength } = this.props;
    const { value } = this.state;

    const formattedValue = formatNumberIntegerValue(value, isNegative, isFormatted, maxLength, false);
    this.setState({ isFocused: true, caretPosition: null, formattedValue });

    onFocus({ id, value, formattedValue });
  };

  handleBlur = () => {
    const { id, onBlur, isNegative, isFormatted, maxLength } = this.props;
    const { value } = this.state;

    const formattedValue = formatNumberIntegerValue(value, isNegative, isFormatted, maxLength, true);
    this.setState({ isFocused: false, caretPosition: null, formattedValue });

    onBlur({ id, value, formattedValue });
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, units, onChange, isNegative, isFormatted, maxLength } = this.props;
    const { value: stateValue } = this.state;
    const pureValue = getNumberPureValue(value, units);

    const beforeCaretPosValue = pureValue
      .substring(0, e.target.selectionEnd)
      .replace(',', '.')
      .replace(/[^-\d\\.]/g, '');
    const formattedValue = formatNumberIntegerValue(pureValue, isNegative, isFormatted, maxLength, false);
    const deformattedValue = deformatNumberIntegerValue(formattedValue);
    const caretPosition = getCaretPosition(formattedValue, beforeCaretPosValue);

    this.setState({ value: deformattedValue, formattedValue, caretPosition });

    if (deformattedValue !== stateValue) {
      onChange({ id, value: deformattedValue, formattedValue });
    }
  };

  handleKeyDown = e => {
    const { onKeyDown } = this.props;
    onKeyDown(e);
    this.setState({
      caretPosition: null,
    });
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 90) e.preventDefault(); // disable ctrl-z
  };

  handleKeyPress = e => {
    const char = getChar(e);
    if (
      !e.ctrlKey &&
      !e.altKey &&
      !e.metaKey &&
      ((char !== null && (char < '0' || char > '9') && char !== '-') ||
        (char === '-' && e.target.value.indexOf('-') > -1))
    ) {
      e.preventDefault();
    }
  };

  render() {
    const {
      id,
      value,
      label,
      placeholder,
      units,
      disabled,
      size,
      textAlign,
      width,
      type,
      isWarning,
      isError,
    } = this.props;
    const { isFocused, formattedValue, maxLength } = this.state;
    const isSmall = isFocused || value || value === 0;
    const displayedValue = getNumberDisplayedValue(formattedValue, units);

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputText
              {...addDataAttributes({ component: TYPES.NUMBER_INTEGER })}
              as="input"
              pattern={isMobile() ? '[0-9]*' : null}
              inputmode="numeric"
              onInvalid={e => {
                e.preventDefault();
              }}
              ref={this.inputNode}
              id={id}
              sSize={size}
              sTextAlign={textAlign}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              value={displayedValue}
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
              isEntered={!!displayedValue}
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
          </StyledInput>
        )}
      </ColorContext.Consumer>
    );
  }
}
