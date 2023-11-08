import styled from 'styled-components';
import { getTrackBackgroundColor } from './_utils';

export const StyledAchieves = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledAchievesTrack = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  background: ${({ theme, sWidth }) => getTrackBackgroundColor(theme, sWidth)};
  height: 8px;
  border-radius: 4px;
  transform: translateY(-50%);
`;

export const StyledAchievesTrackValue = styled.div.attrs(({ sWidth }) => ({
  style: { width: `${sWidth}%` },
}))`
  position: absolute;
  box-sizing: border-box;
  display: block;
  background: ${({ theme }) => theme.achieves.trackValueBackgroundColor};
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 100%;
`;

export const StyledAchievesItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const StyledAchievesItem = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  width: ${props => props.sWidth}%;
  color: ${({ theme }) => theme.achieves.itemColor};
`;

export const StyledAchievesItemValue = styled.div``;
