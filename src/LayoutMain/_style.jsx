import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';
import { REFS as TYPOGRAPHY_REFS } from '../Typography/_constants';
import { getFontSize, getColor } from '../Typography/_utils';

import { STYLES } from './_constants';
import { getSideWidth, getSideBoxShadow, getBodyMarginLeft, getBlockPadding, getSideToggleDisplay } from './_utils';

export const StyledLayoutMain = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  min-width: ${STYLES.MIN_WIDTH};
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  background: ${({ theme }) => theme.layouts.main.backgroundColor};
  font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.S)};
  line-height: ${STYLES.LINE_HEIGHT};
  color: ${({ theme }) => getColor(theme, 'normal', TYPOGRAPHY_REFS.COLORS.PRIMARY)};

  @media (${MEDIA.TABLET}) {
    font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.L)};
  }
`;

export const StyledLayoutMainSide = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 2;
  width: ${props => getSideWidth(props.isSideOpen)};
  background: ${({ theme }) => theme.layouts.main.sideBackgroundColor};
  box-shadow: ${({ theme, isSideOpen }) => getSideBoxShadow(MEDIA_SIZES.S, theme, isSideOpen)};

  @media (${MEDIA.DESKTOP}) {
    box-shadow: ${({ theme, isSideOpen }) => getSideBoxShadow(MEDIA_SIZES.L, theme, isSideOpen)};
  }
`;

export const StyledLayoutMainSideInner = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  width: 100%;
`;

export const StyledLayoutMainBody = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.layouts.main.bodyBackgroundColor};
  z-index: 1;
  margin-left: ${props => getBodyMarginLeft(MEDIA_SIZES.S, props.isSideOpen)};

  @media (${MEDIA.DESKTOP}) {
    margin-left: ${props => getBodyMarginLeft(MEDIA_SIZES.L, props.isSideOpen)};
  }
`;

export const StyledLayoutMainBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: ${getBlockPadding(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    padding: ${getBlockPadding(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    padding: ${getBlockPadding(MEDIA_SIZES.L)};
  }
`;

export const StyledLayoutMainHeader = styled(StyledLayoutMainBlock)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 80px;
`;

export const StyledLayoutMainContent = styled(StyledLayoutMainBlock)`
  flex-grow: 1;
`;

export const StyledLayoutMainFooter = styled(StyledLayoutMainBlock)``;

export const StyledLayoutMainSideContent = styled(StyledLayoutMainBlock)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

export const StyledLayoutMainSideToggle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: ${props => getSideToggleDisplay(MEDIA_SIZES.S, props.isOnSide)};
  cursor: pointer;

  @media (${MEDIA.DESKTOP}) {
    display: ${props => getSideToggleDisplay(MEDIA_SIZES.L, props.isOnSide)};
  }
`;
