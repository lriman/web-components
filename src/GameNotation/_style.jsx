import styled from 'styled-components';
import { StyledIconSvg } from '../IconChess/_style';
import { StyledIconSvg as StyledIconSvgI } from '../Icon/_style';
import { MEDIA } from '../_constants';

import {
  getCellBackgroundColor,
  getCellColor,
  getColumnLabelColor,
  getMoveBackgroundColor,
  getMoveColor,
  getScrollbarThumbColor,
  getScrollbarTrackColor,
  getTreeBackgroundColor,
  getTreeBorderColor,
  getInlineMoveBackgroundColor,
} from './_utils';

export const StyledGameNotation = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledGameNotationScroll = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme, sColorType }) => getScrollbarTrackColor(theme, sColorType)};

  ::-webkit-scrollbar {
    width: 8px;
    height: 3px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: ${({ theme, sColorType }) => getScrollbarTrackColor(theme, sColorType)};
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    border-radius: 8px;
    background-color: ${({ theme, sColorType }) => getScrollbarThumbColor(theme, sColorType)};
  }
  ::-webkit-scrollbar-corner {
    background-color: #999;
  }
  ::-webkit-resizer {
    background-color: #666;
  }
`;

export const StyledGameNotationBody = styled(StyledGameNotationScroll)`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 370px;
  padding: 0 5px;

  @media (${MEDIA.TABLET}) {
    padding: 0 20px 0 0;
  }

  @media (${MEDIA.DESKTOP}) {
    height: 0px;
  }
`;

export const StyledGameNotationRow = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ justify }) => justify};
  flex-wrap: nowrap;
`;

export const StyledGameNotationCell = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-basis: ${({ width }) => width}%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 14px;
  line-height: 20px;
  padding: ${({ cellPadding }) => cellPadding || '8px 16px'};
  color: ${({ theme, sColorType, isMoveNum, isActive, isBlocked }) =>
    getCellColor(theme, sColorType, isMoveNum, isActive, isBlocked)};
  background-color: ${({ theme, sColorType, isLeft, isRight, isNew, isActive, isBlocked }) =>
    getCellBackgroundColor(theme, sColorType, isLeft, isRight, isNew, isActive, isBlocked)};
  cursor: ${({ isBlocked, isLeft, isRight }) => !isBlocked && (isLeft || isRight) && 'pointer'};
  margin: 2px 4px;
  border-radius: 4px;

  :hover {
    color: ${({ theme, sColorType, isMoveNum, isActive, isBlocked }) =>
      getCellColor(theme, sColorType, isMoveNum, isActive, isBlocked, true)};
    background-color: ${({ theme, sColorType, isLeft, isRight, isNew, isActive, isBlocked }) =>
      getCellBackgroundColor(theme, sColorType, isLeft, isRight, isNew, isActive, isBlocked, true)};
  }
`;

export const StyledGameNotationColumnLabel = styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme, sColorType }) => getColumnLabelColor(theme, sColorType)};
`;

export const StyledGameNotationTreeLink = styled.a`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: ${({ isActive, theme, sColorType }) => getMoveColor(isActive, theme, sColorType)};
  background-color: ${({ isActive, theme, sColorType }) => getMoveBackgroundColor(isActive, theme, sColorType)};
  margin: ${({ sMargin }) => sMargin};
  padding: 3px;
  border-radius: 8px;
  cursor: pointer;

  ${StyledIconSvg} {
    fill: ${({ isActive, theme, sColorType }) => getMoveColor(isActive, theme, sColorType)};
  }

  :hover {
    color: ${({ isActive, theme, sColorType }) => getMoveColor(isActive, theme, sColorType, false, true)};
    background-color: ${({ isActive, theme, sColorType }) =>
      getMoveBackgroundColor(isActive, theme, sColorType, false, true)};

    ${StyledIconSvg} {
      fill: ${({ isActive, theme, sColorType }) => getMoveColor(isActive, theme, sColorType, true)};
    }
  }
`;

export const StyledMove = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline;
`;

export const StyledGameNotationTree = styled.div`
  box-sizing: border-box;
  position: relative;
  border-top: ${({ theme, sColorType }) => `1px solid ${getTreeBorderColor(theme, sColorType)}`};
  border-bottom: ${({ theme, sColorType }) => `1px solid ${getTreeBorderColor(theme, sColorType)}`};
  background-color: ${({ theme, sColorType }) => getTreeBackgroundColor(theme, sColorType)};
  padding: 5px 7px 5px 0;
  margin: 5px 0;
`;

export const StyledGameNotationTreeLineRemove = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  top: 6px;
  right: -7px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  z-index: 3;

  ${StyledIconSvgI} {
    fill: #cbcbd2;
  }

  :hover {
    ${StyledIconSvgI} {
      fill: #000000;
    }
  }
`;

export const StyledGameNotationTreeLine = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 10px 0px 10px 25px;

  :hover {
    > ${StyledGameNotationTreeLineRemove} {
      display: flex;
    }
  }
`;

export const StyledInlineNotation = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
`;

export const StyledInlineNotationBody = styled(StyledGameNotationScroll)`
  box-sizing: border-box;
  position: relative;
  height: 100%;

  @media (${MEDIA.TABLET}) {
    padding: 0 20px 0 0;
  }
`;

export const StyledInlineMove = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin: ${({ margin }) => margin || '0 4px'};
  padding: ${({ padding }) => padding || '0'};
  border-radius: 8px;
  background-color: ${({ theme, sColorType, isActive }) => getInlineMoveBackgroundColor(theme, sColorType, isActive)};
  cursor: ${({ isPointer }) => isPointer && 'pointer'};
`;
