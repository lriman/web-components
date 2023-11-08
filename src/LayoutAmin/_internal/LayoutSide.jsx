import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledAdminLayoutSide, StyledAdminLayoutSideInner } from '../_style';

import LayoutSideBlock from './LayoutSideBlock';

export default function LayoutSide(props) {
  const { children } = props;

  return (
    <StyledAdminLayoutSide {...addDataAttributes({ component: COMPONENTS.SIDE })}>
      <StyledAdminLayoutSideInner>{children}</StyledAdminLayoutSideInner>
    </StyledAdminLayoutSide>
  );
}

LayoutSide.propTypes = {
  children: PropTypes.node,
};

LayoutSide.defaultProps = {
  children: null,
};

LayoutSide.Block = LayoutSideBlock;
