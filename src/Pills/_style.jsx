import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import {
  getBorderColor,
  getItemColor,
  getItemMargin,
  getItemFontSize,
  getItemPadding,
  getItemHeight,
  getItemBackgroundColor,
  getBackgroundColor,
  getPadding,
  getItemFontWeight,
} from './_utils';
import { StyledIconSvg } from '../Icon/_style';

export const StyledPills = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledPillsInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
  padding: ${({ sType }) => getPadding(sType)};
  white-space: ${({ noWrap }) => (noWrap ? 'nowrap' : 'normal')};
  border: 1px solid ${({ theme, sColorType, sType }) => getBorderColor(theme, sColorType, sType)};
  background: ${({ theme, sColorType, sType }) => getBackgroundColor(theme, sColorType, sType)};
  border-radius: 6px;
  width: fit-content;

  > div {
    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledPillsItem = styled.div`
  position: relative;
  box-sizing: border-box;
  font-weight: ${({ sType }) => getItemFontWeight(sType)};
  font-size: ${({ sType }) => getItemFontSize(sType, MEDIA_SIZES.S)};
  margin: ${getItemMargin(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    font-size: ${({ sType }) => getItemFontSize(sType, MEDIA_SIZES.M)};
    margin: ${getItemMargin(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${({ sType }) => getItemFontSize(sType, MEDIA_SIZES.L)};
    margin: ${getItemMargin(MEDIA_SIZES.L)};
  }
`;

export const StyledPillsItemInner = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: ${getItemPadding(MEDIA_SIZES.S)};
  height: ${getItemHeight(MEDIA_SIZES.S)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, sColorType, sType, isActive, isDisabled }) =>
    getItemColor(theme, sColorType, sType, isActive, isDisabled)};
  background: ${({ theme, sColorType, sType, isActive, isDisabled }) =>
    getItemBackgroundColor(theme, sColorType, sType, isActive, isDisabled)};
  cursor: ${props => (props.isActive || props.isDisabled ? 'default' : 'pointer')};
  border-radius: 6px;
  transition: all 0.3s ease;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, sType, isActive, isDisabled }) =>
      getItemColor(theme, sColorType, sType, isActive, isDisabled)};
  }

  > div {
    &:first-child {
      margin-right: 10px;
    }
  }

  &:hover {
    color: ${({ theme, sColorType, sType, isActive, isDisabled }) =>
      getItemColor(theme, sColorType, sType, isActive, isDisabled, true)};
    background: ${({ theme, sColorType, sType, isActive, isDisabled }) =>
      getItemBackgroundColor(theme, sColorType, sType, isActive, isDisabled, true)};

    ${StyledIconSvg} {
      fill: ${({ theme, sColorType, sType, isActive, isDisabled }) =>
        getItemColor(theme, sColorType, sType, isActive, isDisabled, true)};
    }
  }

  @media (${MEDIA.TABLET}) {
    padding: ${getItemPadding(MEDIA_SIZES.M)};
    height: ${getItemHeight(MEDIA_SIZES.L)};
  }

  @media (${MEDIA.DESKTOP}) {
    padding: ${getItemPadding(MEDIA_SIZES.L)};
    height: ${getItemHeight(MEDIA_SIZES.L)};
  }
`;
