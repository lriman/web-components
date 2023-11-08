import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TYPES, INPUT_RADIO_GROUP_REFS as REFS } from './_constants';
import { InputRadioGroupContext } from './_context';
import InputRadioGroupOption from './_internal/InputRadioGroupOption';
import InputRadioGroupButton from './_internal/InputRadioGroupButton';

export default class InputRadioGroup extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.RADIO_GROUP;

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    mark: PropTypes.oneOf(Object.values(REFS.MARKS)),
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    size: REFS.SIZES.M,
    mark: REFS.MARKS.DOT,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
  };

  constructor(props) {
    super(props);

    const { id, value, size, mark } = this.props;

    this.state = {
      isInitialized: false,
      id,
      value,
      size,
      mark,
      isFocused: false,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isInitialized || props.value !== state.value) {
      return { isInitialized: true, value: props.value };
    }
    return null;
  }

  handleFocus = () => {
    const { id, onFocus } = this.props;
    const { value } = this.state;

    this.setState({ isFocused: true });
    onFocus({ id, value });
  };

  handleBlur = () => {
    const { id, onBlur } = this.props;
    const { value } = this.state;

    this.setState({ isFocused: false });
    onBlur({ id, value });
  };

  handleChange = ({ value }) => {
    const { id, onChange } = this.props;
    const { value: stateValue } = this.state;

    this.setState({ value });
    if (value !== stateValue) onChange({ id, value });
  };

  render() {
    const { children } = this.props;

    return <InputRadioGroupContext.Provider value={{ ...this.state }}>{children}</InputRadioGroupContext.Provider>;
  }
}

InputRadioGroup.Option = InputRadioGroupOption;
InputRadioGroup.Button = InputRadioGroupButton;
