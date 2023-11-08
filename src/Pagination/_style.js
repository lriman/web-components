import styled from 'styled-components';
import { StyledIconSvg } from '../Icon/_style';
import { getPaginationItemColor } from './_utils';

export const StyledPagination = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const StyledPaginationInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

export const StyledPaginationItem = styled.div`
  position: relative;
  box-sizing: border-box;
  font-weight: ${({ isActive }) => isActive && 'bold'};
  color: ${({ theme, sColorType, isActive, isDisabled, isEllipsis }) =>
    getPaginationItemColor(theme, sColorType, isActive, isDisabled, isEllipsis)};
  cursor: ${({ isDisabled, isEllipsis }) => !(isDisabled || isEllipsis) && 'pointer'};
  padding: ${({ isButton, isEllipsis }) => (isButton || isEllipsis ? '6px 3px' : '6px 12px')};
  user-select: none;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, isActive, isDisabled, isEllipsis }) =>
      getPaginationItemColor(theme, sColorType, isActive, isDisabled, isEllipsis)};
  }

  &:hover {
    color: ${({ theme, sColorType, isActive, isDisabled, isEllipsis }) =>
      getPaginationItemColor(theme, sColorType, isActive, isDisabled, isEllipsis, true)};

    ${StyledIconSvg} {
      fill: ${({ theme, sColorType, isActive, isDisabled, isEllipsis }) =>
        getPaginationItemColor(theme, sColorType, isActive, isDisabled, isEllipsis, true)};
    }
  }
`;
