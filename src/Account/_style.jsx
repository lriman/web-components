import styled from 'styled-components';

import { StyledIconSvg } from '../Icon/_style';
import { MEDIA } from '../_constants';
import {
  getSize,
  getDisplay,
  getIconChessPosition,
  getIconChessDivSize,
  getAvatarBoxShadow,
  getIconFriendsDivSize,
  getIconFriendsPosition,
  getContentPaddingLeft,
} from './_utils';

export const StyledAccount = styled.div`
  position: relative;
  box-sizing: border-box;
  display: ${props => getDisplay(props.sDisplay)};
  color: ${({ theme, sColorType }) => theme.account[sColorType].color};
  max-width: 100%;
`;

export const StyledAccountInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media (${MEDIA.LARGE_PHONE}) {
    flex-flow: row nowrap;
    align-items: center;
  }
`;

export const StyledAccountContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  text-align: left;

  @media (${MEDIA.LARGE_PHONE}) {
    padding-left: ${({ sSize }) => getContentPaddingLeft(sSize)};
  }
`;

export const StyledAccountName = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding-bottom: 2px;
`;

export const StyledAccountFullName = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding-bottom: 2px;
`;

export const StyledAccountDescribe = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledAccountAvatar = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getSize(props.sSize)};
  height: ${props => getSize(props.sSize)};
`;

export const StyledAccountAvatarInner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getSize(props.sSize)};
  height: ${props => getSize(props.sSize)};
  color: ${({ theme, sColorType }) => theme.account[sColorType].avatar.color};
  background: ${({ theme, sColorType }) => theme.account[sColorType].avatar.backgroundColors.normal};
  border: 1px solid ${({ theme, sColorType }) => theme.account[sColorType].avatar.borderColor};
  box-shadow: ${({ theme, sColorType, isActive }) => getAvatarBoxShadow(theme, sColorType, isActive)};
  border-radius: 50%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  cursor: ${props => (props.isClickable ? 'pointer' : 'default')};

  :hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${({ theme, sColorType, isClickable }) =>
        isClickable && theme.account[sColorType].avatar.backgroundColors.hovered};
    }
  }
`;

export const StyledAccountAvatarImg = styled.img`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledAccountAvatarInitials = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledAccountAvatarChange = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 50%;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  background: ${({ theme, sColorType }) => theme.account[sColorType].avatar.change.backgroundColor};
  cursor: pointer;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType }) => theme.account[sColorType].avatar.change.color};
  }
`;

export const StyledAccountAvatarChessIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: ${props => getIconChessPosition(props.sSize)};
  right: ${props => getIconChessPosition(props.sSize)};
  width: ${props => getIconChessDivSize(props.sSize)};
  height: ${props => getIconChessDivSize(props.sSize)};
`;

export const StyledAccountAvatarFriendsIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: ${props => getIconFriendsPosition(props.sSize)};
  right: ${props => getIconFriendsPosition(props.sSize)};
  width: ${props => getIconFriendsDivSize(props.sSize)};
  height: ${props => getIconFriendsDivSize(props.sSize)};

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType }) => theme.account[sColorType].avatar.iconFriendsColor};
  }
`;

export const StyledAccountMenu = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 12px 0;
  min-width: 200px;
`;

export const StyledAccountMenuItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 12px 24px;
  font-family: inherit;
  font-size: inherit;
  word-wrap: break-word;
  cursor: pointer;
  transition: color 0.32s ease-out;
  text-decoration: none;
  color: ${({ theme, sColorType }) => theme.account[sColorType].menu.itemColors.normal};

  :hover {
    color: ${({ theme, sColorType }) => theme.account[sColorType].menu.itemColors.hovered};
  }
`;
