"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=IconPrimitive;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _constants=require("../_constants");var _style=require("../_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function IconPrimitive(props){var type=props.type,size=props.size,display=props.display,color=props.color,fill=props.fill,viewBox=props.viewBox,children=props.children,rest=_objectWithoutProperties(props,["type","size","display","color","fill","viewBox","children"]);return/*#__PURE__*/_react["default"].createElement(_style.StyledIcon,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL,type:type}),{sSize:size,sDisplay:display},rest),/*#__PURE__*/_react["default"].createElement(_style.StyledIconSvg,{viewBox:"0 0 ".concat(viewBox," ").concat(viewBox),focusable:"false",sColor:color,sFill:fill},children));}IconPrimitive.propTypes={type:_propTypes["default"].oneOf(Object.values(_constants.TYPES)),size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),display:_propTypes["default"].oneOf(Object.values(_constants.REFS.DISPLAY)),color:_propTypes["default"].string,fill:_propTypes["default"].string,viewBox:_propTypes["default"].number.isRequired,children:_propTypes["default"].node.isRequired};IconPrimitive.defaultProps={type:null,size:_constants.REFS.SIZES.M,display:_constants.REFS.DISPLAY.INLINE,color:_constants.REFS.COLORS.PRIMARY,fill:null};