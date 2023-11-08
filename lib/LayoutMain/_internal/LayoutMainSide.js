"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=LayoutMainSide;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _IconSideClose=_interopRequireDefault(require("../../Icon/IconSideClose"));var _Logo=_interopRequireDefault(require("../../Logo"));var _Grid=_interopRequireWildcard(require("../../Grid"));var _constants=require("../_constants");var _context=require("../_context");var _style=require("../_style");var _utils2=require("../_utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function LayoutMainSide(props){var children=props.children;var node=(0,_react.useRef)(null);var _useContext=(0,_react.useContext)(_context.LayoutMainContext),isSideOpen=_useContext.isSideOpen,handleSideClose=_useContext.handleSideClose;var _useState=(0,_react.useState)(null),_useState2=_slicedToArray(_useState,2),width=_useState2[0],handleSetWidth=_useState2[1];var handleScroll=function handleScroll(){node.current.scrollTop=window.scrollY;};var handleResize=function handleResize(){handleSetWidth(window.innerWidth);};(0,_react.useEffect)(function(){handleResize();window.addEventListener('scroll',handleScroll);window.addEventListener('resize',handleResize);return function(){window.removeEventListener('scroll',handleScroll);window.removeEventListener('resize',handleResize);};});return/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutMainSide,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.SIDE}),{isSideOpen:isSideOpen,ref:node}),/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutMainSideInner,null,/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutMainHeader,null,/*#__PURE__*/_react["default"].createElement(_Grid["default"],{justify:(0,_utils2.getGridJustify)(width),alignItems:_Grid["default"].REFS.ALIGN_ITEMS.CENTER},/*#__PURE__*/_react["default"].createElement(_Grid.Item,null,/*#__PURE__*/_react["default"].createElement(_Logo["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid.Item,null,/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutMainSideToggle,{onClick:handleSideClose,isOnSide:true},/*#__PURE__*/_react["default"].createElement(_IconSideClose["default"],{size:_IconSideClose["default"].REFS.SIZES.XL}))))),/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutMainSideContent,null,children)));}LayoutMainSide.propTypes={children:_propTypes["default"].node};LayoutMainSide.defaultProps={children:null};