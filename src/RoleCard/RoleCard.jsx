import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledRoleCard } from './_style';

export default function RoleCard(props) {
  const { children, role } = props;

  return (
    <StyledRoleCard {...addDataAttributes({ component: COMPONENTS.GENERAL })} sRole={role}>
      {children}
    </StyledRoleCard>
  );
}

RoleCard.propTypes = {
  children: PropTypes.node,
  role: PropTypes.oneOf(Object.values(REFS.ROLES)),
};

RoleCard.defaultProps = {
  children: null,
  role: REFS.ROLES.ADMIN,
};

RoleCard.REFS = REFS;
