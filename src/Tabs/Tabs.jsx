import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledTabs, StyledTabsInner } from './_style';

import TabsItem from './_internal/TabsItem';

export default function Tabs(props) {
  const { items, onItemClick, isRouter } = props;

  return (
    <StyledTabs {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledTabsInner>
        {items.map(item => (
          <TabsItem
            key={item.id}
            id={item.id}
            title={item.title}
            route={item.route}
            active={item.active}
            onClick={onItemClick}
            isRouter={isRouter}
          />
        ))}
      </StyledTabsInner>
    </StyledTabs>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      route: PropTypes.string,
      active: PropTypes.bool,
    }),
  ).isRequired,
  onItemClick: PropTypes.func,
  isRouter: PropTypes.bool,
};

Tabs.defaultProps = {
  onItemClick: null,
  isRouter: false,
};
