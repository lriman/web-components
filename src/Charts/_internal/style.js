import styled from 'styled-components';

export const StyledTooltip = styled.div`
  background-color: ${({ theme, sColorType }) => theme.charts[sColorType].tooltip.backgroundColor};
  border-radius: 6px;
  box-shadow: 0px 2px 16px ${({ theme, sColorType }) => theme.charts[sColorType].tooltip.boxShadow};
  padding: 10px 16px;
`;

export const StyledTooltipLabel = styled.div`
  margin-bottom: 12px;
`;

export const StyledTooltipDataItem = styled.div`
  color: ${({ sColor }) => sColor};
`;
