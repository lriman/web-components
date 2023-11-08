import styled from 'styled-components';
import { StyledIconSvg } from '../Icon/_style';

import { FONTS } from '../_constants';
import { V_ALIGN, ALIGN, STYLES } from './_constants';

const modalWindowPositioning = (vAlign, align) => {
  let justifyContent = 'center';
  let alignItems = 'center';

  switch (vAlign) {
    case V_ALIGN.TOP:
      alignItems = 'flex-start';
      break;
    case V_ALIGN.BOTTOM:
      alignItems = 'flex-end';
      break;
    case V_ALIGN.CENTER:
    default:
      alignItems = 'center';
  }

  switch (align) {
    case ALIGN.LEFT:
      justifyContent = 'flex-start';
      break;
    case ALIGN.RIGHT:
      justifyContent = 'flex-end';
      break;
    case ALIGN.CENTER:
    default:
      justifyContent = 'center';
  }
  return { justifyContent, alignItems };
};

const modalWindowSizes = () => {
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;

  const maxHeight = viewportHeight;
  const maxWidth = viewportWidth;

  return { maxHeight, maxWidth };
};

const modalWindowInnerStyle = (isFullWindow, sWindowHeight, sWindowWidth, sPadding) => {
  if (!isFullWindow) return {};
  return {
    height: sWindowHeight - sPadding,
    width: sWindowWidth - sPadding,
  };
};

export const StyledModalWindowFade = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${props => props.zIndex};
  background: ${STYLES.FADE_BACKGROUND_COLOR};
`;

export const StyledModalWindowWrap = styled.div.attrs(({ sVAlign, sAlign }) => ({
  style: modalWindowPositioning(sVAlign, sAlign),
}))`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${props => props.zIndex + 1};
`;

export const StyledModalWindow = styled.div.attrs(() => ({
  style: modalWindowSizes(),
}))`
  position: relative;
  box-sizing: border-box;
  display: block;
  opacity: ${props => (props.isMounted ? 1 : 0)};
  color: ${({ sColorType, theme }) => theme.modalWindow.colors[sColorType]};
  background: ${({ sColorType, theme }) => theme.modalWindow.backgroundColors[sColorType]};
  font-family: ${FONTS.PRIMARY};
  overflow: auto;
`;

export const StyledModalWindowClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 8px;
  z-index: 10;

  ${StyledIconSvg} {
    fill: ${({ sColorType, theme }) => theme.modalWindow.closeColors[sColorType]};
  }
`;

export const StyledModalWindowInner = styled.div.attrs(({ isFullWindow, sWindowHeight, sWindowWidth, sPadding }) => ({
  style: modalWindowInnerStyle(isFullWindow, sWindowHeight, sWindowWidth, sPadding),
}))`
  position: relative;
  box-sizing: border-box;
  display: block;
`;
