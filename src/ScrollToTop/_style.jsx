import styled from 'styled-components';

import { StyledIconSvg } from '../Icon/_style';

export const StyledScrollToTop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  bottom: 90px;
  right: 27px;
  width: 48px;
  height: 48px;
  background: #7575f9;
  border-radius: 6px;
  cursor: pointer;

  ${StyledIconSvg} {
    fill: #e1e2e3;
  }

  :hover {
    background: #5e5ede;
  }
`;
