import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, TYPES, INPUT_REFS as REFS } from './_constants';
import { StyledInput, StyledInputTextArea, StyledInputLabel } from './_style';
import { formatTextValue, deformatTextValue } from './_utils';

export default class InputTextArea extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.TEXT_AREA;

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
    rows: PropTypes.number,
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
    textAlign: REFS.TEXT_ALIGN.LEFT,
    type: REFS.TYPES.PRIMARY,
    width: '100%',
    rows: 3,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
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

  render() {
    const {
      id,
      label,
      placeholder,
      disabled,
      size,
      textAlign,
      rows,
      width,
      maxLength,
      type,
      isWarning,
      isError,
    } = this.props;
    const { isFocused, formattedValue } = this.state;
    const isSmall = isFocused || !!formattedValue;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledInput {...addDataAttributes({ component: COMPONENTS.GENERAL })} sWidth={width} isWithLabel={!!label}>
            <StyledInputTextArea
              {...addDataAttributes({ component: TYPES.TEXT_AREA })}
              as="textarea"
              ref={this.inputNode}
              id={id}
              sSize={size}
              sTextAlign={textAlign}
              sRows={rows}
              isDisabled={disabled}
              isFocused={isFocused}
              isWarning={isWarning}
              isError={isError}
              value={formattedValue}
              placeholder={placeholder}
              maxLength={maxLength}
              disabled={disabled}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
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
                isTextArea
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
