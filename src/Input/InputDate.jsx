import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_DATE_REFS as REFS } from './_constants';
import { StyledInput, StyledInputLabel, StyledInputText } from './_style';
import { getChar, getCaretPosition, getStringFromMomentValue, formatDateValue, deformatDateValue } from './_utils';

export default class InputDate extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.DATE;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    uncleanable: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabledDate: PropTypes.func,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    value: null,
    label: null,
    placeholder: null,
    size: REFS.SIZES.M,
    width: '100%',
    type: REFS.TYPES.PRIMARY,
    isWarning: false,
    isError: false,
    disabled: false,
    uncleanable: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    disabledDate: () => false,

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
      caretPosition: null,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    const propsValue = props.value || null;
    if (!state.isInitialized || propsValue !== state.value) {
      let formattedValue = formatDateValue(getStringFromMomentValue(props.value));
      const value = deformatDateValue(formattedValue, props.disabledDate);
      if (!value) formattedValue = '';
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
    const { id, onFocus, uncleanable } = this.props;
    const { value, formattedValue } = this.state;
    if (uncleanable) {
      this.setState({ isFocused: true, caretPosition: null, formattedValue });
      onFocus({ id, value, formattedValue });
    } else {
      const newFormattedValue = formatDateValue(getStringFromMomentValue(value));
      this.setState({ isFocused: true, caretPosition: null, formattedValue: newFormattedValue });
      onFocus({ id, value, formattedValue: newFormattedValue });
    }
  };

  handleBlur = () => {
    const { id, onBlur, uncleanable } = this.props;
    const { value, formattedValue } = this.state;
    if (uncleanable) {
      this.setState({ isFocused: false, caretPosition: null, formattedValue });
      onBlur({ id, value, formattedValue });
    } else {
      const newFormattedValue = formatDateValue(getStringFromMomentValue(value));
      this.setState({ isFocused: false, caretPosition: null, formattedValue: newFormattedValue });
      onBlur({ id, value, formattedValue: newFormattedValue });
    }
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, disabledDate, onChange } = this.props;
    const { value: stateValue } = this.state;
    const formattedValue = formatDateValue(value);
    const deformattedValue = deformatDateValue(formattedValue, disabledDate);
    const beforeCaretPosValue = value.substring(0, e.target.selectionEnd).replace(/[^\d\\.]/g, '');
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

  handleKeyDown = e => {
    this.setState({
      caretPosition: null,
    });
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 90) e.preventDefault(); // disable ctrl-z
  };

  handleKeyPress = e => {
    const char = getChar(e);
    if (!e.ctrlKey && !e.altKey && !e.metaKey && char !== null && (char < '0' || char > '9') && char !== '.') {
      e.preventDefault();
    }
  };

  render() {
    const { id, label, placeholder, disabled, size, width, type, isWarning, isError } = this.props;
    const { isFocused, formattedValue } = this.state;
    const isSmall = isFocused || formattedValue;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputText
              {...addDataAttributes({ component: TYPES.DATE })}
              as="input"
              ref={this.inputNode}
              id={id}
              sSize={size}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              value={formattedValue}
              placeholder={size === REFS.SIZES.S ? placeholder : undefined}
              maxLength={10}
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
