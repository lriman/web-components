import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Popup, { Opener, Box } from '../Popup';

import { TYPES, INPUT_DATE_REFS as REFS } from './_constants';
import InputRangeCalendar from './_internal/InputRangeCalendar';
import InputDateRangeCalendarField from './_internal/InputDateRangeCalendarField';

export default class InputDateRangeCalendar extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.DATE_RANGE_CALENDAR;

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
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    value: [],
    label: null,
    placeholder: [],
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

    setInputNode: null,
  };

  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = {
      isInitialized: false,
      isFocused: false,
      isOpened: false,
      disallowBlurFlag: false,
      value,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    const propsValue = props.value || null;
    if (!state.isInitialized || propsValue !== state.value) {
      return { isInitialized: true, value: props.value };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.allowBlur);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.allowBlur);
  }

  onInputElementFocus = () => {
    const { disabled } = this.props;
    const { isFocused } = this.state;
    if (!isFocused && !disabled) this.handleFocus();
  };

  onInputElementBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (!disallowBlurFlag) this.handleBlur();
  };

  onInputElementChange = ({ value }) => {
    this.setState({ value });
    this.handleChange(value);
  };

  onIconElementClick = () => {
    const { disabled } = this.props;
    const { isOpened } = this.state;
    if (!disabled) this.setState({ isOpened: !isOpened });
  };

  onCalendarSelect = value => {
    this.createCustomEvent();
    this.handleChange(value.map(item => item.format()));
  };

  onPopupClose = () => {
    this.setState({ isOpened: false });
  };

  disallowBlur = () => {
    this.setState({ disallowBlurFlag: true });
  };

  allowBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (disallowBlurFlag) {
      this.setState({ disallowBlurFlag: false });
      // if (this.inputNode?.current) this.inputNode.current.inputNode.current.focus();
    }
  };

  createCustomEvent = () => {
    const event = document.createEvent('Event');
    event.initEvent('ComponentsCustomInputChange', true, true);
    document.body.dispatchEvent(event);
    // if (this.inputNode?.current) this.inputNode.current.inputNode.current.dispatchEvent(event);
  };

  handleFocus = () => {
    const { onFocus, id } = this.props;
    const { value } = this.state;
    this.setState({ isFocused: true });
    onFocus({ id, value });
  };

  handleBlur = () => {
    const { onBlur, id } = this.props;
    const { value } = this.state;
    this.onPopupClose();
    this.setState({ isFocused: false });
    onBlur({ id, value });
  };

  handleChange = value => {
    const { id, onChange } = this.props;
    const { value: stateValue } = this.state;
    this.setState({ value, isOpened: false });

    if (value !== stateValue) {
      onChange({ id, value });
    }
  };

  render() {
    const {
      id,
      label,
      placeholder,
      disabled,
      uncleanable,
      size,
      width,
      isWarning,
      isError,
      disabledDate,
      setInputNode,
      type,
    } = this.props;

    const { value, isFocused, isOpened } = this.state;

    const inputDateCalendarFieldProps = {
      id,
      value,
      label,
      placeholder,
      size,
      width,
      isFocused,
      isWarning,
      isError,
      disabled,
      uncleanable,
      disabledDate,
      onInputElementFocus: this.onInputElementFocus,
      onInputElementBlur: this.onInputElementBlur,
      onInputElementChange: this.onInputElementChange,
      onIconElementClick: this.onIconElementClick,
      onIconElementMouseDown: this.disallowBlur,
      onIconElementMouseUp: this.allowBlur,
      setInputNode,
      type,
    };

    const inputCalendarProps = {
      id,
      value,
      onPopupElementMouseDown: this.disallowBlur,
      onPopupElementMouseUp: this.allowBlur,
      onSelect: this.onCalendarSelect,
      disabledDate,
    };

    return (
      <Popup isOpened={!disabled && isOpened} onClose={this.onPopupClose}>
        <Opener display={Opener.REFS.DISPLAY.BLOCK} isNotAutoOpen>
          <InputDateRangeCalendarField {...inputDateCalendarFieldProps} ref={this.inputNode} />
        </Opener>
        <Box>
          <InputRangeCalendar {...inputCalendarProps} />
        </Box>
      </Popup>
    );
  }
}
