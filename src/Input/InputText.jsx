import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import IconClose from '../Icon/IconClose';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from './_constants';
import { StyledInput, StyledInputIconClear, StyledInputLabel, StyledInputText } from './_style';
import { formatTextValue, deformatTextValue } from './_utils';

export default class InputText extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.TEXT;

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
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onKeyDown: PropTypes.func,
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
    onClear: undefined,
    onKeyDown: () => null,
    format: null,

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
        : formatTextValue(props.value, props.maxLength);
      const value = deformatTextValue(formattedValue);
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
    const { isFocused } = this.state;
    if (disabled && isFocused) this.handleBlur();
  }

  componentWillUnmount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode, true);
  }

  handleFocus = () => {
    const { id, onFocus, isFocused } = this.props;
    const { value, formattedValue } = this.state;
    if (isFocused === null) this.setState({ isFocused: true });
    onFocus({ id, value, formattedValue });
  };

  handleBlur = () => {
    const { id, onBlur, isFocused } = this.props;
    const { value, formattedValue } = this.state;
    if (isFocused === null) this.setState({ isFocused: false });
    onBlur({ id, value, formattedValue });
  };

  handleChange = e => {
    const { value } = e.target;
    const { id, maxLength, onChange, format } = this.props;
    const { value: stateValue } = this.state;
    const formattedValue = format ? format(value, maxLength) : formatTextValue(value, maxLength);
    const deformattedValue = deformatTextValue(formattedValue);
    this.setState({ value: deformattedValue, formattedValue });

    if (deformattedValue !== stateValue) {
      onChange({ id, value: deformattedValue, formattedValue });
    }
  };

  handleClear = () => {
    const { id, onClear, isFocused } = this.props;
    const { value, formattedValue } = this.state;
    if (isFocused === null) this.setState({ isFocused: false });
    if (onClear) onClear({ id, value, formattedValue });
  };

  handleKeyDown = e => {
    const { onKeyDown } = this.props;
    onKeyDown(e);
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
      type,
      isWarning,
      isError,
      onClear,
    } = this.props;
    const { isFocused, formattedValue } = this.state;
    const isSmall = isFocused || !!value;
    const isWithIcon = !!onClear;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputText
              {...addDataAttributes({ component: TYPES.TEXT })}
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
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              sColorType={colorType}
              sType={type}
              isEntered={!!formattedValue}
              isWithIcon={isWithIcon}
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
            {isWithIcon && (
              <StyledInputIconClear
                sSize={size}
                sColorType={colorType}
                sType={type}
                onClick={this.handleClear}
                isClickable
              >
                <IconClose size={IconClose.REFS.SIZES.S} />
              </StyledInputIconClear>
            )}
          </StyledInput>
        )}
      </ColorContext.Consumer>
    );
  }
}
