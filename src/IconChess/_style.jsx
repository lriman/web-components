import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getDisplay, getSize } from './_utils';

export const StyledIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  display: ${props => getDisplay(props.sDisplay)};
  height: ${props => getSize(props.sSize, MEDIA_SIZES.S)};
  width: ${props => getSize(props.sSize, MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    height: ${props => getSize(props.sSize, MEDIA_SIZES.M)};
    width: ${props => getSize(props.sSize, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    height: ${props => getSize(props.sSize, MEDIA_SIZES.L)};
    width: ${props => getSize(props.sSize, MEDIA_SIZES.L)};
  }
`;

export const StyledIconSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  transition: fill 0.32s ease-out;
`;
