import styled from 'styled-components';
import { StyledLogo } from '../Logo/_style';

export const StyledQuiz = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
`;

export const StyledQuizLogo = styled(StyledLogo)`
  position: relative;
  box-sizing: border-box;
`;

export const StyledQuizLogoSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledQuizFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  & > div:first-child {
    margin-right: 4px;
  }
`;
