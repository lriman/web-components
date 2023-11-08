"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.StyledCard=void 0;var _styledComponents=_interopRequireDefault(require("styled-components"));var _utils=require("./_utils");var _templateObject;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledCard=_styledComponents["default"].div.attrs(function(_ref){var sStyle=_ref.sStyle;return{style:sStyle||{}};})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  vertical-align: middle;\n  display: ",";\n  margin: ",";\n  border: ",";\n  padding: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  background: ",";\n  height: ",";\n  width: ",";\n"])),function(props){return(0,_utils.getDisplay)(props.sDisplay);},function(props){return props.sMargin||0;},function(props){return props.sBorder||'none';},function(props){return props.sPadding||0;},function(props){return props.sBorderRadius||0;},function(props){return props.sBoxShadow||'none';},function(props){return props.sBackground||'none';},function(props){return props.sHeight||'auto';},function(props){return props.sWidth||'auto';});exports.StyledCard=StyledCard;