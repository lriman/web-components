import styled from 'styled-components';
import { StyledIconSvg } from '../Icon/_style';
import { getInnerColor, getInnerBackgroundColor, getSquareFrameSizes, getCardBackgroundColor } from './_utils';

export const StyledTournamentCardLite = styled.div`
  position: relative;
  box-sizing: border-box;
  background: ${({ theme, sColor, isInactive }) => getCardBackgroundColor(theme, sColor, isInactive)};
  height: ${props => getSquareFrameSizes(props.sSize)};
  width: ${props => getSquareFrameSizes(props.sSize)};
  padding: 4px;
  border-radius: 4px;
`;

export const StyledTournamentCardLiteInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.25px;
  color: ${({ theme, sColor, isInactive }) => getInnerColor(theme, sColor, isInactive)};
  background: ${({ theme, sColor, isInactive }) => getInnerBackgroundColor(theme, sColor, isInactive)};
  border-radius: 2px;

  ${StyledIconSvg} {
    fill: ${({ theme, sColor, isInactive }) => getInnerColor(theme, sColor, isInactive)};
  }
`;
