import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import Geometric from '../../Geometric';

import { COMPONENTS, SECTION_REFS } from '../_constants';
import { StyledLayoutSectionGeometric } from '../_style';

export default function LayoutSectionGeometric(props) {
  const { type } = props;

  return (
    <StyledLayoutSectionGeometric {...addDataAttributes({ component: COMPONENTS.SECTION_GEOMETRIC })} sType={type}>
      <Geometric type={type} />
    </StyledLayoutSectionGeometric>
  );
}

LayoutSectionGeometric.propTypes = {
  type: PropTypes.oneOf(Object.values(SECTION_REFS.GEOMETRIC)).isRequired,
};
