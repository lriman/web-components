import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, SIZES } from '../_constants';
import { StyledGridItem } from '../_style';

export default function GridItem(props) {
  const { size, tablet, desktop, grow, children } = props;

  if (!children) return null;

  return (
    <StyledGridItem
      {...addDataAttributes({ component: COMPONENTS.ITEM })}
      sSize={size}
      sTablet={tablet}
      sDesktop={desktop}
      isGrow={grow}
    >
      {children}
    </StyledGridItem>
  );
}

GridItem.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES)),
  tablet: PropTypes.oneOf(Object.values(SIZES)),
  desktop: PropTypes.oneOf(Object.values(SIZES)),
  grow: PropTypes.bool,
  children: PropTypes.node,
};

GridItem.defaultProps = {
  size: SIZES[0],
  tablet: null,
  desktop: null,
  grow: false,
  children: null,
};
