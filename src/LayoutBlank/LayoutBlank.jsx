import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledLayoutBlank } from './_style';

import LayoutBlankBody from './_internal/LayoutBlankBody';
import LayoutBlankHeader from './_internal/LayoutBlankHeader';
import LayoutBlankContent from './_internal/LayoutBlankContent';

export default function LayoutBlank(props) {
  const { children } = props;
  return (
    <StyledLayoutBlank {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <LayoutBlankBody>
        <LayoutBlankHeader />
        <LayoutBlankContent>{children}</LayoutBlankContent>
      </LayoutBlankBody>
    </StyledLayoutBlank>
  );
}

LayoutBlank.propTypes = {
  children: PropTypes.node,
};

LayoutBlank.defaultProps = {
  children: null,
};
