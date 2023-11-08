import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledAdminNavigationSectionItem, StyledAdminNavigationSectionItemInner } from '../_style';

export default function NavigationSectionItem(props) {
  const { id, title, href, active, onClick } = props;

  let component = 'a';
  if (href) component = RouterLink;
  if (active) component = 'span';

  const handleClick = event => {
    if (!active && onClick) onClick({ id, event });
  };

  return (
    <StyledAdminNavigationSectionItem
      {...addDataAttributes({ component: COMPONENTS.SECTION_ITEM, id })}
      isActive={active}
    >
      <StyledAdminNavigationSectionItemInner as={component} to={href} onClick={handleClick}>
        {title}
      </StyledAdminNavigationSectionItemInner>
    </StyledAdminNavigationSectionItem>
  );
}

NavigationSectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

NavigationSectionItem.defaultProps = {
  icon: null,
  href: null,
  active: false,
  onClick: null,
};
