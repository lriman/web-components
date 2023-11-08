import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, SIZES, INPUT_REFS as REFS } from '../_constants';
import { StyledInputOptions, StyledInputOptionsEmpty } from '../_style';
import InputOptionsItem from './InputOptionsItem';

export default class InputOptions extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    size: PropTypes.oneOf(Object.values(SIZES)),
    popupBoxStyle: PropTypes.shape({}),
    inputNodeWidth: PropTypes.number,
    onPopupElementMouseDown: PropTypes.func.isRequired,
    onPopupElementMouseUp: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    emptyLabel: PropTypes.string,
    type: PropTypes.oneOf(Object.values(REFS.TYPES)).isRequired,
    optionRenderer: PropTypes.func.isRequired,
    onOptionClick: PropTypes.func.isRequired,
    onOptionMouseEnter: PropTypes.func.isRequired,
    onOptionMouseLeave: PropTypes.func.isRequired,
    handlePopupClose: PropTypes.func.isRequired,
    isMulti: PropTypes.bool,
  };

  static defaultProps = {
    id: null,
    size: SIZES.M,
    popupBoxStyle: {},
    inputNodeWidth: null,
    emptyLabel: null,
    isMulti: false,
  };

  constructor(props) {
    super(props);

    const { options } = this.props;

    this.node = React.createRef();
    this.itemsNodes = {};

    options.forEach(option => {
      this.itemsNodes[option.value] = React.createRef();
    });
  }

  componentDidMount() {
    this.scrollToActiveItem();
  }

  componentDidUpdate() {
    this.scrollToActiveItem();
  }

  getActiveItemNode = () => {
    const { options } = this.props;
    const activeItem = options.find(item => item.isActive);
    if (activeItem && this.itemsNodes[activeItem.value]) return this.itemsNodes[activeItem.value].current;
    return null;
  };

  scrollToActiveItem = () => {
    const node = this.node.current;
    const activeItemNode = this.getActiveItemNode();
    if (node && activeItemNode) {
      const nodeBCR = node.getBoundingClientRect();
      const activeItemNodeBCR = activeItemNode.getBoundingClientRect();
      if (nodeBCR.top > activeItemNodeBCR.top) node.scrollTop -= nodeBCR.top - activeItemNodeBCR.top;
      if (nodeBCR.bottom < activeItemNodeBCR.bottom) node.scrollTop += activeItemNodeBCR.bottom - nodeBCR.bottom;
    }
  };

  render() {
    const {
      id,
      options,
      size,
      popupBoxStyle,
      inputNodeWidth,
      onPopupElementMouseDown,
      onPopupElementMouseUp,
      onOptionClick,
      onOptionMouseEnter,
      onOptionMouseLeave,
      optionRenderer,
      handlePopupClose,
      emptyLabel,
      isMulti,
      type,
      ...rest
    } = this.props;

    if (!options.length && !emptyLabel) return null;

    return (
      <StyledInputOptions
        {...addDataAttributes({ component: COMPONENTS.OPTIONS })}
        ref={this.node}
        sStyle={popupBoxStyle}
        sDefaultWidth={inputNodeWidth}
        onMouseDown={onPopupElementMouseDown}
        onMouseUp={onPopupElementMouseUp}
      >
        <>
          {!!options.length &&
            options.map(option => (
              <InputOptionsItem
                key={option.value}
                ref={this.itemsNodes[option.value]}
                size={size}
                value={option.value}
                isSelected={option.isSelected}
                isActive={option.isActive}
                onClick={onOptionClick}
                onMouseEnter={onOptionMouseEnter}
                onMouseLeave={onOptionMouseLeave}
                isMulti={isMulti}
                type={type}
              >
                {optionRenderer({ id, option, handlePopupClose, ...rest })}
              </InputOptionsItem>
            ))}
          {!options.length && emptyLabel && (
            <StyledInputOptionsEmpty sSize={size}>{emptyLabel}</StyledInputOptionsEmpty>
          )}
        </>
      </StyledInputOptions>
    );
  }
}
