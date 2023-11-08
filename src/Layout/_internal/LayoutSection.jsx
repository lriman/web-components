import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, SECTION_REFS } from '../_constants';
import { StyledLayoutSection } from '../_style';
import { getColorType } from '../_utils';

import LayoutSectionPattern from './LayoutSectionPattern';
import LayoutSectionBackgroundImage from './LayoutSectionBackgroundImage';
import LayoutSectionGeometric from './LayoutSectionGeometric';
import LayoutSectionContent from './LayoutSectionContent';

export default function LayoutSection(props) {
  const { type, transparent, grow, aspectRatio, pattern, geometric, backgroundImage, children } = props;

  return (
    <StyledLayoutSection
      {...addDataAttributes({ component: COMPONENTS.SECTION })}
      sType={type}
      sTransparent={transparent}
      sGrow={grow}
    >
      <ColorContext.Provider value={{ colorType: getColorType(type) }}>
        {pattern && <LayoutSectionPattern type={pattern} />}
        {backgroundImage && <LayoutSectionBackgroundImage sectionType={type} src={backgroundImage} />}
        {geometric && <LayoutSectionGeometric type={geometric} />}
        <LayoutSectionContent aspectRatio={aspectRatio}>{children}</LayoutSectionContent>
      </ColorContext.Provider>
    </StyledLayoutSection>
  );
}

LayoutSection.propTypes = {
  type: PropTypes.oneOf(Object.values(SECTION_REFS.TYPES)),
  transparent: PropTypes.bool,
  grow: PropTypes.bool,
  aspectRatio: PropTypes.number,
  pattern: PropTypes.oneOf(Object.values(SECTION_REFS.PATTERNS)),
  geometric: PropTypes.oneOf(Object.values(SECTION_REFS.GEOMETRIC)),
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
};

LayoutSection.defaultProps = {
  type: SECTION_REFS.TYPES.NORMAL,
  transparent: false,
  grow: false,
  aspectRatio: null,
  pattern: null,
  geometric: null,
  backgroundImage: null,
  children: null,
};
