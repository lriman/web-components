"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Country;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../_utils");var _Typography=require("../Typography");var _constants=require("./_constants");var _style=require("./_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function Country(props){var flag=props.flag,name=props.name,size=props.size,color=props.color,compact=props.compact;return/*#__PURE__*/_react["default"].createElement(_style.StyledCountry,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL}),/*#__PURE__*/_react["default"].createElement(_style.StyledCountryInner,null,flag&&/*#__PURE__*/_react["default"].createElement(_style.StyledCountryFlag,{sSize:size,title:name},/*#__PURE__*/_react["default"].createElement(_style.StyledCountryFlagImg,{src:flag})),name&&!compact&&/*#__PURE__*/_react["default"].createElement(_style.StyledCountryName,null,/*#__PURE__*/_react["default"].createElement(_Typography.Span,{color:color},name))));}Country.propTypes={size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),color:_propTypes["default"].oneOf(Object.values(_constants.REFS.COLORS)),flag:_propTypes["default"].string,name:_propTypes["default"].string,compact:_propTypes["default"].bool};Country.defaultProps={size:_constants.REFS.SIZES.M,color:_constants.REFS.COLORS.MINOR,flag:null,name:null,compact:false};Country.REFS=_constants.REFS;