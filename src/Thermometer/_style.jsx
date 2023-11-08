import styled from 'styled-components';

import {
  getLineBadgeHeight,
  getLineTrackBackground,
  getThermometerBadgeBackground,
  getThermometerBadgeColor,
  getThermometerLineTickBorder,
} from './_utils';

export const StyledThermometer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
`;

export const StyledThermometerLineGraph = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${({ compact }) => (compact ? '10px' : '20px')};
  height: 100%;
`;

export const StyledThermometerLinePath = styled.div`
  position: absolute;
  box-sizing: border-box;
`;

export const StyledThermometerLineTrack = styled(StyledThermometerLinePath)`
  width: 100%;
  transition: height 0.5s ease-in-out;
  background: ${({ theme, sFinal, sValue }) => getLineTrackBackground(theme, sFinal, sValue)};
  height: 100%;
`;

export const StyledThermometerLineTick = styled(StyledThermometerLinePath)`
  height: ${props => props.sHeight}%;
  width: 100%;
  border-bottom: ${({ theme }) => getThermometerLineTickBorder(theme)};
`;

export const StyledThermometerBadge = styled.div`
  position: absolute;
  top: calc(${props => getLineBadgeHeight(props.sFinal, props.sValue)} - 12px);
  left: ${({ compact }) => (compact ? '-42px' : '-40px')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ compact }) => (compact ? '20px' : '24px')};
  min-width: ${({ compact }) => (compact ? '38px' : '45px')};
  font-weight: 700;
  font-size: ${({ compact }) => (compact ? '13px' : '14px')};
  padding: 0 3px;
  color: ${({ theme }) => getThermometerBadgeColor(theme)};
  background: ${({ theme, sFinal, sValue }) => getThermometerBadgeBackground(theme, sFinal, sValue)};
  transition: top 0.5s ease-in-out;
  will-change: top;
  border-radius: 2px 0 0 2px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    pointer-events: none;
    right: ${({ compact }) => (compact ? '-18px' : '-20px')};
    top: 0;
    border: ${({ compact }) => (compact ? '10px' : '12px')} solid transparent;
    border-left: 8px solid ${({ theme, sFinal, sValue }) => getThermometerBadgeBackground(theme, sFinal, sValue)};
  }
`;
