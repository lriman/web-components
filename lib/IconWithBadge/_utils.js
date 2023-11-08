"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getWidth=getWidth;exports.getHeight=getHeight;exports.getBadgeWidth=getBadgeWidth;exports.getBadgeHeight=getBadgeHeight;exports.getBadgeOffsetSize=getBadgeOffsetSize;var _constants=require("./_constants");function getWidth(mediaSize,size){return"".concat(_constants.STYLES.WIDTHS[mediaSize][size],"px");}function getHeight(mediaSize,size){return"".concat(_constants.STYLES.HEIGHTS[mediaSize][size],"px");}function getBadgeWidth(mediaSize,size){return"".concat(_constants.STYLES.BADGE_SIZES[mediaSize][size][0],"px");}function getBadgeHeight(mediaSize,size){return"".concat(_constants.STYLES.BADGE_SIZES[mediaSize][size][1],"px");}function getBadgeOffsetSize(size,index){return"".concat(_constants.STYLES.BADGE_OFFSET_SIZES[size][index],"px");}