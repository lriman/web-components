import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledListItem } from '../_style';

export default function ListItem(props) {
  const { children, ...rest } = props;

  return (
    <StyledListItem {...addDataAttributes({ component: COMPONENTS.ITEM })} {...rest}>
      {children}
    </StyledListItem>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
};

ListItem.defaultProps = {
  children: null,
};
