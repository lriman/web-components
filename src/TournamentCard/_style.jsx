import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';
import {
  getTitleHeight,
  getColor,
  getTournamentCardBackgroundColor,
  getTournamentCardIconBoxSizes,
  getTournamentCardSizes,
  getTournamentCardPadding,
  getTournamentCardCapBadgeColor,
  getTournamentCardCapBadgeBackgroundColor,
  getTournamentCardIconBoxBackgroundColor,
  getTournamentCardParticipantsItemBorderColor,
  getTournamentCardIconBoxBorderColor,
} from './_utils';

import { StyledIconSvg } from '../Icon/_style';

export const StyledTournamentCard = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: ${({ sCompact }) => (sCompact ? 'center' : 'flex-start')};
  color: ${({ theme, sColor }) => getColor(theme, sColor)};
  background: ${({ theme, sColor, isAccented, sType }) =>
    getTournamentCardBackgroundColor(theme, sColor, isAccented, sType)};
  width: ${({ sSize }) => getTournamentCardSizes(sSize)};
  height: ${({ sSize, sCompact }) => getTournamentCardSizes(sSize, sCompact, true)};
  padding: ${({ sSize, sCompact }) => getTournamentCardPadding(sSize, sCompact)};
  overflow: hidden;

  ${StyledIconSvg} {
    fill: ${({ theme, sColor }) => getColor(theme, sColor)};
  }
`;

export const StyledTournamentCardImageDefault = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: ${({ isAccented }) => (isAccented ? 0 : '20px')};
  left: -15px;
`;

export const StyledTournamentCardImageCustom = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
`;

export const StyledTournamentCardCap = styled.div`
  position: ${({ sCompact }) => (sCompact ? 'absolute' : 'relative')};
  box-sizing: border-box;
  top: 0;
  z-index: 1;
`;

export const StyledTournamentCardCapBadge = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  letter-spacing: 3px;
  padding: 6px 12px;
  text-transform: uppercase;
  color: ${({ theme, sStatus }) => getTournamentCardCapBadgeColor(theme, sStatus)};
  background: ${({ theme, sStatus }) => getTournamentCardCapBadgeBackgroundColor(theme, sStatus)};
`;

export const StyledTournamentCardCapBadgeDot = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${({ theme }) => theme.tournamentCard.badge.dotBackgroundColor};
`;

export const StyledTournamentCardCapDate = styled.div`
  position: relative;
  box-sizing: border-box;
  letter-spacing: 3px;
`;

export const StyledTournamentCardIconBox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const StyledTournamentCardIconBoxItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.25px;
  border-radius: 4px;
  border: 8px solid ${({ theme, sColor, isCustom }) => getTournamentCardIconBoxBorderColor(theme, sColor, isCustom)};
  background: ${({ theme, sColor, isCustom }) => getTournamentCardIconBoxBackgroundColor(theme, sColor, isCustom)};
  height: ${({ sSize }) => getTournamentCardIconBoxSizes(sSize)};
  width: ${({ sSize }) => getTournamentCardIconBoxSizes(sSize)};
`;

export const StyledTournamentCardParticipants = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const StyledTournamentCardParticipantsItem = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: -4px;
  border: 2px solid
    ${({ theme, sColor, isAccented }) => getTournamentCardParticipantsItemBorderColor(theme, sColor, isAccented)};
  border-radius: 50%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: ${({ theme, sColor }) => getTournamentCardBackgroundColor(theme, sColor)};
  }
`;

export const StyledTournamentCardParticipantsExtra = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.tournamentCard.participantsExtraColor};
  background: ${({ theme }) => theme.tournamentCard.participantsExtraBackgroundColor};
`;

export const StyledTournamentCardContent = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: -10px 0 0;
`;

export const StyledTournamentCardContentTitle = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 32px 0 0;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${getTitleHeight(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    height: ${getTitleHeight(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${getTitleHeight(MEDIA_SIZES.L)};
  }
`;

export const StyledTournamentCardContentDescribe = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 55px;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
