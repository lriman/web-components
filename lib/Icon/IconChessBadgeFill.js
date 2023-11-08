"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=IconChessBadgeFill;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _constants=require("./_constants");var _IconPrimitive=_interopRequireDefault(require("./_internal/IconPrimitive"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function IconChessBadgeFill(props){var type=_constants.TYPES.CHESS_BADGE_FILL;return/*#__PURE__*/_react["default"].createElement(_IconPrimitive["default"],_extends({},props,{type:type,viewBox:20}),/*#__PURE__*/_react["default"].createElement("path",{d:"M7.99906 0H11.9985V4.00005H7.99906V0Z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M7.99906 4.00005L4.00075 4.00067V8.00072H7.99906V11.9999H11.9985V8.00072H15.9962V4.00067H11.9968V7.99982H8.00019L7.99906 4.00005Z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M7.99906 11.9999L4.00075 12.0002V16.0002H7.99906V20H11.9985V16.0002H15.9962V12.0002H11.9968V16L7.99906 16.0002V11.9999Z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M3.99943 7.99982H0V11.9999L4.00075 12.0002L3.99943 7.99982Z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M16.0006 7.99982H20V11.9999H16.0006V7.99982Z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M7.99984 4.00073H12V7.99974H15.9974V12.0005H12V16.001H7.99984V12.0002H11.9972V8.00151H7.99984V4.00073Z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M3.99951 7.99974H7.99968L7.99984 12.0002L3.99951 12.0005V7.99974Z"}));}IconChessBadgeFill.propTypes={size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),display:_propTypes["default"].oneOf(Object.values(_constants.REFS.DISPLAY)),color:_propTypes["default"].oneOf(Object.values(_constants.REFS.COLORS))};IconChessBadgeFill.defaultProps={size:_constants.REFS.SIZES.M,display:_constants.REFS.DISPLAY.INLINE,color:_constants.REFS.COLORS.PRIMARY};IconChessBadgeFill.REFS=_constants.REFS;