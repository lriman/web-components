import styled, { keyframes } from 'styled-components';

export const StyledImage = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledImageElement = styled.img`
  position: relative;
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const effectAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledImageEffect = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: ${({ sBackgroundColor }) => sBackgroundColor};
  animation: ${effectAnimation} 0.6s;
`;

export const StyledImagePlaceholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ sBackgroundColor }) => sBackgroundColor};
`;
