"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Calendar;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _rcCalendar=_interopRequireDefault(require("rc-calendar"));var _ru_RU=_interopRequireDefault(require("rc-calendar/lib/locale/ru_RU"));var _utils=require("../_utils");var _constants=require("./_constants");var _style=require("./_style");var _utils2=require("./_utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function Calendar(props){var value=props.value,_onSelect=props.onSelect,disabledDate=props.disabledDate;return/*#__PURE__*/_react["default"].createElement(_style.StyledCalendar,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL}),/*#__PURE__*/_react["default"].createElement(_rcCalendar["default"],{locale:_ru_RU["default"],showDateInput:false,prefixCls:"omay-ds-components-rc-calendar",defaultValue:(0,_utils2.convertMomentValue)(value),onSelect:function onSelect(params){return _onSelect((0,_utils2.convertMomentValue)(params));},disabledDate:disabledDate,showToday:false,renderFooter:null}));}Calendar.propTypes={};Calendar.defaultProps={};Calendar.propTypes={value:_propTypes["default"].string,onSelect:_propTypes["default"].func.isRequired,disabledDate:_propTypes["default"].func};Calendar.defaultProps={value:null,disabledDate:function disabledDate(){return false;}};