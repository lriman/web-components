import styled from 'styled-components';
import {
  getHandleBackgroundColor,
  getHandleBorderColor,
  getRailBackgroundColor,
  getSliderDotStyles,
  getSliderMarkColor,
  getTooltipColor,
  getTrackBackgroundColor,
} from './utils';

export const StyledSlider = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const StyledSliderContent = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 4px;
`;

export const StyledSliderField = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 10px ${props => (props.isWithMarks ? '16px' : 0)} 10px;
`;

export const StyledSliderLite = styled.div`
  .rc-slider {
    position: relative;
    box-sizing: border-box;
    height: 20px;
    padding: 9px 0;
    width: 100%;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider-rail {
    position: absolute;
    bottom: 7px;
    width: 100%;
    background-color: ${({ sType, theme }) => getRailBackgroundColor(sType, theme)};
    height: 2px;
  }

  .rc-slider-track {
    position: absolute;
    left: 0;
    bottom: ${({ wideTrack }) => (wideTrack ? '4px' : '6px')};
    height: ${({ wideTrack }) => (wideTrack ? '8px' : '4px')};
    background-color: ${({ sType, theme }) => getTrackBackgroundColor(sType, theme)};
    border-radius: 4px;
    z-index: 1;
  }

  .rc-slider-handle {
    position: absolute;
    margin-left: 0;
    margin-top: -14px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 50%;
    border: solid 8px ${({ sType, theme }) => getHandleBorderColor(sType, theme)};
    background-color: ${({ sType, theme }) => getHandleBackgroundColor(sType, theme)};
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    transition: background-color 0.32s ease-out;
    z-index: 2;
  }

  .rc-slider-handle:focus {
    border: solid 8px ${({ sType, theme }) => getHandleBorderColor(sType, theme, true)};
    outline: none;
  }

  .rc-slider-handle-click-focused:focus {
    background-color: ${({ sType, theme }) => getHandleBackgroundColor(sType, theme, true, false)};
  }

  .rc-slider-handle:hover {
    border: solid 8px ${({ sType, theme }) => getHandleBorderColor(sType, theme, false, true)};
    background-color: ${({ sType, theme }) => getHandleBackgroundColor(sType, theme, false, true)};
  }

  .rc-slider-handle:active {
    cursor: pointer;
  }

  .rc-slider-mark {
    position: absolute;
    bottom: ${({ topMark }) => (topMark ? '45px' : '-13px')};
    left: 0;
    width: 100%;
    font-size: 13px;
    line-height: 16px;
  }

  .rc-slider-mark-text {
    position: absolute;
    display: block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: ${({ sType, theme, topMark }) => getSliderMarkColor(sType, theme, topMark)};
    white-space: nowrap;
  }

  .rc-slider-step {
    position: absolute;
    top: 8px;
    width: 100%;
    height: 6px;
    background: transparent;
  }

  .rc-slider-dot {
    ${({ sType, topMark, theme }) => getSliderDotStyles(sType, topMark, theme)}
  }

  .rc-slider-disabled {
    opacity: 0.5;
  }

  .rc-slider-disabled .rc-slider-handle {
    cursor: not-allowed !important;
  }

  .rc-slider-disabled .rc-slider-mark-text {
    cursor: default !important;
  }

  .rc-slider.m-compact .rc-slider-dot {
    opacity: 0;
  }
  .rc-slider.m-compact .rc-slider-dot:first-child,
  .rc-slider.m-compact .rc-slider-dot:last-child {
    opacity: 1;
  }

  .rc-slider.m-compact .rc-slider-mark-text {
    opacity: 0;
  }

  .rc-slider.m-compact .rc-slider-mark-text:first-child,
  .rc-slider.m-compact .rc-slider-mark-text:last-child {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .rc-slider-mark-text {
      opacity: 0;
    }
    .rc-slider-mark-text:first-child,
    .rc-slider-mark-text:last-child {
      opacity: 1;
    }
  }

  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
    100% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
  }
  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
  }
  .rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    z-index: ${({ zIndex }) => zIndex};
  }
  .rc-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip-hidden {
    display: none;
  }
  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }
  .rc-slider-tooltip-inner {
    font-family: Roboto;
    padding: 7px;
    min-width: 24px;
    font-weight: 500;
    height: 20px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: ${({ sType, theme }) => getTooltipColor(sType, theme)};
    text-align: center;
    text-decoration: none;
  }

  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    top: -4px;
    left: 50%;
  }
`;
