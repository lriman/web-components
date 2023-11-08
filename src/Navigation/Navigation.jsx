import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledAdminNavigation, StyledAdminNavigationInner } from './_style';

import NavigationSection from './_internal/NavigationSection';

export default function Navigation(props) {
  const { list, onSectionClick, onSectionOpenerClick, onSectionItemClick } = props;

  return (
    <StyledAdminNavigation {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledAdminNavigationInner>
        {list.map(item => (
          <NavigationSection
            key={item.id}
            {...item}
            onClick={onSectionClick}
            onOpenerClick={onSectionOpenerClick}
            onItemClick={onSectionItemClick}
          />
        ))}
      </StyledAdminNavigationInner>
    </StyledAdminNavigation>
  );
}

Navigation.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  onSectionClick: PropTypes.func,
  onSectionOpenerClick: PropTypes.func,
  onSectionItemClick: PropTypes.func,
};

Navigation.defaultProps = {
  onSectionClick: null,
  onSectionOpenerClick: null,
  onSectionItemClick: null,
};
