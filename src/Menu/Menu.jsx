import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import { addDataAttributes } from '../_utils';

import { StyledMenu } from './_style';
import { COMPONENTS, REFS, MORE_BUTTON_WIDTH } from './_constants';
import { MenuContext } from './_context';

import MenuMain from './_internal/MenuMain';
import MenuExtra from './_internal/MenuExtra';

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        active: PropTypes.bool,
      }),
    ).isRequired,
    onItemClick: PropTypes.func.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    isBordered: PropTypes.bool,
  };

  static defaultProps = {
    align: 'left',
    type: REFS.TYPES.NORMAL,
    size: REFS.SIZES.M,
    isBordered: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      visibleItemsQty: 0,
      visibleItemsWidth: 0,
    };

    this.iframe = v4();
    this.node = React.createRef();
    this.itemsNodes = {};
  }

  componentDidMount() {
    window[this.iframe].addEventListener('resize', this.handleUpdate);
    this.handleUpdate();
  }

  componentDidUpdate(prevProps) {
    const { items } = this.props;

    if (JSON.stringify(prevProps.items) !== JSON.stringify(items)) {
      this.handleUpdate();
    }
  }

  componentWillUnmount() {
    if (window[this.iframe]) window[this.iframe].removeEventListener('resize', this.handleUpdate);
  }

  setItemNode = (id, node) => {
    this.itemsNodes[id] = node;
  };

  handleUpdate = () => {
    const { items } = this.props;

    const sortedItems = [...items].sort(a => (a.active ? -1 : 1));

    let availableWidth = this.node.current.getBoundingClientRect().width - MORE_BUTTON_WIDTH;

    const itemsNodes = sortedItems.map(item => this.itemsNodes[item.id]);

    let visibleItemsWidth = 0;
    let visibleItemsQty = itemsNodes.length;
    itemsNodes.every((item, index) => {
      const childOffsetWidth = item && item.current ? item.current.getBoundingClientRect().width : 0;
      if (index === itemsNodes.length - 1) availableWidth += MORE_BUTTON_WIDTH;
      if (availableWidth < visibleItemsWidth + childOffsetWidth) {
        visibleItemsQty = index;
        return false;
      }
      visibleItemsWidth += childOffsetWidth;
      return true;
    });

    this.setState({
      visibleItemsQty,
      visibleItemsWidth,
    });
  };

  render() {
    const { items, onItemClick, align, size, isBordered } = this.props;
    const { visibleItemsQty, visibleItemsWidth } = this.state;

    const activeIndex = items.findIndex(i => i.active);
    const sortedItems = [...items];
    if (visibleItemsQty && activeIndex > visibleItemsQty - 1) {
      const activeItem = sortedItems.splice(activeIndex, 1);
      sortedItems.splice(visibleItemsQty - 1, 0, ...activeItem);
    }

    const extraItems = items.length > visibleItemsQty ? sortedItems.slice(visibleItemsQty) : null;

    return (
      <MenuContext.Provider value={{ setItemNode: this.setItemNode }}>
        <StyledMenu {...addDataAttributes({ component: COMPONENTS.GENERAL })} ref={this.node} sAlign={align}>
          <iframe
            name={this.iframe}
            title="menu"
            width="100%"
            height="0"
            style={{ position: 'absolute', left: 0, top: 0, opacity: 0, zIndex: '-1' }}
          />
          <MenuMain
            width={visibleItemsWidth}
            items={sortedItems}
            size={size}
            isBordered={isBordered}
            onItemClick={onItemClick}
          />
          {extraItems && <MenuExtra items={extraItems} size={size} onItemClick={onItemClick} />}
        </StyledMenu>
      </MenuContext.Provider>
    );
  }
}
