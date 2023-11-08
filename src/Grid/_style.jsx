import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getJustify, getAlignItems, getSpacing, getItemWidth, getDirection } from './_utils';

export const StyledGridItem = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => getItemWidth(props.sSize, null, null, MEDIA_SIZES.S)};
  flex-grow: ${props => (props.isGrow ? 1 : 'initial')};

  @media (${MEDIA.TABLET}) {
    width: ${props => getItemWidth(props.sSize, props.sTablet, null, MEDIA_SIZES.S)};
  }

  @media (${MEDIA.DESKTOP}) {
    width: ${props => getItemWidth(props.sSize, props.sTablet, props.sDesktop, MEDIA_SIZES.S)};
  }
`;

export const StyledGrid = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => getDirection(props.sDirection)};
  flex-wrap: ${props => (props.sNoWrap ? 'nowrap' : 'wrap')};
  margin: -${props => getSpacing(props.sSpacing, MEDIA_SIZES.S)};
  justify-content: ${props => getJustify(props.sJustify)};
  align-items: ${props => getAlignItems(props.sAlignItems)};

  ${StyledGridItem} {
    padding: ${props => getSpacing(props.sSpacing, MEDIA_SIZES.S)};
  }

  @media (${MEDIA.TABLET}) {
    margin: -${props => getSpacing(props.sSpacing, MEDIA_SIZES.M)};

    & > ${StyledGridItem} {
      padding: ${props => getSpacing(props.sSpacing, MEDIA_SIZES.M)};
    }
  }

  @media (${MEDIA.DESKTOP}) {
    margin: -${props => getSpacing(props.sSpacing, MEDIA_SIZES.L)};

    & > ${StyledGridItem} {
      padding: ${props => getSpacing(props.sSpacing, MEDIA_SIZES.L)};
    }
  }
`;
