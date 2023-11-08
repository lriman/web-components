"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=LayoutSectionGeometric;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _Geometric=_interopRequireDefault(require("../../Geometric"));var _constants=require("../_constants");var _style=require("../_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function LayoutSectionGeometric(props){var type=props.type;return/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutSectionGeometric,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.SECTION_GEOMETRIC}),{sType:type}),/*#__PURE__*/_react["default"].createElement(_Geometric["default"],{type:type}));}LayoutSectionGeometric.propTypes={type:_propTypes["default"].oneOf(Object.values(_constants.SECTION_REFS.GEOMETRIC)).isRequired};