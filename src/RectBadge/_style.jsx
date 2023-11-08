import styled from 'styled-components';

import { getColor, getBackgroundColor, getRectSizes } from './utils';

export const StyledRectBadge = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, sColor }) => getColor(theme, sColor)};
  background: ${({ theme, sColor }) => getBackgroundColor(theme, sColor)};
  height: ${props => getRectSizes(props.sSize)};
  width: ${props => getRectSizes(props.sSize)};
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.25px;
`;
