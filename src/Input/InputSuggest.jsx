import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Popup, { Opener, Box } from '../Popup';

import InputText from './InputText';
import { TYPES, INPUT_SELECT_REFS as REFS } from './_constants';
import InputSuggestField from './_internal/InputSuggestField';
import InputOptions from './_internal/InputOptions';
import { getOptionTitle } from './_utils';

export default class InputSuggest extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.SUGGEST;

  static propTypes = {
    inputElement: PropTypes.func,
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.node,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    notFoundLabel: PropTypes.string,
    popupBoxAlign: PropTypes.oneOf(Object.values(REFS.POPUP_BOX_ALIGN)),
    popupBoxStyle: PropTypes.shape({}),
    isSearching: PropTypes.bool,
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    format: PropTypes.func,
    onSearch: PropTypes.func.isRequired,
    optionRenderer: PropTypes.func,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    inputElement: InputText,
    id: null,
    value: null,
    label: null,
    placeholder: null,
    maxLength: null,
    size: REFS.SIZES.M,
    textAlign: REFS.TEXT_ALIGN.LEFT,
    width: '100%',
    type: REFS.TYPES.PRIMARY,
    notFoundLabel: null,
    popupBoxAlign: REFS.POPUP_BOX_ALIGN.START,
    popupBoxStyle: null,
    isSearching: false,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    format: null,
    optionRenderer: ({ option }) => option && option.title,

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
      defaultValue: value,
      defaultOptionValue: null,
      value,
      active: null,
      inputElementValue: value,
      inputElementFormattedValue: '',
      inputNodeWidth: null,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isInitialized || props.value !== state.defaultValue) {
      return {
        isInitialized: true,
        defaultValue: props.value,
        value: props.value,
        active: props.options.length ? props.options[0].value : null,
        inputElementValue: props.value,
      };
    }
    if (!props.options.find(option => option.value === state.active)) {
      return {
        active: props.options.length ? props.options[0].value : null,
      };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('mouseup', this.allowBlur);
    window.addEventListener('resize', this.setOffset);
    setTimeout(this.setOffset, 0);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('mouseup', this.allowBlur);
    window.removeEventListener('resize', this.setOffset);
  }

  onInputElementFocus = ({ value }) => {
    const { disabled } = this.props;
    const { isFocused } = this.state;
    if (!isFocused && !disabled) {
      this.handleSearch(value);
      this.handleFocus();
    }
  };

  onInputElementBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (!disallowBlurFlag) {
      this.handleBlur();
    }
  };

  onInputElementChange = ({ value, formattedValue }) => {
    this.setState({
      isOpened: true,
      inputElementFormattedValue: formattedValue,
    });
    this.handleSearch(value);
    this.handleChange(value, null);
  };

  onInputElementClick = () => {
    const { disabled } = this.props;
    const { isOpened } = this.state;
    if (!isOpened && !disabled) this.setState({ isOpened: true });
  };

  onPopupClose = () => {
    this.setState({ isOpened: false });
  };

  onOptionClick = value => {
    const { options } = this.props;
    const optionValue = getOptionTitle(value, options);
    this.createCustomEvent();
    this.handleSearch(optionValue);
    this.handleChange(optionValue, value);
    this.onPopupClose();
  };

  onOptionMouseEnter = value => {
    this.setState({ active: value });
  };

  onOptionMouseLeave = () => {
    this.setState({ active: null });
  };

  setOffset = () => {
    if (!this.inputNode || !this.inputNode.current) return;
    const inputNodeBCRect = this.inputNode.current.inputNode.current.getBoundingClientRect();

    this.setState({
      inputNodeWidth: inputNodeBCRect.width,
    });
  };

  getOptions = () => {
    const { options } = this.props;
    const { active, inputElementFormattedValue } = this.state;

    return options.map(option => ({
      ...option,
      isActive: option.value === active,
      searchValue: inputElementFormattedValue,
    }));
  };

  createCustomEvent = () => {
    const event = document.createEvent('Event');
    event.initEvent('ComponentsCustomInputChange', true, true);
    document.body.dispatchEvent(event);
    this.inputNode.current.inputNode.current.dispatchEvent(event);
  };

  disallowBlur = () => {
    this.setState({ disallowBlurFlag: true });
  };

  allowBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (disallowBlurFlag) {
      this.setState({ disallowBlurFlag: false });
      this.inputNode.current.inputNode.current.focus();
    }
  };

  handleKeyDown = e => {
    const { isFocused, isOpened } = this.state;
    if (isFocused) {
      switch (e.which) {
        case 38: // arrow up
          if (isOpened) {
            e.preventDefault();
            this.activatePrevOption();
          }
          break;
        case 40: // arrow down
          if (isOpened) {
            e.preventDefault();
            this.activateNextOption();
          }
          break;
        case 13: // enter
          if (isOpened) {
            e.preventDefault();
            this.selectActiveOption();
          } else {
            this.setState({ isOpened: true });
          }
          break;
        default:
          break;
      }
    }
  };

  activatePrevOption = () => {
    const { active, value } = this.state;
    const { options } = this.props;

    const current = active || value;
    const activeOptionIndex = options.findIndex(option => option.value === current);
    const prevOptionIndex = activeOptionIndex <= 0 ? options.length - 1 : activeOptionIndex - 1;
    const prevOptionValue = options[prevOptionIndex] && options[prevOptionIndex].value;
    this.setState({ active: prevOptionValue });
  };

  activateNextOption = () => {
    const { active, value } = this.state;
    const { options } = this.props;

    const current = active || value;
    const activeOptionIndex = options.findIndex(option => option.value === current);
    const nextOptionIndex = activeOptionIndex >= options.length - 1 ? 0 : activeOptionIndex + 1;
    const nextOptionValue = options[nextOptionIndex] && options[nextOptionIndex].value;
    this.setState({ active: nextOptionValue });
  };

  selectActiveOption = () => {
    const { active } = this.state;
    const { options } = this.props;
    const optionValue = getOptionTitle(active, options);
    this.createCustomEvent();
    this.handleSearch(optionValue);
    this.handleChange(optionValue, active);
    this.onPopupClose();
  };

  handlePopupCloseByOptionRendererClick = () => {
    this.setState({ disallowBlurFlag: false });
    this.onPopupClose();
  };

  handleFocus = () => {
    const { active, value } = this.state;
    const { id, options, onFocus } = this.props;
    this.setState({ isFocused: true, isOpened: true });
    if (!active) {
      this.setState({
        active: options.length ? options[0].value : null,
      });
    }
    onFocus({ id, value });
  };

  handleBlur = () => {
    const { value } = this.state;
    const { id, onBlur } = this.props;
    this.setState({ isFocused: false, isOpened: false });
    onBlur({ id, value });
  };

  handleChange = (value, optionValue) => {
    const { defaultValue, defaultOptionValue } = this.state;
    const { id, onChange, options } = this.props;
    this.setState({
      defaultValue: value,
      defaultOptionValue: optionValue,
      value,
      active: options.length ? options[0].value : null,
      inputElementValue: value,
    });

    if (value !== defaultValue || optionValue !== defaultOptionValue) {
      onChange({ id, value, optionValue });
    }
  };

  handleSearch = value => {
    const { id, onSearch } = this.props;
    onSearch({ id, value: value || '' });
  };

  render() {
    const {
      inputElement,
      id,
      label,
      placeholder,
      maxLength,
      disabled,
      size,
      textAlign,
      width,
      isSearching,
      isWarning,
      isError,
      popupBoxAlign,
      popupBoxStyle,
      notFoundLabel,
      format,
      optionRenderer,
      setInputNode,
      type,
    } = this.props;

    const { inputElementValue, isFocused, isOpened, inputNodeWidth } = this.state;

    const inputSuggestFieldProps = {
      inputElement,
      id,
      value: inputElementValue,
      label,
      placeholder,
      maxLength,
      size,
      textAlign,
      width,
      isFocused,
      isSearching,
      isWarning,
      isError,
      disabled,
      format,
      onInputElementFocus: this.onInputElementFocus,
      onInputElementBlur: this.onInputElementBlur,
      onInputElementChange: this.onInputElementChange,
      onInputElementClick: this.onInputElementClick,
      onIconElementMouseDown: this.disallowBlur,
      onIconElementMouseUp: this.allowBlur,
      setInputNode,
      type,
    };

    const inputOptionsProps = {
      id,
      size,
      type,
      popupBoxStyle,
      inputNodeWidth,
      onPopupElementMouseDown: this.disallowBlur,
      onPopupElementMouseUp: this.allowBlur,
      options: this.getOptions(),
      emptyLabel: notFoundLabel,
      optionRenderer,
      onOptionClick: this.onOptionClick,
      onOptionMouseEnter: this.onOptionMouseEnter,
      onOptionMouseLeave: this.onOptionMouseLeave,
      handlePopupClose: this.handlePopupCloseByOptionRendererClick,
    };

    return (
      <Popup isOpened={!disabled && isOpened} onClose={this.onPopupClose}>
        <Opener display={Opener.REFS.DISPLAY.BLOCK} isNotAutoOpen>
          <InputSuggestField {...inputSuggestFieldProps} ref={this.inputNode} />
        </Opener>
        <Box align={popupBoxAlign}>
          <InputOptions {...inputOptionsProps} />
        </Box>
      </Popup>
    );
  }
}
