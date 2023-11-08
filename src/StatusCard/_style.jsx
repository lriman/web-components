import styled from 'styled-components';
import { getPadding, getBorderRadius, getStatusInfoBackgroundColor, getStatusInfoColor } from './_utils';

export const StyledStatusCard = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
`;

export const StyledStatusCardInner = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ sSize }) => getPadding(sSize)};
  border-radius: ${({ sSize }) => getBorderRadius(sSize)};
  color: ${({ theme, sColor }) => getStatusInfoColor(theme, sColor)};
  background: ${({ theme, sColor }) => getStatusInfoBackgroundColor(theme, sColor)};
`;

export const StyledStatusCardValue = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin-left: 8px;
`;
