import styled from 'styled-components';

import { getLineTrackWidth, getCircleTrackStrokeDasharray, getLineTrackHeight } from './_utils';

export const StyledProgress = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const StyledProgressValue = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font-variant-numeric: tabular-nums;
`;

export const StyledProgressLine = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const StyledProgressLineGraph = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-top: 2px;
  height: ${props => getLineTrackHeight(props.sHeight)};
`;

export const StyledProgressLinePath = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  height: 100%;
  background: ${({ theme }) => theme.progress.railColor};
`;

export const StyledProgressLineRail = styled(StyledProgressLinePath)`
  background: ${({ theme }) => theme.progress.railColor};
  width: 100%;
`;

export const StyledProgressLineTrack = styled(StyledProgressLinePath)`
  background: ${({ theme, sColor }) => theme.progress.trackColors[sColor]};
  width: ${props => getLineTrackWidth(props.sFinal, props.sValue)};
  transition: width 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
`;

export const StyledProgressCircle = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 116px;
  height: 116px;
  margin: 0 auto;

  ${StyledProgressValue} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const StyledProgressCircleSvg = styled.svg.attrs({
  transform: 'rotate(-90)',
  viewBox: '0 0 116 116',
})`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const StyledProgressCirclePath = styled.circle.attrs({
  cx: 58,
  cy: 58,
  r: 57,
  strokeLinecap: 'round',
  strokeWidth: 2,
  fillOpacity: 0,
})``;

export const StyledProgressCircleRail = styled(StyledProgressCirclePath).attrs(({ theme }) => ({
  stroke: theme.progress.railColor,
}))``;

export const StyledProgressCircleTrack = styled(StyledProgressCirclePath).attrs(
  ({ theme, sFinal, sValue, sColor }) => ({
    stroke: theme.progress.trackColors[sColor],
    strokeDashoffset: 0,
    strokeDasharray: getCircleTrackStrokeDasharray(sFinal, sValue),
  }),
)`
  transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s,
    stroke-width 0.06s ease 0.3s;
`;
