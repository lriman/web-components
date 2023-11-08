import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getDisplay, getSize, getColor } from './_utils';

export const StyledIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  display: ${({ sDisplay }) => getDisplay(sDisplay)};
  height: ${({ sSize }) => getSize(sSize, MEDIA_SIZES.S)};
  width: ${({ sSize }) => getSize(sSize, MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    height: ${({ sSize }) => getSize(sSize, MEDIA_SIZES.M)};
    width: ${({ sSize }) => getSize(sSize, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${({ sSize }) => getSize(sSize, MEDIA_SIZES.L)};
    width: ${({ sSize }) => getSize(sSize, MEDIA_SIZES.L)};
  }
`;

export const StyledIconSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  fill: ${({ theme, sFill, sColorType, sColor }) => sFill || getColor(theme, sColorType, sColor)};
  transition: fill 0.32s ease-out;
`;
