"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.convertMomentValue=void 0;var _moment=_interopRequireDefault(require("moment"));var _ru=_interopRequireDefault(require("moment/locale/ru"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/* eslint-disable-line */_moment["default"].locale('ru');var convertMomentValue=function convertMomentValue(value){if(value===null)return null;if(typeof value==='string'){var momentValue=(0,_moment["default"])(value);return momentValue.isValid()?momentValue:null;}if(Array.isArray(value)){return value.map(function(date){var momentValue=(0,_moment["default"])(date);return momentValue.isValid()?momentValue.format():null;});}return value.isValid&&value.isValid()?value.format():null;};exports.convertMomentValue=convertMomentValue;