import styled from 'styled-components';

import '../_themes/style.css';
import { StyledIconSvg } from '../Icon/_style';

import {
  getNotificationStickerBackgroundColor,
  getNotificationStickerColor,
  getNotificationStickerIconColor,
} from './_utils';

export const StyledNotificationSticker = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  border-radius: 8px;
  padding: 16px;
  color: ${({ theme }) => getNotificationStickerColor(theme)};
  background: ${({ theme, sType }) => getNotificationStickerBackgroundColor(theme, sType)};
  box-shadow: ${({ theme }) => theme.notificationSticker.boxShadow};
`;

export const StyledNotificationStickerContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding-right: ${props => (props.isClosable ? 16 : 0)}px;
`;

export const StyledNotificationStickerContentIcon = styled.div`
  position: relative;
  box-sizing: border-box;

  ${StyledIconSvg} {
    fill: ${({ theme, sType }) => getNotificationStickerIconColor(theme, sType)};
  }
`;

export const StyledNotificationStickerClose = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 0;
  cursor: pointer;
  padding: 8px;
  margin-top: 4px;
  margin-right: 4px;
  top: 0;

  ${StyledIconSvg} {
    fill: ${({ theme }) => theme.notificationSticker.closeIconColors.normal};
    transition: fill 0.32s ease-out;
  }

  :hover {
    ${StyledIconSvg} {
      fill: ${({ theme }) => theme.notificationSticker.closeIconColors.hover};
    }
  }
`;
