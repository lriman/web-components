import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getWidth, getHeight, getRectFill } from './_utils';

export const StyledPattern = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${({ sWidth }) => getWidth(sWidth, MEDIA_SIZES.S)};
  height: ${({ sHeight }) => getHeight(sHeight, MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    width: ${({ sWidth }) => getWidth(sWidth, MEDIA_SIZES.M)};
    height: ${({ sHeight }) => getHeight(sHeight, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    width: ${({ sWidth }) => getWidth(sWidth, MEDIA_SIZES.L)};
    height: ${({ sHeight }) => getHeight(sHeight, MEDIA_SIZES.L)};
  }
`;

export const StyledPatternSvg = styled.svg`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
`;

export const StyledPatternRect = styled.rect`
  fill: ${({ theme, sColorType, sColors, sColor }) => getRectFill(theme, sColorType, sColors, sColor)};
`;
