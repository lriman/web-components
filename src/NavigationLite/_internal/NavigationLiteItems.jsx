import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, REFS } from '../_constants';
import { StyledNavigationLiteItems } from '../_style';

import NavigationLiteSection from './NavigationLiteSection'; /* eslint-disable-line */
import NavigationLiteLink from './NavigationLiteLink';

export default function NavigationLiteItems(props) {
  const { items, onItemClick } = props;

  return (
    <StyledNavigationLiteItems {...addDataAttributes({ component: COMPONENTS.ITEMS })}>
      {items.map(item => {
        switch (item.type) {
          case REFS.ITEMS_TYPES.SECTION:
            return (
              <NavigationLiteSection
                key={item.id}
                id={item.id}
                items={item.items}
                title={item.title}
                opened={item.opened}
                onClick={onItemClick}
              />
            );
          case REFS.ITEMS_TYPES.LINK:
          default:
            return (
              <NavigationLiteLink
                key={item.id}
                id={item.id}
                title={item.title}
                active={item.active}
                disabled={item.disabled}
                onClick={onItemClick}
              />
            );
        }
      })}
    </StyledNavigationLiteItems>
  );
}

NavigationLiteItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
