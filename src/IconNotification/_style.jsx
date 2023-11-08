import styled from 'styled-components';

import { MEDIA_SIZES } from '../_constants';
import { StyledIconSvg } from '../Icon/_style';

import { getWidth, getHeight, getBadgePosition } from './_utils';

export const StyledIconNotification = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getWidth(MEDIA_SIZES.S, props.sSize)};
  height: ${props => getHeight(MEDIA_SIZES.S, props.sSize)};
  font-family: inherit;
  text-align: center;
  outline: 0 none;

  ${StyledIconSvg} {
    width: ${props => getWidth(MEDIA_SIZES.S, props.sSize)};
    height: ${props => getHeight(MEDIA_SIZES.S, props.sSize)};
  }
`;

export const StyledIconNotificationItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIconNotificationInner = styled.div`
  position: absolute;
  bottom: -5px;
  left: ${({ sSize }) => getBadgePosition(sSize)};
`;
