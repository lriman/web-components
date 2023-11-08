import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS } from '../_constants';
import { MenuContext } from '../_context';
import { StyledMenuItem, StyledMenuItemInner } from '../_style';

class MenuItemWithContext extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    isMain: PropTypes.bool,
    isExtra: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    setItemNode: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: null,
    isMain: false,
    isExtra: false,
    active: false,
  };

  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    const { isMain, setItemNode, id } = this.props;
    if (isMain) setItemNode(id, this.node);
  }

  handleOnClick = () => {
    const { active, id, onClick } = this.props;
    if (!active) onClick(id);
  };

  render() {
    const { active, id, title, isExtra, size } = this.props;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledMenuItem {...addDataAttributes({ component: COMPONENTS.ITEM, id })} ref={this.node} isExtra={isExtra}>
            <StyledMenuItemInner
              onClick={this.handleOnClick}
              isExtra={isExtra}
              isActive={active}
              sSize={size}
              sColorType={colorType}
            >
              {title}
            </StyledMenuItemInner>
          </StyledMenuItem>
        )}
      </ColorContext.Consumer>
    );
  }
}

const MenuItem = props => (
  <MenuContext.Consumer>
    {({ setItemNode }) => <MenuItemWithContext {...props} setItemNode={setItemNode} />}
  </MenuContext.Consumer>
);

export default MenuItem;
