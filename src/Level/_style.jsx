import styled from 'styled-components';

export const StyledLevel = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledLevelMain = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledLevelTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const StyledLevelTrack = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  background: ${({ theme }) => theme.level.trackBackgroundColor};
  height: 8px;
  border-radius: 4px;
  transform: translateY(-50%);
  margin-top: 20px;
`;

export const StyledLevelTrackValue = styled.div.attrs(({ sWidth }) => ({
  style: { width: `${sWidth}%` },
}))`
  position: absolute;
  box-sizing: border-box;
  display: block;
  background: ${({ theme }) => theme.level.trackValueBackgroundColor};
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 100%;
`;

export const StyledLevelDescribe = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 16px 16px 0;
`;

export const StyledLevelItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledLevelItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 24px;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.level.levelItemBackgroundColor};
  border-radius: 6px;
  cursor: ${({ canClick }) => canClick && 'pointer'};
`;

export const StyledLevelItemValue = styled.div`
  position: relative;
  display: flex;
`;

export const StyledLevelItemPictures = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
`;

export const StyledLevelItemPicture = styled.img`
  height: 38px;
  width: 38px;
  margin-right: 5px;
`;

export const StyledLevelItemTrack = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  background: ${({ theme }) => theme.level.trackBackgroundColor};
  height: 4px;
  border-radius: 4px;
  transform: translateY(-50%);
  margin-top: 15px;
`;

export const StyledLevelItemTrackValue = styled.div.attrs(({ sWidth }) => ({
  style: { width: `${sWidth}%` },
}))`
  position: absolute;
  box-sizing: border-box;
  display: block;
  background: ${({ theme }) => theme.level.trackValueBackgroundColor};
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 100%;
`;
