import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import Pattern from '../../Pattern';

import { COMPONENTS, SECTION_REFS, PATTERNS } from '../_constants';
import { StyledLayoutSectionPattern } from '../_style';

export default function LayoutSectionPattern(props) {
  const { type } = props;

  return (
    <StyledLayoutSectionPattern {...addDataAttributes({ component: COMPONENTS.SECTION_PATTERN })} sType={type}>
      <Pattern items={PATTERNS[type]} />
    </StyledLayoutSectionPattern>
  );
}

LayoutSectionPattern.propTypes = {
  type: PropTypes.oneOf(Object.values(SECTION_REFS.PATTERNS)).isRequired,
};
