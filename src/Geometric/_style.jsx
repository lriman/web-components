import styled from 'styled-components';

import { getColor } from './_utils';

export const StyledGeometric = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

export const StyledGeometricSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  fill: ${({ theme, sColor }) => getColor(theme, sColor)};
`;
