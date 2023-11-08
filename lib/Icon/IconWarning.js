"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=IconWarning;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _constants=require("./_constants");var _IconPrimitive=_interopRequireDefault(require("./_internal/IconPrimitive"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function IconWarning(props){var type=_constants.TYPES.WARNING;return/*#__PURE__*/_react["default"].createElement(_IconPrimitive["default"],_extends({},props,{type:type,viewBox:16}),/*#__PURE__*/_react["default"].createElement("path",{d:"M9.024,2 L6.048,2 L6.544,9.312 L8.528,9.312 L9.024,2 Z M6.432,12.912 C6.731,13.189 7.099,13.328 7.536,13.328 C7.973,13.328 8.336,13.189 8.624,12.912 C8.923,12.624 9.072,12.277 9.072,11.872 C9.072,11.466 8.928,11.13 8.64,10.864 C8.352,10.586 7.984,10.448 7.536,10.448 C7.088,10.448 6.72,10.586 6.432,10.864 C6.144,11.13 6,11.466 6,11.872 C6,12.277 6.144,12.624 6.432,12.912 Z"}));}IconWarning.propTypes={size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),display:_propTypes["default"].oneOf(Object.values(_constants.REFS.DISPLAY)),color:_propTypes["default"].oneOf(Object.values(_constants.REFS.COLORS))};IconWarning.defaultProps={size:_constants.REFS.SIZES.M,display:_constants.REFS.DISPLAY.INLINE,color:_constants.REFS.COLORS.PRIMARY};IconWarning.REFS=_constants.REFS;