"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=TournamentCardIconBox;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _Typography=require("../../Typography");var _style=require("../_style");var _GetIcon=require("../../GetIcon");var _constants=require("../_constants");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var getTournamentIconSizes=function getTournamentIconSizes(size){switch(size){case _constants.REFS.SIZES.L:return'xl';default:return'xl';}};var getHeading=function getHeading(size,timeControl){switch(size){case _constants.REFS.SIZES.L:return/*#__PURE__*/_react["default"].createElement(_Typography.H4,null,timeControl);default:return/*#__PURE__*/_react["default"].createElement(_Typography.Span,{size:"xl",weight:"medium"},timeControl);}};function TournamentCardIconBox(props){var type=props.type,ratingType=props.ratingType,size=props.size,isCustom=props.isCustom,timeControl=props.timeControl;return/*#__PURE__*/_react["default"].createElement(_style.StyledTournamentCardIconBox,null,/*#__PURE__*/_react["default"].createElement(_style.StyledTournamentCardIconBoxItem,{sColor:ratingType,sSize:size,isCustom:isCustom},(0,_GetIcon.getTournamentIcon)(type,ratingType,getTournamentIconSizes(size)),/*#__PURE__*/_react["default"].createElement(_Typography.Block,{margin:"s"},getHeading(size,timeControl))));}TournamentCardIconBox.propTypes={type:_propTypes["default"].string.isRequired,size:_propTypes["default"].string.isRequired,isCustom:_propTypes["default"].bool.isRequired,ratingType:_propTypes["default"].string.isRequired,timeControl:_propTypes["default"].string.isRequired};