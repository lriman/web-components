import styled from 'styled-components';
import { StyledIconSvg } from '../Icon/_style';
import { MEDIA } from '../_constants';
import { getGameTypeTimesBackgroundColor, getGameTypeTimesBorder, getGameTypeTimesColor } from './_utils';

export const StyledGameTypeTitle = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  color: ${({ theme, sType }) => theme.newGame.gameTypes.titleColor[sType]};
`;

export const StyledGameTypeTitleIcon = styled.div`
  margin-left: 9px;
  cursor: pointer;
`;

export const StyledGameTypeText = styled.div`
  box-sizing: border-box;
  position: relative;
  color: ${({ theme, sType }) => theme.newGame.gameTypes.textColor[sType]};
  padding: 10px;

  @media (${MEDIA.TABLET}) {
    max-width: 400px;
  }
`;

export const StyledGameTypeTime = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 72px;
  height: 72px;
  color: ${({ theme, isActive, sType }) => getGameTypeTimesColor(isActive, theme, sType)};
  border: ${({ theme, isActive, sType }) => getGameTypeTimesBorder(isActive, theme, sType)};
  background: ${({ theme, isActive, sType }) => getGameTypeTimesBackgroundColor(isActive, theme, sType)};
  box-shadow: ${({ theme }) => theme.newGame.gameTypes.gameTypeTimes.boxShadow};
  border-radius: 6px;
  cursor: pointer;
  user-select: none;

  ${StyledIconSvg} {
    fill: ${({ theme, isActive, sType }) => getGameTypeTimesColor(isActive, theme, sType)};
  }

  &:active {
    color: ${({ theme, isActive, sType }) => getGameTypeTimesColor(isActive, theme, sType, true, true)};
    border: ${({ theme, isActive, sType }) => getGameTypeTimesBorder(isActive, theme, sType, true, true)};
    background: ${({ theme, isActive, sType }) => getGameTypeTimesBackgroundColor(isActive, theme, sType, true, true)};

    ${StyledIconSvg} {
      fill: ${({ theme, isActive, sType }) => getGameTypeTimesColor(isActive, theme, sType, true, true)};
    }
  }
`;
