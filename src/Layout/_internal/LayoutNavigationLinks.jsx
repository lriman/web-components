import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledLayoutNavigationLinks } from '../_style';

import LayoutNavigationLinksItem from './LayoutNavigationLinksItem';

export default function LayoutNavigationLinks(props) {
  const { items, onItemClick } = props;

  return (
    <StyledLayoutNavigationLinks {...addDataAttributes({ component: COMPONENTS.NAVIGATION_LINKS })}>
      {items.map(item => (
        <LayoutNavigationLinksItem
          key={item.id}
          title={item.title}
          route={item.route}
          active={item.active}
          disabled={item.disabled}
          external={item.external}
          onClick={onItemClick}
        />
      ))}
    </StyledLayoutNavigationLinks>
  );
}

LayoutNavigationLinks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
