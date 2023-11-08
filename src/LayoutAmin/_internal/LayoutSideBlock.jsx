import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledAdminLayoutSideBlock } from '../_style';

export default function LayoutSideBlock(props) {
  const { isGrow, children } = props;

  return (
    <StyledAdminLayoutSideBlock {...addDataAttributes({ component: COMPONENTS.SIDE_BLOCK })} isGrow={isGrow}>
      {children}
    </StyledAdminLayoutSideBlock>
  );
}

LayoutSideBlock.propTypes = {
  isGrow: PropTypes.bool,
  children: PropTypes.node,
};

LayoutSideBlock.defaultProps = {
  isGrow: null,
  children: null,
};
