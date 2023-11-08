import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS } from './_constants';
import { StyledEmpty, StyledEmptyImage, StyledEmptyMessage } from './_style';

export default function Empty(props) {
  const { children } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledEmpty {...addDataAttributes({ component: COMPONENTS.GENERAL })} sColorType={colorType}>
      <StyledEmptyImage />
      <StyledEmptyMessage>{children}</StyledEmptyMessage>
    </StyledEmpty>
  );
}

Empty.propTypes = {
  children: PropTypes.node.isRequired,
};
