import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../Popup';

import TooltipBox from './_internal/TooltipBox';
import TooltipOpener from './_internal/TooltipOpener';

export default function Tooltip(props) {
  const { children, isOpened, onOpen, onClose, isStopPropagation } = props;
  return (
    <Popup isOpened={isOpened} onOpen={onOpen} onClose={onClose} isStopPropagation={isStopPropagation}>
      {children}
    </Popup>
  );
}

Tooltip.propTypes = {
  isOpened: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isStopPropagation: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  isOpened: undefined,
  isStopPropagation: false,
  onOpen: () => null,
  onClose: () => null,
};

Tooltip.Box = TooltipBox;
Tooltip.Opener = TooltipOpener;
