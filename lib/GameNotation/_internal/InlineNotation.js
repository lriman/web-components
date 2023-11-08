"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _Typography=require("../../Typography");var _IconSuccessFill=_interopRequireDefault(require("../../Icon/IconSuccessFill"));var _IconWarningFill=_interopRequireDefault(require("../../Icon/IconWarningFill"));var _colorContext=_interopRequireDefault(require("../../_context/colorContext"));var _TreeItems=_interopRequireDefault(require("./TreeItems"));var _GameNotationMove=_interopRequireDefault(require("./GameNotationMove"));var _constants=require("../_constants");var _utils=require("../../_utils");var _style=require("../_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function getMoveIcon(item){if(item.isSuccess)return/*#__PURE__*/_react["default"].createElement(_IconSuccessFill["default"],{color:"positive",size:"s"});if(item.isError)return/*#__PURE__*/_react["default"].createElement(_IconWarningFill["default"],{color:"negative",size:"s"});return null;}function getViewData(item,settings,active,colorType,onChangeMove){if(!item)return null;if(item.san==='...')return item.san;var handleChangeMove=function handleChangeMove(){if(onChangeMove)onChangeMove(item);};return/*#__PURE__*/_react["default"].createElement(_style.StyledInlineMove,{isActive:item.moveIdString===active,padding:item.moveIdString===active?'0 6px 0 2px':null,isPointer:!!onChangeMove,sColorType:colorType,onClick:handleChangeMove},/*#__PURE__*/_react["default"].createElement(_GameNotationMove["default"],{data:item,gameSettings:settings}),(item.isSuccess||item.isError)&&/*#__PURE__*/_react["default"].createElement(_style.StyledInlineMove,{sColorType:colorType,margin:"0 0 0 4px"},getMoveIcon(item)));}var InlineNotation=function InlineNotation(props){var notation=props.notation,settings=props.settings,active=props.active,onChangeMove=props.onChangeMove,onRemoveLine=props.onRemoveLine;var _useContext=(0,_react.useContext)(_colorContext["default"]),_useContext$colorType=_useContext.colorType,colorType=_useContext$colorType===void 0?'normal':_useContext$colorType;return/*#__PURE__*/_react["default"].createElement(_style.StyledInlineNotation,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.INLINE_NOTATION}),/*#__PURE__*/_react["default"].createElement(_style.StyledInlineNotationBody,{sColorType:colorType},notation.map(function(val,i){var _val$,_val$2;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,{key:((_val$=val[0])===null||_val$===void 0?void 0:_val$.id)||i},/*#__PURE__*/_react["default"].createElement(_style.StyledInlineMove,{sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_Typography.Span,{color:colorType==='normal'?'accent1':'minor'},(_val$2=val[0])===null||_val$2===void 0?void 0:_val$2.moveNum,"."),val[0]&&getViewData(val[0],settings,active,colorType,onChangeMove),val[1]&&getViewData(val[1],settings,active,colorType,onChangeMove)),/*#__PURE__*/_react["default"].createElement(_TreeItems["default"],{index:i,item:val[0],active:active,settings:settings,colorType:colorType,onChangeMove:onChangeMove,onRemoveLine:onRemoveLine}),/*#__PURE__*/_react["default"].createElement(_TreeItems["default"],{index:i,item:val[1],active:active,settings:settings,colorType:colorType,onChangeMove:onChangeMove,onRemoveLine:onRemoveLine}));})));};InlineNotation.propTypes={settings:_propTypes["default"].shape({}),notation:_propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].shape({}))).isRequired,active:_propTypes["default"].string,onChangeMove:_propTypes["default"].func,onRemoveLine:_propTypes["default"].func};InlineNotation.defaultProps={settings:undefined,active:undefined,onChangeMove:undefined,onRemoveLine:undefined};var _default=InlineNotation;exports["default"]=_default;