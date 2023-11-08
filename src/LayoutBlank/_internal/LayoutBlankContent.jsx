import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledLayoutBlankContent } from '../_style';

export default function LayoutBlankContent(props) {
  const { children } = props;

  return (
    <StyledLayoutBlankContent {...addDataAttributes({ component: COMPONENTS.CONTENT })}>
      {children}
    </StyledLayoutBlankContent>
  );
}

LayoutBlankContent.propTypes = {
  children: PropTypes.node,
};

LayoutBlankContent.defaultProps = {
  children: null,
};
