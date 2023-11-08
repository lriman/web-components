import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';
import { StyledIcon, StyledIconSvg } from '../Icon/_style';

import {
  getDisplay,
  getWidth,
  getColor,
  getBackgroundColor,
  getBorder,
  getLineHeight,
  getPadding,
  getFontSize,
  getHeight,
  getOverlayBackgroundColor,
} from './_utils';

export const StyledButton = styled.div.attrs({ type: 'button' })`
  position: relative;
  box-sizing: border-box;
  display: ${props => getDisplay(props.sDisplay)};
  vertical-align: middle;
  max-width: 100%;
  font-family: inherit;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  overflow: ${({ sOverflow }) => sOverflow || 'hidden'};
  text-overflow: ellipsis;
  transition: all 0.32s ease-out;
  outline: 0 none;
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  width: ${props => getWidth(props.sWidth, props.sDisplay)};
  height: ${props => getHeight(MEDIA_SIZES.S, props.sSize)};
  color: ${props => getColor(props.sType, props.theme, props.sColorType, props.isDisabled, props.isActive)};
  background: ${props => getOverlayBackgroundColor(props.theme, props.sColorType, props.isDisabled)},
    ${props =>
      getBackgroundColor(props.sType, props.theme, props.sColorType, props.isDisabled, false, false, props.isActive)};
  border: ${props => getBorder(props.sType, props.theme, props.sColorType, props.isDisabled)};
  border-radius: 6px;
  line-height: ${props => getLineHeight(MEDIA_SIZES.S, props.sSize)};
  padding: ${props => getPadding(MEDIA_SIZES.S, props.sSize, props.sPadding)};
  font-size: ${props => getFontSize(MEDIA_SIZES.S, props.sSize)};

  ${StyledIcon} {
    margin: 0 8px;
    top: -1px;

    :first-child {
      margin-left: -2px;
    }

    :last-child {
      margin-right: -2px;
    }
  }

  ${StyledIconSvg} {
    fill: ${props => getColor(props.sType, props.theme, props.sColorType, props.isDisabled, props.isActive)};
    transition: fill 0.32s ease-out;
  }

  :hover {
    background: ${props => getOverlayBackgroundColor(props.theme, props.sColorType, props.isDisabled, false, true)},
      ${props => getBackgroundColor(props.sType, props.theme, props.sColorType, props.isDisabled, true)};
    border: ${props => getBorder(props.sType, props.theme, props.sColorType, props.isDisabled, true)};
    color: ${props => getColor(props.sType, props.theme, props.sColorType, props.isDisabled, props.isActive, true)};

    ${StyledIconSvg} {
      fill: ${props => getColor(props.sType, props.theme, props.sColorType, props.isDisabled, props.isActive, true)};
    }
  }

  :active {
    background: ${props => getOverlayBackgroundColor(props.theme, props.sColorType, props.isDisabled, true)},
      ${props => getBackgroundColor(props.sType, props.theme, props.sColorType, props.isDisabled, true, true)};
    border: ${props => getBorder(props.sType, props.theme, props.sColorType, props.isDisabled, true, true)};
    color: ${props =>
      getColor(props.sType, props.theme, props.sColorType, props.isDisabled, props.isActive, true, true)};

    ${StyledIconSvg} {
      fill: ${props =>
        getColor(props.sType, props.theme, props.sColorType, props.isDisabled, props.isActive, true, true)};
    }
  }

  @media (${MEDIA.TABLET}) {
    height: ${props => getHeight(MEDIA_SIZES.M, props.sSize)};
    line-height: ${props => getLineHeight(MEDIA_SIZES.M, props.sSize)};
    padding: ${props => getPadding(MEDIA_SIZES.M, props.sSize, props.sPadding)};
    font-size: ${props => getFontSize(MEDIA_SIZES.M, props.sSize)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getHeight(MEDIA_SIZES.L, props.sSize)};
    line-height: ${props => getLineHeight(MEDIA_SIZES.L, props.sSize)};
    padding: ${props => getPadding(MEDIA_SIZES.L, props.sSize, props.sPadding)};
    font-size: ${props => getFontSize(MEDIA_SIZES.L, props.sSize)};
  }
`;

export const StyledButtonInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  opacity: ${props => (props.isLoading ? 0 : 1)};
`;
