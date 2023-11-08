import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import IconClose from '../../Icon/IconClose';
import IconMenu from '../../Icon/IconMenu';

import { COMPONENTS, SECTION_REFS } from '../_constants';
import { getColorType } from '../_utils';
import { StyledLayoutNavigation, StyledLayoutNavigationToggle } from '../_style';

import LayoutNavigationModal from './LayoutNavigationModal';

export default function LayoutNavigation(props) {
  const { sectionType, homeRoute, language, menu, links, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    document.querySelector('body').style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    document.querySelector('body').style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);

  return (
    <StyledLayoutNavigation {...addDataAttributes({ component: COMPONENTS.NAVIGATION })}>
      <StyledLayoutNavigationToggle onClick={handleToggle}>
        <ColorContext.Provider value={{ colorType: isOpen ? 'inverse' : getColorType(sectionType) }}>
          {isOpen ? <IconClose /> : <IconMenu />}
        </ColorContext.Provider>
      </StyledLayoutNavigationToggle>
      <LayoutNavigationModal
        isOpen={isOpen}
        homeRoute={homeRoute}
        menu={menu}
        links={links}
        handleClose={handleClose}
        language={language}
      >
        {children}
      </LayoutNavigationModal>
    </StyledLayoutNavigation>
  );
}

LayoutNavigation.propTypes = {
  sectionType: PropTypes.oneOf(Object.values(SECTION_REFS.TYPES)),
  homeRoute: PropTypes.string,
  language: PropTypes.oneOf(['en', 'ru']),
  menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape()),
  children: PropTypes.node,
};

LayoutNavigation.defaultProps = {
  sectionType: SECTION_REFS.TYPES.NORMAL,
  homeRoute: null,
  language: 'en',
  links: null,
  children: null,
};
