import styled from 'styled-components';

import { MEDIA_SIZES } from '../_constants';
import { StyledIcon } from '../Icon/_style';

import { getWidth, getHeight, getBadgeWidth, getBadgeHeight } from './_utils';

export const StyledIconWithBadge = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getWidth(MEDIA_SIZES.S, props.sSize)};
  height: ${props => getHeight(MEDIA_SIZES.S, props.sSize)};
  font-family: inherit;
  text-align: center;

  ${StyledIcon} {
    width: ${props => getWidth(MEDIA_SIZES.S, props.sSize)};
    height: ${props => getHeight(MEDIA_SIZES.S, props.sSize)};
  }
`;

export const StyledIconWithBadgeItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIconWithBadgeInner = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  width: ${props => getBadgeWidth(MEDIA_SIZES.S, props.sSize)};
  height: ${props => getBadgeHeight(MEDIA_SIZES.S, props.sSize)};
  z-index: 1;

  ${StyledIcon} {
    width: ${props => getBadgeWidth(MEDIA_SIZES.S, props.sSize)};
    height: ${props => getBadgeHeight(MEDIA_SIZES.S, props.sSize)};
  }
`;
