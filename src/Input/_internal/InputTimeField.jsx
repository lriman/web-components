import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes, isMobile } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from '../_constants';
import { StyledInput, StyledInputLabel, StyledInputText } from '../_style';
import { getChar, getCaretPosition, formatTimeValue, deformatTimeValue } from '../_utils';

export default class InputTime extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.TIME;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    autoComplete: PropTypes.bool,
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,

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
    size: REFS.SIZES.M,
    textAlign: REFS.TEXT_ALIGN.LEFT,
    type: REFS.TYPES.PRIMARY,
    width: '100%',
    autoComplete: false,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,

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
      const formattedValue = formatTimeValue(props.value);
      const value = deformatTimeValue(formattedValue);
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
    if (isFocused === null) this.setState({ isFocused: false, caretPosition: null });
    else this.setState({ caretPosition: null });

    onBlur({ id, value, formattedValue });
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, onChange } = this.props;
    const { value: stateValue } = this.state;
    const beforeCaretPosValue = value.substring(0, e.target.selectionEnd).replace(/\D/g, '');
    const formattedValue = formatTimeValue(value);
    const deformattedValue = deformatTimeValue(formattedValue);
    const caretPosition = getCaretPosition(formattedValue, beforeCaretPosValue, 1);

    this.setState({
      value: deformattedValue,
      formattedValue,
      caretPosition,
    });

    if (deformattedValue !== stateValue) {
      onChange({ id, value: deformattedValue, formattedValue });
    }
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
      textAlign,
      width,
      autoComplete,
      type,
      isWarning,
      isError,
    } = this.props;
    const { isFocused, formattedValue } = this.state;
    const isSmall = isFocused || value;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputText
              {...addDataAttributes({ component: TYPES.PHONE })}
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
              isAutoComplete={autoComplete}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              value={formattedValue}
              placeholder={size === REFS.SIZES.S ? placeholder : undefined}
              maxLength={5}
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
