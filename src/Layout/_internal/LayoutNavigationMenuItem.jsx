import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { addDataAttributes } from '../../_utils';

import { H3 } from '../../Typography';

import { COMPONENTS } from '../_constants';
import { StyledLayoutNavigationMenuItem, StyledLayoutNavigationMenuItemLink } from '../_style';

export default function LayoutNavigationMenuItem(props) {
  const { title, route, active, onClick } = props;

  return (
    <StyledLayoutNavigationMenuItem
      {...addDataAttributes({ component: COMPONENTS.NAVIGATION_MENU_ITEM })}
      isActive={active}
    >
      <StyledLayoutNavigationMenuItemLink as={RouterLink} to={route} onClick={onClick}>
        <H3>{title}</H3>
      </StyledLayoutNavigationMenuItemLink>
    </StyledLayoutNavigationMenuItem>
  );
}

LayoutNavigationMenuItem.propTypes = {
  title: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

LayoutNavigationMenuItem.defaultProps = {
  active: false,
};
