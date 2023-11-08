"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports.StyledImagePlaceholder=exports.StyledImageEffect=exports.StyledImageElement=exports.StyledImage=void 0;var _styledComponents=_interopRequireWildcard(require("styled-components"));var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5;function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledImage=_styledComponents["default"].div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: block;\n"])));exports.StyledImage=StyledImage;var StyledImageElement=_styledComponents["default"].img(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n"])));exports.StyledImageElement=StyledImageElement;var effectAnimation=(0,_styledComponents.keyframes)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"])));var StyledImageEffect=_styledComponents["default"].div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  background: ",";\n  animation: "," 0.6s;\n"])),function(_ref){var sBackgroundColor=_ref.sBackgroundColor;return sBackgroundColor;},effectAnimation);exports.StyledImageEffect=StyledImageEffect;var StyledImagePlaceholder=_styledComponents["default"].div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: ",";\n"])),function(_ref2){var sBackgroundColor=_ref2.sBackgroundColor;return sBackgroundColor;});exports.StyledImagePlaceholder=StyledImagePlaceholder;