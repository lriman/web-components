import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledAdminLayout } from './_style';

import LayoutSide from './_internal/LayoutSide';
import LayoutContent from './_internal/LayoutContent';

export default function LayoutAdmin(props) {
  const { children } = props;

  return <StyledAdminLayout {...addDataAttributes({ component: COMPONENTS.GENERAL })}>{children}</StyledAdminLayout>;
}

LayoutAdmin.propTypes = {
  children: PropTypes.node,
};

LayoutAdmin.defaultProps = {
  children: null,
};

LayoutAdmin.Side = LayoutSide;
LayoutAdmin.SideBlock = LayoutSide.Block;
LayoutAdmin.Content = LayoutContent;
LayoutAdmin.ContentBlock = LayoutContent.Block;
