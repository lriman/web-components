"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=LayoutHeader;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _Logo=_interopRequireDefault(require("../../Logo"));var _Link=_interopRequireDefault(require("../../Link"));var _Typography=require("../../Typography");var _Grid=_interopRequireWildcard(require("../../Grid"));var _constants=require("../_constants");var _style=require("../_style");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function LayoutHeader(props){var title=props.title,titleColor=props.titleColor,breadcrumbs=props.breadcrumbs,breadcrumbsColor=props.breadcrumbsColor,homeRoute=props.homeRoute,children=props.children;return/*#__PURE__*/_react["default"].createElement(_style.StyledLayoutHeader,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.HEADER}),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{justify:"spaceBetween",alignItems:"center",noWrap:true},/*#__PURE__*/_react["default"].createElement(_Grid.Item,{grow:true},!title&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,homeRoute&&/*#__PURE__*/_react["default"].createElement(_Link["default"],{isRouter:true,href:homeRoute,isBlock:true},/*#__PURE__*/_react["default"].createElement(_Logo["default"],null)),!homeRoute&&/*#__PURE__*/_react["default"].createElement(_Logo["default"],null)),title&&/*#__PURE__*/_react["default"].createElement(_Typography.H3,{color:titleColor},title),breadcrumbs&&/*#__PURE__*/_react["default"].createElement(_Typography.Block,{color:breadcrumbsColor},breadcrumbs.map(function(item,index){return/*#__PURE__*/_react["default"].createElement(_Typography.Span,{key:item.id},!!index&&'  /  ',/*#__PURE__*/_react["default"].createElement(_Link["default"],{isSecondary:breadcrumbsColor==='minor',isRouter:true,href:item.route},item.title));}),title&&/*#__PURE__*/_react["default"].createElement(_Typography.Span,null,'  /  ',title))),/*#__PURE__*/_react["default"].createElement(_Grid.Item,null,children)));}LayoutHeader.propTypes={title:_propTypes["default"].string,titleColor:_propTypes["default"].string,breadcrumbs:_propTypes["default"].arrayOf(_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,route:_propTypes["default"].string.isRequired,title:_propTypes["default"].string.isRequired})),breadcrumbsColor:_propTypes["default"].string,homeRoute:_propTypes["default"].string,children:_propTypes["default"].node};LayoutHeader.defaultProps={title:null,breadcrumbs:null,titleColor:'primary',breadcrumbsColor:'minor',homeRoute:null,children:null};