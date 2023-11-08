"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=checkConstraints;exports.CONSTRAINTS_TYPES=void 0;var _typeChecker=_interopRequireDefault(require("./typeChecker"));var _getFormattedDate=_interopRequireDefault(require("./getFormattedDate"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _createForOfIteratorHelper(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=o[Symbol.iterator]();},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var CONSTRAINTS_TYPES={REQUIRED:'REQUIRED',ENUM:'ENUM',PATTERN:'PATTERN',INCLUDES:'INCLUDES',RANGE:'RANGE',YEAR_RANGE:'YEAR_RANGE',DATE_RANGE:'DATE_RANGE',EQUAL:'EQUAL'};exports.CONSTRAINTS_TYPES=CONSTRAINTS_TYPES;function checkConstraints(value,constraints,otherValues){if(!constraints)return null;var _iterator=_createForOfIteratorHelper(constraints),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var constrain=_step.value;if(constrain.type===CONSTRAINTS_TYPES.REQUIRED){if(_typeChecker["default"].isBoolean(value)&&!value)return constrain.message;if(_typeChecker["default"].isEmpty(value))return constrain.message;}if(constrain.type===CONSTRAINTS_TYPES.ENUM&&_typeChecker["default"].isEmpty(value))return constrain.message;if(constrain.type===CONSTRAINTS_TYPES.PATTERN){var regExp=new RegExp("^".concat(constrain.condition,"$"));if(value&&!regExp.test(value))return constrain.message;}if(constrain.type===CONSTRAINTS_TYPES.INCLUDES){var _regExp=new RegExp(constrain.condition);if(value&&!value.match(_regExp))return constrain.message;}if(constrain.type===CONSTRAINTS_TYPES.RANGE){var _constrain$condition=constrain.condition,min=_constrain$condition.min,max=_constrain$condition.max;if(value&&_typeChecker["default"].isNumber(min)&&value.length<min)return constrain.message;if(value&&_typeChecker["default"].isNumber(max)&&value.length>max)return constrain.message;}if(constrain.type===CONSTRAINTS_TYPES.DATE_RANGE){var _constrain$condition2=constrain.condition,_min=_constrain$condition2.min,_max=_constrain$condition2.max;var momentValue=_getFormattedDate["default"].moment(value);var today=_getFormattedDate["default"].today('start');var minDate=_typeChecker["default"].isNumber(_min)?today.clone().subtract(_min,'days'):null;var maxDate=_typeChecker["default"].isNumber(_max)?today.clone().subtract(_max,'days'):null;if(momentValue&&minDate&&momentValue.isAfter(minDate))return constrain.message;if(momentValue&&maxDate&&momentValue.isBefore(maxDate))return constrain.message;}if(constrain.type===CONSTRAINTS_TYPES.YEAR_RANGE){var _constrain$condition3=constrain.condition,_min2=_constrain$condition3.min,_max2=_constrain$condition3.max;var _momentValue=_getFormattedDate["default"].moment(value);var _today=_getFormattedDate["default"].today('start');var _minDate=_typeChecker["default"].isNumber(_min2)?_today.clone().subtract(_min2,'years'):null;var _maxDate=_typeChecker["default"].isNumber(_max2)?_today.clone().subtract(_max2,'years'):null;if(_momentValue&&_minDate&&_momentValue.isAfter(_minDate))return constrain.message;if(_momentValue&&_maxDate&&_momentValue.isBefore(_maxDate))return constrain.message;}if(constrain.type===CONSTRAINTS_TYPES.EQUAL){if(value&&value!==otherValues[constrain.condition])return constrain.message;}}}catch(err){_iterator.e(err);}finally{_iterator.f();}return null;}