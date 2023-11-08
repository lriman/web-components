"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=IconSocialNetworkTwitch;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _constants=require("./_constants");var _IconPrimitive=_interopRequireDefault(require("./_internal/IconPrimitive"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function IconSocialNetworkTwitch(props){var type=_constants.TYPES.SOCIAL_NETWORK_TWITCH;return/*#__PURE__*/_react["default"].createElement(_IconPrimitive["default"],_extends({},props,{type:type,viewBox:24}),/*#__PURE__*/_react["default"].createElement("path",{d:"M4.25216,2 L21.3615,2 L21.3615,13.688 L16.3531,18.694 L12.5976,18.694 L10.0946,21.2 L7.58912,21.2 L7.58912,18.694 L3,18.694 L3,5.339 L4.25216,2 Z M5.92042,3.669 L5.92042,15.774 L9.6785,15.774 L9.6785,18.276 L12.1808,15.774 L16.7706,15.774 L19.6926,12.851 L19.6926,3.669 L5.92042,3.669 Z M10.5114,12.018 L10.5114,7.01 L12.1808,7.01 L12.1808,12.018 L10.5114,12.018 Z M15.1015,12.018 L15.1015,7.01 L16.7706,7.01 L16.7706,12.018 L15.1015,12.018 Z"}));}IconSocialNetworkTwitch.propTypes={size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES)),display:_propTypes["default"].oneOf(Object.values(_constants.REFS.DISPLAY)),color:_propTypes["default"].oneOf(Object.values(_constants.REFS.COLORS))};IconSocialNetworkTwitch.defaultProps={size:_constants.REFS.SIZES.M,display:_constants.REFS.DISPLAY.INLINE,color:_constants.REFS.COLORS.PRIMARY};IconSocialNetworkTwitch.REFS=_constants.REFS;