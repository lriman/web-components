import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledAdminLayoutContent } from '../_style';

import LayoutContentBlock from './LayoutContentBlock';

export default function LayoutContent(props) {
  const { children } = props;

  return (
    <StyledAdminLayoutContent {...addDataAttributes({ component: COMPONENTS.CONTENT })}>
      {children}
    </StyledAdminLayoutContent>
  );
}

LayoutContent.propTypes = {
  children: PropTypes.node,
};

LayoutContent.defaultProps = {
  children: null,
};

LayoutContent.Block = LayoutContentBlock;
