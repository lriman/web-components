"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getDisplay=getDisplay;exports.getSize=getSize;exports.getColor=getColor;var _constants=require("./_constants");function getDisplay(display){return _constants.STYLES.DISPLAY[display];}function getSize(size,mediaSize){return"".concat(_constants.STYLES.SIZES[mediaSize][size],"px");}function getColor(color){return _constants.STYLES.COLORS[color];}