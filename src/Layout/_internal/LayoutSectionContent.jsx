import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import {
  StyledLayoutSectionContent,
  StyledLayoutSectionContentInner,
  StyledLayoutSectionContentARWrapper,
  StyledLayoutSectionContentARInner,
} from '../_style';

export default function LayoutSectionContent(props) {
  const { aspectRatio, children } = props;

  return (
    <StyledLayoutSectionContent {...addDataAttributes({ component: COMPONENTS.SECTION_CONTENT })}>
      {aspectRatio && (
        <StyledLayoutSectionContentARWrapper sAspectRatio={aspectRatio}>
          <StyledLayoutSectionContentARInner>
            <StyledLayoutSectionContentInner>{children}</StyledLayoutSectionContentInner>
          </StyledLayoutSectionContentARInner>
        </StyledLayoutSectionContentARWrapper>
      )}
      {!aspectRatio && <StyledLayoutSectionContentInner>{children}</StyledLayoutSectionContentInner>}
    </StyledLayoutSectionContent>
  );
}

LayoutSectionContent.propTypes = {
  aspectRatio: PropTypes.number,
  children: PropTypes.node,
};

LayoutSectionContent.defaultProps = {
  aspectRatio: null,
  children: null,
};
