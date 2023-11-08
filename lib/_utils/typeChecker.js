"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=typeChecker;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var TYPES={STRING:'STRING',NUMBER:'NUMBER',BOOLEAN:'BOOLEAN',NULL:'NULL',OBJECT:'OBJECT',ARRAY:'ARRAY',FUNCTION:'FUNCTION',UNDEFINED:'UNDEFINED'};function typeChecker(value){if(typeChecker.isString(value)){return TYPES.STRING;}if(typeChecker.isNumber(value)){return TYPES.NUMBER;}if(typeChecker.isBoolean(value)){return TYPES.BOOLEAN;}if(typeChecker.isObject(value)){return TYPES.OBJECT;}if(typeChecker.isArray(value)){return TYPES.ARRAY;}if(typeChecker.isNull(value)){return TYPES.NULL;}if(typeChecker.isFunction(value)){return TYPES.FUNCTION;}return TYPES.UNDEFINED;}/**
 * @param value
 * @returns {boolean}
 */typeChecker.isNull=function(value){return value===null&&_typeof(value)==='object';};/**
 * @param value
 * @returns {boolean}
 */typeChecker.isArray=function(value){return Array.isArray(value);};/**
 * @param value
 * @returns {boolean}
 */typeChecker.isObject=function(value){return _typeof(value)==='object'&&!typeChecker.isNull(value)&&!typeChecker.isArray(value);};/**
 * Возвращает true если значение является `null`, или `undefined`, или пустыми объектом или массивом
 * @param value
 * @returns {boolean}
 */typeChecker.isEmpty=function(value){return typeChecker.isNull(value)||typeof value==='undefined'||typeChecker.isArray(value)&&value.length===0||typeChecker.isObject(value)&&Object.keys(value).length===0;};/**
 * @param value
 * @returns {boolean}
 */typeChecker.isFunction=function(value){return typeof value==='function';};/**
 * @param value
 * @returns {boolean}
 */typeChecker.isString=function(value){return typeof value==='string';};/**
 * @param value
 * @returns {boolean}
 */typeChecker.isNumber=function(value){return typeof value==='number'&&!Number.isNaN(value);};/**
 * @param value
 * @returns {boolean}
 */typeChecker.isBoolean=function(value){return typeof value==='boolean';};/**
 * Возвращает истину, если значение является простым типом
 * @param value
 * @returns {boolean}
 */typeChecker.isSimple=function(value){return typeChecker.isString(value)||typeChecker.isNumber(value)||typeChecker.isNumber(value)||typeChecker.isNull(value)||typeof value==='undefined';};typeChecker.TYPES=TYPES;