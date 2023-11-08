import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getBorderColor, getColor, getMargin, getFontSize, getPadding, getBorderBottom } from './_utils';

export const StyledTabs = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: ${getMargin(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    margin: ${getMargin(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    margin: ${getMargin(MEDIA_SIZES.L)};
  }
`;

export const StyledTabsInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap row;
`;

export const StyledTabsItem = styled.div`
  position: relative;
  box-sizing: border-box;
  font-weight: 500;
  font-size: ${getFontSize(MEDIA_SIZES.S)};
  padding: ${getPadding(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    font-size: ${getFontSize(MEDIA_SIZES.M)};
    padding: ${getPadding(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${getFontSize(MEDIA_SIZES.L)};
    padding: ${getPadding(MEDIA_SIZES.L)};
  }
`;

export const StyledTabsItemInner = styled.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  color: ${({ theme, sColorType, isActive }) => getColor(theme, sColorType, isActive)};
  transition: color 0.3s ease;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    height: 2px;
    width: 50%;
    background: ${({ theme, sColorType, isActive }) => getBorderColor(theme, sColorType, isActive)};
    bottom: ${getBorderBottom(MEDIA_SIZES.S)};
    transition: background 0.3s ease;

    @media (${MEDIA.TABLET}) {
      bottom: ${getBorderBottom(MEDIA_SIZES.M)};
    }

    @media (${MEDIA.DESKTOP}) {
      bottom: ${getBorderBottom(MEDIA_SIZES.L)};
    }
  }

  &:hover {
    color: ${({ theme, sColorType, isActive }) => getColor(theme, sColorType, isActive, true)};

    &:after {
      background: ${({ theme, sColorType, isActive }) => getBorderColor(theme, sColorType, isActive, true)};
    }
  }
`;
