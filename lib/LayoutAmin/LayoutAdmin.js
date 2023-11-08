"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=LayoutAdmin;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../_utils");var _constants=require("./_constants");var _style=require("./_style");var _LayoutSide=_interopRequireDefault(require("./_internal/LayoutSide"));var _LayoutContent=_interopRequireDefault(require("./_internal/LayoutContent"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function LayoutAdmin(props){var children=props.children;return/*#__PURE__*/_react["default"].createElement(_style.StyledAdminLayout,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL}),children);}LayoutAdmin.propTypes={children:_propTypes["default"].node};LayoutAdmin.defaultProps={children:null};LayoutAdmin.Side=_LayoutSide["default"];LayoutAdmin.SideBlock=_LayoutSide["default"].Block;LayoutAdmin.Content=_LayoutContent["default"];LayoutAdmin.ContentBlock=_LayoutContent["default"].Block;