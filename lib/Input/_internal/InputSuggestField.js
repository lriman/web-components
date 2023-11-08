"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _colorContext=_interopRequireDefault(require("../../_context/colorContext"));var _Loader=_interopRequireDefault(require("../../Loader"));var _constants=require("../_constants");var _style=require("../_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}var InputSuggestField=/*#__PURE__*/(0,_react.forwardRef)(function(props,ref){var _useContext=(0,_react.useContext)(_colorContext["default"]),_useContext$colorType=_useContext.colorType,colorType=_useContext$colorType===void 0?'normal':_useContext$colorType;return/*#__PURE__*/_react["default"].createElement(_style.StyledInputWithIcon,_extends({},(0,_utils.addDataAttributes)({component:_constants.TYPES.SUGGEST}),{sWidth:props.width,sSize:props.size,onClick:props.onInputElementClick,isWithLabel:!!props.label}),/*#__PURE__*/_react["default"].createElement(props.inputElement,{ref:ref,id:props.id,value:props.value,label:props.label,type:props.type,placeholder:props.placeholder,maxLength:props.maxLength,size:props.size,textAlign:props.textAlign,isWarning:props.isWarning,isError:props.isError,disabled:props.disabled,onFocus:props.onInputElementFocus,onBlur:props.onInputElementBlur,onChange:props.onInputElementChange,format:props.format,isFocused:props.isFocused,setInputNode:props.setInputNode}),!props.disabled&&props.isSearching&&/*#__PURE__*/_react["default"].createElement(_style.StyledInputIcon,{sSize:props.size,sColorType:colorType,sType:props.type,onMouseDown:props.onIconElementMouseDown,onMouseUp:props.onIconElementMouseUp},/*#__PURE__*/_react["default"].createElement(_Loader["default"],{size:_Loader["default"].REFS.SIZES.S,display:_Loader["default"].REFS.DISPLAY.BLOCK})));});InputSuggestField.propTypes={inputElement:_propTypes["default"].func.isRequired,id:_propTypes["default"].string,value:_propTypes["default"].string,label:_propTypes["default"].node,placeholder:_propTypes["default"].string,maxLength:_propTypes["default"].number,size:_propTypes["default"].oneOf(Object.values(_constants.INPUT_REFS.SIZES)).isRequired,textAlign:_propTypes["default"].oneOf(Object.values(_constants.INPUT_REFS.TEXT_ALIGN)).isRequired,width:_propTypes["default"].oneOfType([_propTypes["default"].number,_propTypes["default"].string]).isRequired,type:_propTypes["default"].oneOf(Object.values(_constants.INPUT_REFS.TYPES)).isRequired,isFocused:_propTypes["default"].bool,isSearching:_propTypes["default"].bool,isCleanable:_propTypes["default"].bool,isWarning:_propTypes["default"].bool,isError:_propTypes["default"].bool,disabled:_propTypes["default"].bool,format:_propTypes["default"].func,onInputElementClick:_propTypes["default"].func.isRequired,onInputElementFocus:_propTypes["default"].func.isRequired,onInputElementBlur:_propTypes["default"].func.isRequired,onInputElementChange:_propTypes["default"].func.isRequired,onIconElementMouseDown:_propTypes["default"].func.isRequired,onIconElementMouseUp:_propTypes["default"].func.isRequired,setInputNode:_propTypes["default"].func};InputSuggestField.defaultProps={id:null,value:'',label:null,placeholder:null,maxLength:null,isFocused:false,isSearching:false,isCleanable:false,isWarning:false,isError:false,disabled:false,format:null,setInputNode:null};var _default=InputSuggestField;exports["default"]=_default;