import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../../_constants';
import { StyledIconSvg } from '../../Icon/_style';

import { STYLES } from './_constants';
import {
  getHeadingFontFamily,
  getHeadingFontWeight,
  getHeadingLineHeight,
  getHeadingFontSize,
  getTextAlign,
  getColor,
} from '../_utils';

export const StyledHeading = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 0;
  font-family: ${props => getHeadingFontFamily(props.sSize)};
  font-weight: ${props => getHeadingFontWeight(props.sSize)};
  line-height: ${props => getHeadingLineHeight(props.sSize)};
  margin: ${STYLES.MARGIN};
  letter-spacing: 0.01em;
  font-size: ${props => getHeadingFontSize(props.sSize, MEDIA_SIZES.S)};
  text-align: ${props => getTextAlign(props.sTextAlign)};
  color: ${({ theme, sColorType, sColor }) => getColor(theme, sColorType, sColor)};

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  @media (${MEDIA.TABLET}) {
    font-size: ${props => getHeadingFontSize(props.sSize, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${props => getHeadingFontSize(props.sSize, MEDIA_SIZES.L)};
  }

  ${StyledIconSvg} {
    ${({ theme, sColorType, sColor }) => sColor && `fill: ${getColor(theme, sColorType, sColor)}`};
  }
`;
