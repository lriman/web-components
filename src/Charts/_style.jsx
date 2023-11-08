import styled from 'styled-components';

export const StyledCharts = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: 320px;

  .recharts-cartesian-axis-tick {
    font-size: 12px;
    color: ${({ theme, sColorType }) => theme.charts[sColorType].color};
  }

  .recharts-cartesian-axis-line {
    stroke: ${({ theme, sColorType }) => theme.charts[sColorType].strokesColor};
  }
`;
