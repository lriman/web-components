import React from 'react';
import PropTypes from 'prop-types';

import { Opener } from '../../Popup';
import { OPENER_REFS } from '../_constants';

export default function TooltipOpener(props) {
  const { display, isNotAutoOpen, isOpenOnMouseOver, children } = props;

  return (
    <Opener display={display} isNotAutoOpen={isNotAutoOpen} isOpenOnMouseOver={isOpenOnMouseOver}>
      {children}
    </Opener>
  );
}

TooltipOpener.propTypes = {
  isNotAutoOpen: PropTypes.bool,
  isOpenOnMouseOver: PropTypes.bool,
  display: PropTypes.oneOf(Object.values(OPENER_REFS.DISPLAY)),
  children: PropTypes.element.isRequired,
};

TooltipOpener.defaultProps = {
  display: OPENER_REFS.DISPLAY.INLINE,
  isNotAutoOpen: false,
  isOpenOnMouseOver: false,
};

TooltipOpener.REFS = { ...OPENER_REFS };
