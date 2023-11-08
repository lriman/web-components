import styled from 'styled-components';
import { MEDIA } from '../_constants';
import colors from '../_themes/colors';
import { StyledAccountAvatarInner } from '../Account/_style';

export const StyledTopPlayers = styled.div`
  display: flex;
  justify-content: ${({ isFull }) => (isFull ? 'space-between' : 'center')};
  align-content: flex-end;
  flex-wrap: nowrap;

  @media (${MEDIA.TABLET}) {
    justify-content: center;
  }
`;

export const StyledTopPlayer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  order: ${props => props.order};
  justify-content: flex-end;
  padding: 4px;

  @media (${MEDIA.TABLET}) {
    min-width: 200px;
  }
`;

export const StyledTopPlayersLeaderImage = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: none;

  @media (${MEDIA.DESKTOP}) {
    display: block;
    width: 352px;
    height: 258px;
    bottom: 80px;
  }
`;

export const StyledTopPlayerImage = styled.div`
  position: relative;
  margin-bottom: 20px;

  ${StyledAccountAvatarInner} {
    border: 4px solid ${colors.base.onBase.high};
  }
`;

export const StyledTopPlayerNameWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (${MEDIA.TABLET}) {
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTopPlayerName = styled.div`
  display: table-caption;

  @media (${MEDIA.TABLET}) {
    display: inline-block;
  }
`;

export const StyledTopPlayerFlag = styled.div`
  margin-left: 8px;
  display: inline-block;
`;

export const StyledTopPlayerPlace = styled.div`
  position: absolute;
  bottom: 13px;
  left: calc(50% - 14px);
`;

export const StyledPlaceText = styled.div`
  position: absolute;
  top: 3px;
  left: 10px;
  color: ${colors.base.onContrast.main};
  font-weight: 500;
  font-size: 14px;
`;

export const StyledPlaceFlag = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  height: 28px;
  border-radius: 3px;
  border-left: 14px solid ${props => props.bgColor};
  border-right: 14px solid ${props => props.bgColor};
  border-bottom: 6px solid transparent;
`;
