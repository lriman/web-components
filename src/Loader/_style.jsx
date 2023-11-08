import styled, { keyframes } from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getDisplay, getSize, getBorderWidth } from './_utils';

const loaderPositioning = isCentered => {
  if (isCentered) {
    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    };
  }
  return {
    position: 'relative',
  };
};

const rotate360 = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

export const StyledLoader = styled.div.attrs(({ isCentered }) => ({
  style: loaderPositioning(isCentered),
}))`
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

export const StyledLoaderIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: ${props => getBorderWidth(props.sSize, MEDIA_SIZES.S)} solid ${({ theme }) => theme.loader.colors.primary};
  border-left-color: ${({ theme }) => theme.loader.colors.secondary};
  border-top-color: ${({ theme }) => theme.loader.colors.secondary};
  border-radius: 50%;
  animation: ${rotate360} 1.2s linear infinite;

  @media (${MEDIA.TABLET}) {
    border-width: ${props => getBorderWidth(props.sSize, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    border-width: ${props => getBorderWidth(props.sSize, MEDIA_SIZES.L)};
  }
`;
