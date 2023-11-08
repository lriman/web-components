import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledLoader, StyledLoaderIcon } from './_style';

export default function Loader(props) {
  const { display, size, isCentered } = props;

  return (
    <StyledLoader
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      sDisplay={display}
      sSize={size}
      isCentered={isCentered}
    >
      <StyledLoaderIcon sSize={size} />
    </StyledLoader>
  );
}

Loader.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  isCentered: PropTypes.bool,
};

Loader.defaultProps = {
  display: REFS.DISPLAY.INLINE_BLOCK,
  size: REFS.SIZES.M,
  isCentered: false,
};

Loader.REFS = REFS;
