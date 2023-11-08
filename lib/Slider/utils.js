"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getTooltipColor=exports.getSliderDotStyles=exports.getSliderMarkColor=exports.getHandleBackgroundColor=exports.getHandleBorderColor=exports.getTrackBackgroundColor=exports.getRailBackgroundColor=void 0;var getRailBackgroundColor=function getRailBackgroundColor(sType,theme){return theme.slider[sType].railBackgroundColor;};exports.getRailBackgroundColor=getRailBackgroundColor;var getTrackBackgroundColor=function getTrackBackgroundColor(sType,theme){return theme.slider[sType].trackBackgroundColor;};exports.getTrackBackgroundColor=getTrackBackgroundColor;var getHandleBorderColor=function getHandleBorderColor(sType,theme,isFocused,isHovered){if(isFocused)return theme.slider[sType].handle.borderColor.focused;if(isHovered)return theme.slider[sType].handle.borderColor.hovered;return theme.slider[sType].handle.borderColor.normal;};exports.getHandleBorderColor=getHandleBorderColor;var getHandleBackgroundColor=function getHandleBackgroundColor(sType,theme,isFocused,isHovered){if(isFocused)return theme.slider[sType].handle.backgroundColors.focused;if(isHovered)return theme.slider[sType].handle.backgroundColors.hovered;return theme.slider[sType].handle.backgroundColors.normal;};exports.getHandleBackgroundColor=getHandleBackgroundColor;var getSliderMarkColor=function getSliderMarkColor(sType,theme,topMark){if(topMark)return theme.slider[sType].markColor.accent;return theme.slider[sType].markColor.normal;};exports.getSliderMarkColor=getSliderMarkColor;var getSliderDotStyles=function getSliderDotStyles(sType,topMark,theme){if(topMark)return"\n  position: absolute;    \n  bottom: -9px;\n  width: 2px;\n  height: 25px;\n  background-color: ".concat(theme.slider[sType].dotBackgroundColor.accent,";\n  z-index: 2;\n  ");return"\n  position: absolute;    \n  bottom: 0;\n  width: 4px;\n  height: 4px;\n  background-color: ".concat(theme.slider[sType].dotBackgroundColor.normal,";\n  border-radius: 50%;\n  z-index: 0;\n  ");};exports.getSliderDotStyles=getSliderDotStyles;var getTooltipColor=function getTooltipColor(sType,theme){return theme.slider[sType].tooltipColor;};exports.getTooltipColor=getTooltipColor;