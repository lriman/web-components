"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../_utils");var _GetIcon=require("../../GetIcon");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var getMoveWithIcon=function getMoveWithIcon(_ref){var parsedSan=_ref.parsedSan,color=_ref.color;var beforeSan=parsedSan.beforeSan,figureSan=parsedSan.figureSan,afterSan=parsedSan.afterSan;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,beforeSan,figureSan&&(0,_GetIcon.getCapturedIcon)(color,figureSan.toLowerCase(),'xs',{margin:'0 2px 3px 0'}),afterSan);};var GameNotationMove=function GameNotationMove(_ref2){var data=_ref2.data,gameSettings=_ref2.gameSettings;if(!data||!data.san)return null;var move=gameSettings!==null&&gameSettings!==void 0&&gameSettings.notationFull?(0,_utils.getFullNotation)(data):data;if(gameSettings!==null&&gameSettings!==void 0&&gameSettings.notationIcon&&move.parsedSan)return getMoveWithIcon(move);return move.san;};GameNotationMove.propTypes={data:_propTypes["default"].shape(),values:_propTypes["default"].shape()};GameNotationMove.defaultProps={data:undefined,values:undefined};var _default=GameNotationMove;exports["default"]=_default;