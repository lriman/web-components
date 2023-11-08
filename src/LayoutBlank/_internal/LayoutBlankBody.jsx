import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledLayoutBlankBody } from '../_style';

export default function LayoutBlankBody(props) {
  const { children } = props;
  return (
    <StyledLayoutBlankBody {...addDataAttributes({ component: COMPONENTS.BODY })}>{children}</StyledLayoutBlankBody>
  );
}

LayoutBlankBody.propTypes = {
  children: PropTypes.node,
};

LayoutBlankBody.defaultProps = {
  children: null,
};
