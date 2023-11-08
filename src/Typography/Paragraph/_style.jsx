import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../../_constants';
import { StyledIconSvg } from '../../Icon/_style';

import { getFontSize, getTextAlign, getColor } from '../_utils';

import { StyledHeading } from '../Heading/_style';
import { STYLES } from './_constants';

export const StyledParagraph = styled.p`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 0;
  font-family: ${STYLES.FONT_FAMILY};
  font-weight: ${STYLES.FONT_WEIGHT};
  line-height: ${STYLES.LINE_HEIGHT};
  margin: ${STYLES.MARGIN};
  font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.S)};
  text-align: ${props => getTextAlign(props.sTextAlign)};
  color: ${({ theme, sColorType, sColor }) => getColor(theme, sColorType, sColor)};

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  ${StyledHeading} + & {
    margin-top: 0;
  }

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
