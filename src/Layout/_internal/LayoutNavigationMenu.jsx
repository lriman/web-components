import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledLayoutNavigationMenu } from '../_style';

import LayoutNavigationMenuItem from './LayoutNavigationMenuItem';

export default function LayoutNavigationMenu(props) {
  const { items, onItemClick } = props;

  return (
    <StyledLayoutNavigationMenu {...addDataAttributes({ component: COMPONENTS.NAVIGATION_MENU })}>
      {items.map(item => (
        <LayoutNavigationMenuItem
          key={item.id}
          title={item.title}
          route={item.route}
          active={item.active}
          onClick={onItemClick}
        />
      ))}
    </StyledLayoutNavigationMenu>
  );
}

LayoutNavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
