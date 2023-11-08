import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, SECTION_REFS } from '../_constants';
import {
  StyledLayoutSectionBackgroundImage,
  StyledLayoutSectionBackgroundImageElement,
  StyledLayoutSectionBackgroundImagePlaceholder,
  StyledLayoutSectionBackgroundImageEffect,
} from '../_style';

export default function LayoutSectionBackgroundImage(props) {
  const { src, sectionType } = props;

  const [loaded, setIsLoaded] = useState(false);

  return (
    <StyledLayoutSectionBackgroundImage {...addDataAttributes({ component: COMPONENTS.SECTION_BACKGROUND_IMAGE })}>
      <LazyLoad>
        <StyledLayoutSectionBackgroundImageElement
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          src={src}
        />
        {loaded && <StyledLayoutSectionBackgroundImageEffect sSectionType={sectionType} />}
        {!loaded && <StyledLayoutSectionBackgroundImagePlaceholder sSectionType={sectionType} />}
      </LazyLoad>
    </StyledLayoutSectionBackgroundImage>
  );
}

LayoutSectionBackgroundImage.propTypes = {
  sectionType: PropTypes.oneOf(Object.values(SECTION_REFS.TYPES)).isRequired,
  src: PropTypes.string.isRequired,
};
