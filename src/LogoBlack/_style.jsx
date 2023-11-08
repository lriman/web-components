import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getHeight, getWidth, getColor } from './_utils';

export const StyledLogo = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  height: ${props => getHeight(props.sSize, MEDIA_SIZES.S)};
  width: ${props => getWidth(props.sSize, MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    height: ${props => getHeight(props.sSize, MEDIA_SIZES.M)};
    width: ${props => getWidth(props.sSize, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getHeight(props.sSize, MEDIA_SIZES.L)};
    width: ${props => getWidth(props.sSize, MEDIA_SIZES.L)};
  }
`;

export const StyledLogoSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  fill: ${props => getColor(props.isLight)};
`;
