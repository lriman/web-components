import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Popup, { Opener, Box } from '../Popup';

import { TYPES, INPUT_SELECT_REFS as REFS } from './_constants';
import InputMultiSelectField from './_internal/InputMultiSelectField';
import InputOptions from './_internal/InputOptions';

export default class InputMultiSelect extends PureComponent {
  static REFS = REFS;

  static inputType = TYPES.MULTI_SELECT;

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.node,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minWidth: PropTypes.number,
    popupBoxAlign: PropTypes.oneOf(Object.values(REFS.POPUP_BOX_ALIGN)),
    popupBoxStyle: PropTypes.shape({}),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    isWarning: PropTypes.bool,
    isError: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    valueRenderer: PropTypes.func,
    optionRenderer: PropTypes.func,

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
    minWidth: null,
    popupBoxAlign: REFS.POPUP_BOX_ALIGN.START,
    popupBoxStyle: null,
    type: REFS.TYPES.PRIMARY,
    isWarning: false,
    isError: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onChange: () => null,
    valueRenderer: ({ option }) => option && option.title,
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
      value,
      active: null,
      inputNodeWidth: null,
    };

    this.inputNode = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isInitialized || JSON.stringify(props.value) !== JSON.stringify(state.value)) {
      return {
        isInitialized: true,
        value: props.value,
      };
    }
    return null;
  }

  componentDidMount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode);

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('mouseup', this.allowBlur);
    window.addEventListener('resize', this.setOffset);
    setTimeout(this.setOffset, 0);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused } = this.state;

    if (disabled && isFocused) this.handleBlur();
  }

  componentWillUnmount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode, true);

    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('mouseup', this.allowBlur);
    window.removeEventListener('resize', this.setOffset);
  }

  onElementClick = () => {
    const { isOpened } = this.state;
    if (isOpened) this.onPopupClose();
    else this.onPopupOpen();
  };

  onInputElementClick = e => {
    e.preventDefault();
  };

  onInputElementFocus = () => {
    const { disabled } = this.props;
    const { isFocused } = this.state;

    if (!isFocused && !disabled) this.handleFocus();
  };

  onInputElementBlur = () => {
    const { disallowBlurFlag } = this.state;

    if (!disallowBlurFlag) this.handleBlur();
  };

  onCleanElementClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ isOpened: false });
    this.handleChange(null);
  };

  onPopupOpen = () => {
    const { disabled } = this.props;

    if (!disabled) this.setState({ isOpened: true });
  };

  onPopupClose = () => {
    this.setState({ isOpened: false });
  };

  onOptionClick = value => {
    this.createCustomEvent();
    this.handleChange(value);
  };

  onOptionMouseEnter = value => {
    this.setState({ active: value });
  };

  onOptionMouseLeave = () => {
    this.setState({ active: null });
  };

  setOffset = () => {
    if (!this.inputNode || !this.inputNode.current) return;
    const inputNodeBCRect = this.inputNode.current.getBoundingClientRect();

    this.setState({
      inputNodeWidth: inputNodeBCRect.width,
    });
  };

  getOptions = () => {
    const { options } = this.props;
    const { value, active } = this.state;

    return options.map(option => ({
      ...option,
      isSelected: value && value.includes(option.value),
      isActive: option.value === active,
    }));
  };

  createCustomEvent = () => {
    const event = document.createEvent('Event');
    event.initEvent('ComponentsCustomInputChange', true, true);
    document.body.dispatchEvent(event);
    this.inputNode.current.dispatchEvent(event);
  };

  disallowBlur = () => {
    this.setState({ disallowBlurFlag: true });
  };

  allowBlur = () => {
    const { disallowBlurFlag } = this.state;
    if (disallowBlurFlag) {
      this.setState({ disallowBlurFlag: false });
      this.inputNode.current.focus();
    }
  };

  handleKeyDown = e => {
    const { isFocused, isOpened } = this.state;
    if (isFocused && isOpened) {
      switch (e.which) {
        case 38: // arrow up
          e.preventDefault();
          this.activatePrevOption();
          break;
        case 40: // arrow down
          e.preventDefault();
          this.activateNextOption();
          break;
        case 32: // space
          e.preventDefault();
          this.selectActiveOption();
          break;
        case 13: // enter
          e.preventDefault();
          this.onPopupClose();
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
    const prevOptionValue = options[prevOptionIndex].value;
    this.setState({ active: prevOptionValue });
  };

  activateNextOption = () => {
    const { active, value } = this.state;
    const { options } = this.props;

    const current = active || value;

    const activeOptionIndex = options.findIndex(option => option.value === current);
    const nextOptionIndex = activeOptionIndex >= options.length - 1 ? 0 : activeOptionIndex + 1;
    const nextOptionValue = options[nextOptionIndex].value;
    this.setState({ active: nextOptionValue });
  };

  selectActiveOption = () => {
    const { active } = this.state;

    if (active) {
      this.createCustomEvent();
      this.handleChange(active);
    }
  };

  handlePopupCloseByOptionRendererClick = () => {
    this.setState({ disallowBlurFlag: false });
    this.onPopupClose();
  };

  handleFocus = () => {
    const { id, onFocus } = this.props;
    const { value } = this.state;
    this.setState({ isFocused: true });
    onFocus({ id, value });
  };

  handleBlur = () => {
    const { id, onBlur } = this.props;
    const { value } = this.state;
    this.setState({ isFocused: false, isOpened: false });
    onBlur({ id, value });
  };

  handleChange = value => {
    const { id, onChange } = this.props;
    const { value: stateValue } = this.state;

    let newStateValue;

    if (value === null) {
      newStateValue = [];
    } else if (stateValue && stateValue.includes(value)) {
      newStateValue = stateValue.filter(item => item !== value);
    } else if (stateValue) {
      newStateValue = [...stateValue, value];
    } else {
      newStateValue = [value];
    }
    if (!newStateValue.length) newStateValue = null;

    this.setState({ value: newStateValue, active: value });

    if (newStateValue !== stateValue) {
      onChange({ id, value: newStateValue });
    }
  };

  render() {
    const {
      id,
      options,
      label,
      placeholder,
      disabled,
      size,
      width,
      minWidth,
      isWarning,
      isError,
      valueRenderer,
      popupBoxAlign,
      popupBoxStyle,
      optionRenderer,
      setInputNode,
      type,
    } = this.props;

    const { value, isFocused, isOpened, inputNodeWidth } = this.state;

    const inputSelectFieldProps = {
      id,
      value: value || [],
      label,
      selectedOptions: options.filter(option => value && value.includes(option.value)),
      placeholder,
      size,
      width,
      minWidth,
      isFocused,
      isWarning,
      isError,
      disabled,
      valueRenderer,
      onElementClick: this.onElementClick,
      onInputElementFocus: this.onInputElementFocus,
      onInputElementBlur: this.onInputElementBlur,
      onInputElementClick: this.onInputElementClick,
      onCleanElementClick: this.onCleanElementClick,
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
      optionRenderer,
      onOptionClick: this.onOptionClick,
      onOptionMouseEnter: this.onOptionMouseEnter,
      onOptionMouseLeave: this.onOptionMouseLeave,
      handlePopupClose: this.handlePopupCloseByOptionRendererClick,
      isMulti: true,
    };

    return (
      <Popup isOpened={!disabled && isOpened} onClose={this.onPopupClose}>
        <Opener display={Opener.REFS.DISPLAY.BLOCK} isNotAutoOpen>
          <InputMultiSelectField {...inputSelectFieldProps} ref={this.inputNode} />
        </Opener>
        <Box align={popupBoxAlign}>
          <InputOptions {...inputOptionsProps} />
        </Box>
      </Popup>
    );
  }
}
