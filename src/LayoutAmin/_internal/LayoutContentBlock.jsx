import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledAdminLayoutContentBlock } from '../_style';

export default function LayoutContentBlock(props) {
  const { isGrow, children } = props;

  return (
    <StyledAdminLayoutContentBlock {...addDataAttributes({ component: COMPONENTS.CONTENT_BLOCK })} isGrow={isGrow}>
      {children}
    </StyledAdminLayoutContentBlock>
  );
}

LayoutContentBlock.propTypes = {
  isGrow: PropTypes.bool,
  children: PropTypes.node,
};

LayoutContentBlock.defaultProps = {
  isGrow: null,
  children: null,
};
