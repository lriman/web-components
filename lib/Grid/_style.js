"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.StyledGrid=exports.StyledGridItem=void 0;var _styledComponents=_interopRequireDefault(require("styled-components"));var _constants=require("../_constants");var _utils=require("./_utils");var _templateObject,_templateObject2;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledGridItem=_styledComponents["default"].div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  width: ",";\n  flex-grow: ",";\n\n  @media (",") {\n    width: ",";\n  }\n\n  @media (",") {\n    width: ",";\n  }\n"])),function(props){return(0,_utils.getItemWidth)(props.sSize,null,null,_constants.MEDIA_SIZES.S);},function(props){return props.isGrow?1:'initial';},_constants.MEDIA.TABLET,function(props){return(0,_utils.getItemWidth)(props.sSize,props.sTablet,null,_constants.MEDIA_SIZES.S);},_constants.MEDIA.DESKTOP,function(props){return(0,_utils.getItemWidth)(props.sSize,props.sTablet,props.sDesktop,_constants.MEDIA_SIZES.S);});exports.StyledGridItem=StyledGridItem;var StyledGrid=_styledComponents["default"].div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: ",";\n  flex-wrap: ",";\n  margin: -",";\n  justify-content: ",";\n  align-items: ",";\n\n  "," {\n    padding: ",";\n  }\n\n  @media (",") {\n    margin: -",";\n\n    & > "," {\n      padding: ",";\n    }\n  }\n\n  @media (",") {\n    margin: -",";\n\n    & > "," {\n      padding: ",";\n    }\n  }\n"])),function(props){return(0,_utils.getDirection)(props.sDirection);},function(props){return props.sNoWrap?'nowrap':'wrap';},function(props){return(0,_utils.getSpacing)(props.sSpacing,_constants.MEDIA_SIZES.S);},function(props){return(0,_utils.getJustify)(props.sJustify);},function(props){return(0,_utils.getAlignItems)(props.sAlignItems);},StyledGridItem,function(props){return(0,_utils.getSpacing)(props.sSpacing,_constants.MEDIA_SIZES.S);},_constants.MEDIA.TABLET,function(props){return(0,_utils.getSpacing)(props.sSpacing,_constants.MEDIA_SIZES.M);},StyledGridItem,function(props){return(0,_utils.getSpacing)(props.sSpacing,_constants.MEDIA_SIZES.M);},_constants.MEDIA.DESKTOP,function(props){return(0,_utils.getSpacing)(props.sSpacing,_constants.MEDIA_SIZES.L);},StyledGridItem,function(props){return(0,_utils.getSpacing)(props.sSpacing,_constants.MEDIA_SIZES.L);});exports.StyledGrid=StyledGrid;