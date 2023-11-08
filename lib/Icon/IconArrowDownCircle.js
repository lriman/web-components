"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=IconArrowDownCircle;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _constants=require("./_constants");var _IconPrimitive=_interopRequireDefault(require("./_internal/IconPrimitive"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function IconArrowDownCircle(props){var type=_constants.TYPES.ARROW_DOWN_CIRCLE;return/*#__PURE__*/_react["default"].createElement(_IconPrimitive["default"],_extends({},props,{type:type,viewBox:24}),/*#__PURE__*/_react["default"].createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.4987 12.1563C21.4124 17.4023 17.0897 21.5851 11.8437 21.4987C6.59775 21.4124 2.415 17.0897 2.50131 11.8437C2.58763 6.59775 6.91031 2.415 12.1563 2.50131C17.4023 2.58763 21.5851 6.91031 21.4987 12.1563ZM11.8273 22.4986C17.6255 22.594 22.4032 17.971 22.4986 12.1728C22.594 6.37455 17.971 1.59685 12.1728 1.50145C6.37455 1.40605 1.59685 6.02909 1.50145 11.8273C1.40605 17.6255 6.02909 22.4032 11.8273 22.4986ZM16.3738 10.8074L11.9492 15.0887L7.66786 10.6642L8.38651 9.96878L11.9725 13.6747L15.6784 10.0887L16.3738 10.8074Z"}));}IconArrowDownCircle.propTypes={size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),display:_propTypes["default"].oneOf(Object.values(_constants.REFS.DISPLAY)),color:_propTypes["default"].oneOf(Object.values(_constants.REFS.COLORS))};IconArrowDownCircle.defaultProps={size:_constants.REFS.SIZES.M,display:_constants.REFS.DISPLAY.INLINE,color:_constants.REFS.COLORS.PRIMARY};IconArrowDownCircle.REFS=_constants.REFS;