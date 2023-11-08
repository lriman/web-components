import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import IconClose from '../../Icon/IconClose';

import { COMPONENTS, SECTION_REFS } from '../_constants';
import { StyledLayoutNavigation, StyledLayoutNavigationToggle } from '../_style';
import ColorContext from '../../_context/colorContext';
import { getColorType } from '../_utils';

export default function LayoutClose(props) {
  const { sectionType, onClose } = props;

  return (
    <StyledLayoutNavigation {...addDataAttributes({ component: COMPONENTS.CLOSE })}>
      <StyledLayoutNavigationToggle onClick={onClose}>
        <ColorContext.Provider value={{ colorType: getColorType(sectionType) }}>
          <IconClose />
        </ColorContext.Provider>
      </StyledLayoutNavigationToggle>
    </StyledLayoutNavigation>
  );
}

LayoutClose.propTypes = {
  sectionType: PropTypes.oneOf(Object.values(SECTION_REFS.TYPES)),
  onClose: PropTypes.func.isRequired,
};

LayoutClose.defaultProps = {
  sectionType: SECTION_REFS.TYPES.NORMAL,
};
