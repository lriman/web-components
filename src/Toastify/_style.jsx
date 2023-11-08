import styled, { keyframes } from 'styled-components';
import { MEDIA } from '../_constants';

const left = keyframes`
  0%  {
    opacity: 0;
    right: 300px;
  }
  100% {
    opacity: 1;
    right: 0;
  }
`;

const right = keyframes`
  0%  {
    opacity: 0;
    left: 300px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`;

const end = keyframes`
  0%  {
    opacity: 1;
  }
  100% {
    opacity: 0;
    height: 0;
    margin-bottom: 0;
  }
`;

export const StyledToastifyItem = styled.div`
  position: relative;
  width: 320px;
  margin: 0 0 16px;
  height: ${props => (props.sHeight !== null ? `${props.sHeight}px` : 'auto')};

  &.ds-toastify-item-m-left {
    right: 300px;
    animation: ${500}ms ease ${left} forwards;
  }

  &.ds-toastify-item-m-right {
    left: 300px;
    animation: ${500}ms ease ${right} forwards;
  }

  &.ds-toastify-item-s-removing {
    animation: ${500}ms ease ${end} forwards;
  }

  :last-child {
    margin-bottom: 0;
  }

  @media (${MEDIA.TABLET}) {
    width: 425px;
  }
`;

export const StyledToastify = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`;

export const StyledToastifyContainer = styled.div`
  position: fixed;
  z-index: 10001;
`;

export const StyledToastifyContainerTopCenter = styled(StyledToastifyContainer)`
  transform: translateX(-50%);
  top: 16px;
  left: 50%;
`;

export const StyledToastifyContainerBottomCenter = styled(StyledToastifyContainer)`
  transform: translateX(-50%);
  bottom: 16px;
  left: 50%;
`;

export const StyledToastifyContainerTopLeft = styled(StyledToastifyContainer)`
  top: 16px;
  left: 16px;
`;

export const StyledToastifyContainerTopRight = styled(StyledToastifyContainer)`
  top: 16px;
  right: 16px;
`;

export const StyledToastifyContainerBottomLeft = styled(StyledToastifyContainer)`
  bottom: 16px;
  left: 16px;
`;

export const StyledToastifyContainerBottomRight = styled(StyledToastifyContainer)`
  bottom: 16px;
  right: 16px;
`;

export const StyledToastifyContainerMobile = styled(StyledToastifyContainer)`
  right: 16px;
  left: 16px;

  ${StyledToastifyItem} {
    max-width: 100%;
    width: 100%;
  }
`;

export const StyledToastifyContainerMobileTop = styled(StyledToastifyContainerMobile)`
  top: 16px;
`;

export const StyledToastifyContainerMobileBottom = styled(StyledToastifyContainerMobile)`
  bottom: 16px;
`;

export const StyledToastifyItemContent = styled.div`
  box-sizing: border-box;
`;

export const StyledToastifyItemTitle = styled.div`
  box-sizing: border-box;
  font-weight: 500;
  color: ${({ theme }) => theme.toastify.titleColor};
`;

export const StyledToastifyItemMessage = styled.div`
  box-sizing: border-box;
  color: ${({ theme }) => theme.toastify.messageColor};
`;
