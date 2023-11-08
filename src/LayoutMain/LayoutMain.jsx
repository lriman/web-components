import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MEDIA_BREAKPOINTS } from '../_constants';
import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { LayoutMainContext } from './_context';
import { StyledLayoutMain } from './_style';

import LayoutMainSide from './_internal/LayoutMainSide';
import LayoutMainBody from './_internal/LayoutMainBody';
import LayoutMainHeader from './_internal/LayoutMainHeader';
import LayoutMainContent from './_internal/LayoutMainContent';
import LayoutMainFooter from './_internal/LayoutMainFooter';

export default function LayoutMain(props) {
  const { children } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth >= MEDIA_BREAKPOINTS.DESKTOP);

  const handleSideOpen = () => {
    setIsSideOpen(true);
  };

  const handleSideClose = () => {
    setIsSideOpen(false);
  };

  const handleResize = () => {
    if (windowWidth < MEDIA_BREAKPOINTS.DESKTOP && window.innerWidth >= MEDIA_BREAKPOINTS.DESKTOP && !isSideOpen) {
      handleSideOpen();
    }
    if (windowWidth >= MEDIA_BREAKPOINTS.DESKTOP && window.innerWidth < MEDIA_BREAKPOINTS.DESKTOP && isSideOpen) {
      handleSideClose();
    }
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <LayoutMainContext.Provider value={{ isSideOpen, handleSideOpen, handleSideClose }}>
      <StyledLayoutMain {...addDataAttributes({ component: COMPONENTS.GENERAL })}>{children}</StyledLayoutMain>
    </LayoutMainContext.Provider>
  );
}

LayoutMain.propTypes = {
  children: PropTypes.node,
};

LayoutMain.defaultProps = {
  children: null,
};

LayoutMain.Side = LayoutMainSide;
LayoutMain.Body = LayoutMainBody;
LayoutMain.Header = LayoutMainHeader;
LayoutMain.Content = LayoutMainContent;
LayoutMain.Footer = LayoutMainFooter;
