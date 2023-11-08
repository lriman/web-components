import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { LayoutMainContext } from '../_context';
import { StyledLayoutMainBody } from '../_style';

export default function LayoutMainBody(props) {
  const { children } = props;
  const { isSideOpen } = useContext(LayoutMainContext);

  return (
    <StyledLayoutMainBody {...addDataAttributes({ component: COMPONENTS.BODY })} isSideOpen={isSideOpen}>
      {children}
    </StyledLayoutMainBody>
  );
}

LayoutMainBody.propTypes = {
  children: PropTypes.node,
};

LayoutMainBody.defaultProps = {
  children: null,
};
