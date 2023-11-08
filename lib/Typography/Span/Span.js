"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Span;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _colorContext=_interopRequireDefault(require("../../_context/colorContext"));var _constants=require("./_constants");var _style=require("./_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function Span(props){var size=props.size,weight=props.weight,color=props.color,isAccented=props.isAccented,isDigital=props.isDigital,noWrap=props.noWrap,children=props.children,rest=_objectWithoutProperties(props,["size","weight","color","isAccented","isDigital","noWrap","children"]);var _useContext=(0,_react.useContext)(_colorContext["default"]),_useContext$colorType=_useContext.colorType,colorType=_useContext$colorType===void 0?'normal':_useContext$colorType;return/*#__PURE__*/_react["default"].createElement(_style.StyledSpan,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL,size:size}),{sSize:size,sWeight:weight,sColorType:colorType,sColor:color,isAccented:isAccented,isDigital:isDigital,noWrap:noWrap},rest),children);}Span.propTypes={size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),weight:_propTypes["default"].oneOf(Object.values(_constants.REFS.WEIGHTS)),color:_propTypes["default"].oneOf(Object.values(_constants.REFS.COLORS)),isAccented:_propTypes["default"].bool,isDigital:_propTypes["default"].bool,noWrap:_propTypes["default"].bool,children:_propTypes["default"].node.isRequired};Span.defaultProps={size:null,weight:null,color:null,isAccented:false,isDigital:false,noWrap:false};Span.REFS=_constants.REFS;