import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledLayoutMainContent } from '../_style';

export default function LayoutMainContent(props) {
  const { children } = props;

  return (
    <StyledLayoutMainContent {...addDataAttributes({ component: COMPONENTS.CONTENT })}>
      {children}
    </StyledLayoutMainContent>
  );
}

LayoutMainContent.propTypes = {
  children: PropTypes.node,
};

LayoutMainContent.defaultProps = {
  children: null,
};
