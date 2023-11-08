import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledImage, StyledImageElement, StyledImagePlaceholder, StyledImageEffect } from './_style';

export default function Image(props) {
  const { src, backgroundColor, style, imageStyle } = props;

  const [loaded, setIsLoaded] = useState(false);

  return (
    <StyledImage {...addDataAttributes({ component: COMPONENTS.GENERAL })} style={style}>
      <LazyLoad>
        <StyledImageElement
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          src={src}
          style={imageStyle}
        />
        {loaded && <StyledImageEffect sBackgroundColor={backgroundColor} />}
        {!loaded && <StyledImagePlaceholder sBackgroundColor={backgroundColor} />}
      </LazyLoad>
    </StyledImage>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  imageStyle: PropTypes.shape({}),
};

Image.defaultProps = {
  style: null,
  imageStyle: null,
};
