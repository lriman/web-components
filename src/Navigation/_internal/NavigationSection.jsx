import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { addDataAttributes } from '../../_utils';
import { IconArrowDown, IconArrowRight } from '../../Icon';

import { COMPONENTS } from '../_constants';
import {
  StyledAdminNavigationSection,
  StyledAdminNavigationSectionMain,
  StyledAdminNavigationSectionIcon,
  StyledAdminNavigationSectionTitle,
  StyledAdminNavigationSectionPointer,
  StyledAdminNavigationSectionItems,
  StyledAdminNavigationSectionItemsInner,
} from '../_style';

import Icons from './_icons';
import NavigationSectionItem from './NavigationSectionItem';

export default function NavigationSection(props) {
  const { id, title, icon, href, active, open, items, onClick, onOpenerClick, onItemClick } = props;

  let component = 'a';
  if (href) component = RouterLink;
  if (active) component = 'span';

  const handleClick = event => {
    if (!active && onClick) onClick({ id, event });
  };

  const handlePointerClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (onOpenerClick) onOpenerClick({ id, event });
  };

  const handleItemClick = ({ id: itemId, event }) => {
    if (onItemClick) onItemClick({ id, itemId, event });
  };

  return (
    <StyledAdminNavigationSection {...addDataAttributes({ component: COMPONENTS.SECTION, id })} isActive={active}>
      <StyledAdminNavigationSectionMain as={component} to={href} onClick={handleClick}>
        <StyledAdminNavigationSectionIcon>{icon && Icons[icon]}</StyledAdminNavigationSectionIcon>
        <StyledAdminNavigationSectionTitle>{title}</StyledAdminNavigationSectionTitle>
        {!!items?.length && (
          <StyledAdminNavigationSectionPointer onClick={handlePointerClick}>
            {open && <IconArrowDown size="xs" />}
            {!open && <IconArrowRight size="s" />}
          </StyledAdminNavigationSectionPointer>
        )}
      </StyledAdminNavigationSectionMain>
      {!!items?.length && open && (
        <StyledAdminNavigationSectionItems>
          <StyledAdminNavigationSectionItemsInner>
            {items.map(item => (
              <NavigationSectionItem key={item.id} {...item} onClick={handleItemClick} />
            ))}
          </StyledAdminNavigationSectionItemsInner>
        </StyledAdminNavigationSectionItems>
      )}
    </StyledAdminNavigationSection>
  );
}

NavigationSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  open: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      href: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
  onClick: PropTypes.func,
  onOpenerClick: PropTypes.func,
  onItemClick: PropTypes.func,
};

NavigationSection.defaultProps = {
  icon: null,
  href: null,
  active: false,
  open: null,
  items: null,
  onClick: null,
  onOpenerClick: null,
  onItemClick: null,
};
