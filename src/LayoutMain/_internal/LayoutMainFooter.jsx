import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledLayoutMainFooter } from '../_style';

export default function LayoutMainFooter(props) {
  const { children } = props;

  return (
    <StyledLayoutMainFooter {...addDataAttributes({ component: COMPONENTS.FOOTER })}>{children}</StyledLayoutMainFooter>
  );
}

LayoutMainFooter.propTypes = {
  children: PropTypes.node,
};

LayoutMainFooter.defaultProps = {
  children: null,
};
