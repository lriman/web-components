import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_DATE_REFS as REFS } from './_constants';
import { StyledInput, StyledInputDateRange, StyledInputDateRangeItem, StyledInputLabel } from './_style';
import { getChar, getCaretPosition, getStringFromMomentValue, formatDateValue, deformatDateValue } from './_utils';

export default class InputDateRange extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.DATE;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.node,
    placeholder: PropTypes.arrayOf(PropTypes.string),
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
    setStartInputNode: PropTypes.func,
    setEndInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    value: [],
    label: null,
    placeholder: [null, null],
    size: REFS.SIZES.M,
    type: REFS.TYPES.PRIMARY,
    width: '100%',
    isWarning: false,
    isError: false,
    disabled: false,
    uncleanable: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    disabledDate: () => false,

    setStartInputNode: null,
    setEndInputNode: null,
  };

  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = {
      isInitialized: false,
      isFocused: false,
      start: { value: value[0], formattedValue: '', caretPosition: null },
      end: { value: value[1], formattedValue: '', caretPosition: null },
    };

    this.startInputNode = React.createRef();
    this.endInputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    const propsValue = props.value || [];
    if (!state.isInitialized || propsValue[0] !== state.start.value || propsValue[1] !== state.end.value) {
      let formattedStartValue = formatDateValue(getStringFromMomentValue(props.value[0]));
      const startValue = deformatDateValue(formattedStartValue, props.disabledDate);

      let formattedEndValue = formatDateValue(getStringFromMomentValue(props.value[1]));
      const endValue = deformatDateValue(formattedEndValue, props.disabledDate);

      if (!startValue) formattedStartValue = '';
      if (!endValue) formattedEndValue = '';

      const start = { value: startValue, formattedValue: formattedStartValue, caretPosition: null };
      const end = { value: endValue, formattedValue: formattedEndValue, caretPosition: null };
      return { isInitialized: true, start, end };
    }
    return null;
  }

  componentDidMount() {
    const { id, setStartInputNode, setEndInputNode } = this.props;
    if (setStartInputNode) setStartInputNode(id, this.startInputNode);
    if (setEndInputNode) setEndInputNode(id, this.endInputNode);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused, start, end } = this.state;
    if (disabled && isFocused) this.handleBlur();
    if (start.caretPosition !== null) {
      this.startInputNode.current.setSelectionRange(start.caretPosition, start.caretPosition);
    }
    if (end.caretPosition !== null) {
      this.endInputNode.current.setSelectionRange(end.caretPosition, end.caretPosition);
    }
  }

  componentWillUnmount() {
    const { id, setStartInputNode, setEndInputNode } = this.props;
    if (setStartInputNode) setStartInputNode(id, this.startInputNode, true);
    if (setEndInputNode) setEndInputNode(id, this.endInputNode, true);
  }

  handleFocus = () => {
    const { id, onFocus, uncleanable } = this.props;
    const { start, end } = this.state;
    if (!start.formattedValue && !end.formattedValue) {
      this.startInputNode.current.focus();
    }

    if (uncleanable) {
      this.setState({
        isFocused: true,
        start: { ...start, caretPosition: null },
        end: { ...end, caretPosition: null },
      });
      onFocus({ id, value: [start.value, end.value], formattedValue: [start.formattedValue, end.formattedValue] });
    } else {
      const newStartFormattedValue = formatDateValue(getStringFromMomentValue(start.value));
      const newEndFormattedValue = formatDateValue(getStringFromMomentValue(end.value));

      this.setState({
        isFocused: true,
        start: { ...start, formatDateValue: newStartFormattedValue },
        end: { ...end, formatDateValue: newEndFormattedValue },
      });
      onFocus({ id, value: [start.value, end.value], formattedValue: [newStartFormattedValue, newEndFormattedValue] });
    }
  };

  handleBlur = () => {
    const { id, onBlur, uncleanable } = this.props;
    const { start, end } = this.state;
    if (uncleanable) {
      this.setState({
        isFocused: false,
        start: { ...start, caretPosition: null },
        end: { ...end, caretPosition: null },
      });
      onBlur({ id, value: [start.value, end.value], formattedValue: [start.formattedValue, end.formattedValue] });
    } else {
      const newStartFormattedValue = formatDateValue(getStringFromMomentValue(start.value));
      const newEndFormattedValue = formatDateValue(getStringFromMomentValue(end.value));
      this.setState({
        isFocused: false,
        start: { ...start, formatDateValue: newStartFormattedValue },
        end: { ...end, formatDateValue: newEndFormattedValue },
      });
      onBlur({ id, value: [start.value, end.value], formattedValue: [newStartFormattedValue, newEndFormattedValue] });
    }
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, disabledDate, onChange } = this.props;
    const { start, end } = this.state;
    const formattedValue = formatDateValue(value);
    const deformattedValue = deformatDateValue(formattedValue, disabledDate);
    const beforeCaretPosValue = value.substring(0, e.target.selectionEnd).replace(/[^\d\\.]/g, '');
    const caretPosition = getCaretPosition(formattedValue, beforeCaretPosValue);

    const res = { start, end };
    const startValue = res[e.inputId].value;

    if (e.inputId === 'start' && caretPosition === 10) {
      this.endInputNode.current.focus();
    }

    if (e.inputId === 'end' && caretPosition === 0 && end.caretPosition === 1) {
      this.startInputNode.current.focus();
    }
    res[e.inputId] = {
      value: deformattedValue,
      formattedValue,
      caretPosition,
    };

    this.setState({ start: res.start, end: res.end });

    if (deformattedValue !== startValue) {
      onChange({
        id,
        value: [res.start.value, res.end.value],
        formattedValue: [res.start.formatDateValue, res.end.formatDateValue],
      });
    }
  };

  handleKeyDown = e => {
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
    const { isFocused, start, end } = this.state;
    const isSmall = isFocused || start.formattedValue || end.formatDateValue;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputDateRange
              sSize={size}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              disabled={disabled}
              sColorType={colorType}
              sType={type}
              isEntered={!!start.formattedValue || !!end.formattedValue}
            >
              <StyledInputDateRangeItem
                {...addDataAttributes({ component: TYPES.DATE_RANGE })}
                as="input"
                ref={this.startInputNode}
                id={id && `${id}_start`}
                sSize={size}
                isDisabled={disabled}
                isFocused={isFocused}
                isWarning={isWarning}
                isError={isError}
                value={start.formattedValue}
                placeholder={size === REFS.SIZES.S ? placeholder && placeholder[0] : undefined}
                maxLength={10}
                disabled={disabled}
                style={{ paddingRight: '3px' }}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={e => this.handleChange({ ...e, inputId: 'start' })}
                onKeyDown={this.handleKeyDown}
                onKeyPress={this.handleKeyPress}
                sColorType={colorType}
                sType={type}
              />
              {isSmall && `-`}
              <StyledInputDateRangeItem
                {...addDataAttributes({ component: TYPES.DATE_RANGE })}
                as="input"
                ref={this.endInputNode}
                id={id && `${id}_end`}
                sSize={size}
                isDisabled={disabled}
                isFocused={isFocused}
                isWarning={isWarning}
                isError={isError}
                value={end.formattedValue}
                placeholder={size === REFS.SIZES.S ? placeholder && placeholder[1] : undefined}
                maxLength={10}
                disabled={disabled}
                sWidth="100%"
                style={{ paddingLeft: '3px' }}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={e => this.handleChange({ ...e, inputId: 'end' })}
                onKeyDown={this.handleKeyDown}
                onKeyPress={this.handleKeyPress}
                sColorType={colorType}
                sType={type}
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
            </StyledInputDateRange>
          </StyledInput>
        )}
      </ColorContext.Consumer>
    );
  }
}
