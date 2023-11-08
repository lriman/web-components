"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=getFormattedDate;var _moment=_interopRequireDefault(require("moment"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
 * Форматирование даты из формата ISO
 * @param {string} date - дата в формате ISO
 * @param {string} format - формат
 * @returns {string} - отформатированная дата
 */function getFormattedDate(date){var format=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'DD.MM.YYYY';return date&&(0,_moment["default"])(date).isValid()?(0,_moment["default"])(date).format(format):null;}getFormattedDate.withTime=function(date){return getFormattedDate(date,'DD.MM.YYYY HH:mm:ss');};/**
 * Форматирование даты в формат ISO
 * @param {string} date - дата в любом формате
 * @param {string} format - формат
 * @returns {string} - дата в формате ISO
 */getFormattedDate.ISO=function(date){var format=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'DD.MM.YYYY';return date&&(0,_moment["default"])(date,format).isValid()?(0,_moment["default"])(date,format).format():null;};/**
 * Получение текущей даты в формате ISO
 * @param {string} param - (start, end) - начало или конец дня
 * @returns {string} - текущая дата в формате ISO
 */getFormattedDate.today=function(param){var today=(0,_moment["default"])();if(param==='start')return today.startOf('day');if(param==='end')return today.endOf('day');return today;};getFormattedDate.moment=function(date){var format=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'DD.MM.YYYY';return date&&(0,_moment["default"])(date,format).isValid()?(0,_moment["default"])(date,format):null;};getFormattedDate.range=function(from,to){if(!from||!(0,_moment["default"])(from).isValid()||!to||!(0,_moment["default"])(to).isValid())return null;var fFrom=(0,_moment["default"])(from).format('D MMMM YYYY').split(' ');var fTo=(0,_moment["default"])(to).format('D MMMM YYYY').split(' ');if(fFrom[2]!==fTo[2])return"".concat(fFrom[0]," ").concat(fFrom[1]," ").concat(fFrom[2]," - ").concat(fTo[0]," ").concat(fTo[1]," ").concat(fTo[2]);if(fFrom[1]!==fTo[1])return"".concat(fFrom[0]," ").concat(fFrom[1]," - ").concat(fTo[0]," ").concat(fTo[1]," ").concat(fTo[2]);if(fFrom[0]!==fTo[0])return"".concat(fFrom[0]," - ").concat(fTo[0]," ").concat(fTo[1]," ").concat(fTo[2]);return"".concat(fTo[0]," ").concat(fTo[1]," ").concat(fTo[2]);};