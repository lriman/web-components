import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, BLOCK_REFS } from '../_constants';
import { StyledLayoutBlock } from '../_style';

export default function LayoutBlock(props) {
  const { grow, spacing, justify, proportional, withoutExtraLarge, children } = props;

  return (
    <StyledLayoutBlock
      {...addDataAttributes({ component: COMPONENTS.BlOCK })}
      sGrow={grow}
      sSpacing={spacing}
      sJustify={justify}
      sProportional={proportional}
      withoutExtraLarge={withoutExtraLarge}
    >
      {children}
    </StyledLayoutBlock>
  );
}

LayoutBlock.propTypes = {
  grow: PropTypes.bool,
  spacing: PropTypes.oneOf(Object.values(BLOCK_REFS.SPACING)),
  justify: PropTypes.oneOf(Object.values(BLOCK_REFS.JUSTIFY)),
  proportional: PropTypes.bool,
  children: PropTypes.node,
  withoutExtraLarge: PropTypes.bool,
};

LayoutBlock.defaultProps = {
  grow: false,
  spacing: BLOCK_REFS.SPACING.M,
  justify: BLOCK_REFS.JUSTIFY.START,
  proportional: false,
  children: null,
  withoutExtraLarge: false,
};

LayoutBlock.REFS = BLOCK_REFS;
