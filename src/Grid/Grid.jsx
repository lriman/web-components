import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledGrid } from './_style';

import GridItem from './_internal/GridItem';

export default function Grid(props) {
  const { justify, alignItems, direction, spacing, noWrap, children } = props;
  return (
    <StyledGrid
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      sJustify={justify}
      sAlignItems={alignItems}
      sDirection={direction}
      sSpacing={spacing}
      sNoWrap={noWrap}
    >
      {children}
    </StyledGrid>
  );
}

Grid.propTypes = {
  justify: PropTypes.oneOf(Object.values(REFS.JUSTIFY)),
  alignItems: PropTypes.oneOf(Object.values(REFS.ALIGN_ITEMS)),
  direction: PropTypes.oneOf(Object.values(REFS.DIRECTIONS)),
  spacing: PropTypes.oneOf(Object.values(REFS.SPACING)),
  noWrap: PropTypes.bool,
  children: PropTypes.node,
};

Grid.defaultProps = {
  justify: REFS.JUSTIFY.START,
  alignItems: REFS.ALIGN_ITEMS.START,
  direction: REFS.DIRECTIONS.ROW,
  spacing: REFS.SPACING.M,
  noWrap: false,
  children: null,
};

Grid.REFS = REFS;

Grid.Item = GridItem;
