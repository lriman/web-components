"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=LayoutNavigation;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _colorContext=_interopRequireDefault(require("../../_context/colorContext"));var _IconClose=_interopRequireDefault(require("../../Icon/IconClose"));var _IconMenu=_interopRequireDefault(require("../../Icon/IconMenu"));var _constants=require("../_constants");var _utils2=require("../_utils");var _style=require("../_style");var _LayoutNavigationModal=_interopRequireDefault(require("./LayoutNavigationModal"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function LayoutNavigation(props){var sectionType=props.sectionType,homeRoute=props.homeRoute,language=props.language,menu=props.menu,links=props.links,children=props.children;var _useState=(0,_react.useState)(false),_useState2=_slicedToArray(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1];var handleToggle=function handleToggle(){document.querySelector('body').style.overflow=isOpen?'auto':'hidden';setIsOpen(!isOpen);};var handleClose=function handleClose(){setIsOpen(false);document.querySelector('body').style.overflow='auto';};(0,_react.useEffect)(function(){return function(){handleClose();};},[]);return/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutNavigation,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.NAVIGATION}),/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutNavigationToggle,{onClick:handleToggle},/*#__PURE__*/_react["default"].createElement(_colorContext["default"].Provider,{value:{colorType:isOpen?'inverse':(0,_utils2.getColorType)(sectionType)}},isOpen?/*#__PURE__*/_react["default"].createElement(_IconClose["default"],null):/*#__PURE__*/_react["default"].createElement(_IconMenu["default"],null))),/*#__PURE__*/_react["default"].createElement(_LayoutNavigationModal["default"],{isOpen:isOpen,homeRoute:homeRoute,menu:menu,links:links,handleClose:handleClose,language:language},children));}LayoutNavigation.propTypes={sectionType:_propTypes["default"].oneOf(Object.values(_constants.SECTION_REFS.TYPES)),homeRoute:_propTypes["default"].string,language:_propTypes["default"].oneOf(['en','ru']),menu:_propTypes["default"].arrayOf(_propTypes["default"].shape()).isRequired,links:_propTypes["default"].arrayOf(_propTypes["default"].shape()),children:_propTypes["default"].node};LayoutNavigation.defaultProps={sectionType:_constants.SECTION_REFS.TYPES.NORMAL,homeRoute:null,language:'en',links:null,children:null};