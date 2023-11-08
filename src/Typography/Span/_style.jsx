import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES, FONTS } from '../../_constants';
import { StyledIconSvg } from '../../Icon/_style';

import { getFontSize, getFontWeight, getFontStyle, getWhiteSpace, getColor } from '../_utils';

export const StyledSpan = styled.span`
  font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.S)};
  font-weight: ${props => getFontWeight(props.sWeight)};
  font-style: ${props => getFontStyle(props.isAccented)};
  white-space: ${props => getWhiteSpace(props.noWrap)};
  color: ${({ theme, sColorType, sColor }) => getColor(theme, sColorType, sColor)};
  font-family: ${props => (props.isDigital ? FONTS.MAJOR : 'inherit')};
  font-variant-numeric: ${props => (props.isDigital ? 'tabular-nums' : 'inherit')};

  @media (${MEDIA.TABLET}) {
    font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.L)};
  }

  ${StyledIconSvg} {
    ${({ theme, sColorType, sColor }) => sColor && `fill: ${getColor(theme, sColorType, sColor)}`};
  }
`;
