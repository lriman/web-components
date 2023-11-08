import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { H6 } from '../../Typography';

import { COMPONENTS, REFS } from '../_constants';
import { StyledNavigationLiteLink } from '../_style';

export default function NavigationLiteLink(props) {
  const { id, title, active, disabled, onClick } = props;

  const handleClick = () => {
    if (!active && !disabled) onClick({ id, type: REFS.ITEMS_TYPES.LINK });
  };

  return (
    <StyledNavigationLiteLink
      {...addDataAttributes({ component: COMPONENTS.LINK })}
      isActive={active}
      isDisabled={disabled}
      onClick={handleClick}
    >
      <H6>{title}</H6>
    </StyledNavigationLiteLink>
  );
}

NavigationLiteLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

NavigationLiteLink.defaultProps = {
  active: false,
  disabled: false,
};
