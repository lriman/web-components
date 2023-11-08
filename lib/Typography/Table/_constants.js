"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.STYLES=exports.CELL_REFS=exports.ROW_REFS=exports.REFS=exports.COMPONENTS=void 0;var _constants=require("../../_constants");var _constants2=require("../_constants");var _TABLE_CELL_BORDER_HO,_TABLE_CELL_BORDER_VE;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var COMPONENTS={GENERAL:'Table',ROW:'TableRow',CELL:'TableCell'};exports.COMPONENTS=COMPONENTS;var REFS={SIZES:_constants2.REFS.SIZES,SPACING:_constants2.REFS.SIZES,TEXT_ALIGN:_constants2.REFS.TEXT_ALIGN,COLORS:_constants2.REFS.COLORS,BORDER:{HORIZONTAL:'horizontal',VERTICAL:'vertical',EVERYWHERE:'everywhere'}};exports.REFS=REFS;var ROW_REFS={VERTICAL_ALIGN:_constants2.REFS.VERTICAL_ALIGN};exports.ROW_REFS=ROW_REFS;var CELL_REFS={TEXT_ALIGN:_constants2.REFS.TEXT_ALIGN};exports.CELL_REFS=CELL_REFS;var STYLES={FONT_FAMILY:_constants2.STYLES.PARAGRAPH_FONT_FAMILY,FONT_WEIGHT:_constants2.STYLES.PARAGRAPH_FONT_WEIGHT,LINE_HEIGHT:_constants2.STYLES.PARAGRAPH_LINE_HEIGHT,SIZES:_constants2.STYLES.SIZES,COLORS:_constants2.STYLES.COLORS,TABLE_CELL_BORDER_HORIZONTAL:(_TABLE_CELL_BORDER_HO={},_defineProperty(_TABLE_CELL_BORDER_HO,REFS.BORDER.HORIZONTAL,"1px solid ".concat(_constants.COLORS.PALE_BLUE)),_defineProperty(_TABLE_CELL_BORDER_HO,REFS.BORDER.VERTICAL,'none'),_defineProperty(_TABLE_CELL_BORDER_HO,REFS.BORDER.EVERYWHERE,"1px solid ".concat(_constants.COLORS.PALE_BLUE)),_TABLE_CELL_BORDER_HO),TABLE_CELL_BORDER_VERTICAL:(_TABLE_CELL_BORDER_VE={},_defineProperty(_TABLE_CELL_BORDER_VE,REFS.BORDER.HORIZONTAL,'none'),_defineProperty(_TABLE_CELL_BORDER_VE,REFS.BORDER.VERTICAL,"1px solid ".concat(_constants.COLORS.PALE_BLUE)),_defineProperty(_TABLE_CELL_BORDER_VE,REFS.BORDER.EVERYWHERE,"1px solid ".concat(_constants.COLORS.PALE_BLUE)),_TABLE_CELL_BORDER_VE)};exports.STYLES=STYLES;