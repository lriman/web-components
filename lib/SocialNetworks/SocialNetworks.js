"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=SocialNetworks;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../_utils");var _colorContext=_interopRequireDefault(require("../_context/colorContext"));var _IconSocialNetworkTwitter=_interopRequireDefault(require("../Icon/IconSocialNetworkTwitter"));var _IconSocialNetworkFacebook=_interopRequireDefault(require("../Icon/IconSocialNetworkFacebook"));var _IconSocialNetworkVk=_interopRequireDefault(require("../Icon/IconSocialNetworkVk"));var _IconSocialNetworkTwitch=_interopRequireDefault(require("../Icon/IconSocialNetworkTwitch"));var _IconSocialNetworkYoutube=_interopRequireDefault(require("../Icon/IconSocialNetworkYoutube"));var _IconSocialNetworkTelegram=_interopRequireDefault(require("../Icon/IconSocialNetworkTelegram"));var _IconSocialNetworkDiscord=_interopRequireDefault(require("../Icon/IconSocialNetworkDiscord"));var _SocialNetworksShare=_interopRequireDefault(require("./_internal/SocialNetworksShare"));var _constants=require("./_constants");var _style=require("./_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function SocialNetworks(props){var position=props.position,size=props.size;var _useContext=(0,_react.useContext)(_colorContext["default"]),_useContext$colorType=_useContext.colorType,colorType=_useContext$colorType===void 0?'normal':_useContext$colorType;return/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworks,(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL}),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksInner,{sPosition:position},/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.VK],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkVk["default"],{size:size})),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.FACEBOOK],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkFacebook["default"],{size:size})),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.TELEGRAM],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkTelegram["default"],{size:size})),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.TWITCH],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkTwitch["default"],{size:size})),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.TWITTER],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkTwitter["default"],{size:size})),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.YOUTUBE],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkYoutube["default"],{size:size})),/*#__PURE__*/_react["default"].createElement(_style.StyledSocialNetworksItem,{href:_constants.LINKS[_constants.REFS.SOCIAL_NETWORKS.DISCORD],sColorType:colorType},/*#__PURE__*/_react["default"].createElement(_IconSocialNetworkDiscord["default"],{size:size}))));}SocialNetworks.propTypes={position:_propTypes["default"].oneOf(Object.values(_constants.REFS.POSITION)),size:_propTypes["default"].oneOf(Object.values(_constants.REFS.SIZES))};SocialNetworks.defaultProps={position:_constants.REFS.POSITION.HORIZONTAL,size:_constants.REFS.SIZES.M};SocialNetworks.REFS=_constants.REFS;SocialNetworks.Share=_SocialNetworksShare["default"];