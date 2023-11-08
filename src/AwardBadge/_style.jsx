import styled from 'styled-components';

export const StyledAwardBadge = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme }) => theme.awardBadge.color};
  background: ${({ theme, sType }) => theme.awardBadge.backgroundColors[sType].normal};
  height: 24px;
  line-height: 16px;
  border-radius: 12px;
  font-size: 13px;
  padding: 4px 8px;
`;
