"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.StyledTournamentCardContentDescribe=exports.StyledTournamentCardContentTitle=exports.StyledTournamentCardContent=exports.StyledTournamentCardParticipantsExtra=exports.StyledTournamentCardParticipantsItem=exports.StyledTournamentCardParticipants=exports.StyledTournamentCardIconBoxItem=exports.StyledTournamentCardIconBox=exports.StyledTournamentCardCapDate=exports.StyledTournamentCardCapBadgeDot=exports.StyledTournamentCardCapBadge=exports.StyledTournamentCardCap=exports.StyledTournamentCardImageCustom=exports.StyledTournamentCardImageDefault=exports.StyledTournamentCard=void 0;var _styledComponents=_interopRequireDefault(require("styled-components"));var _constants=require("../_constants");var _utils=require("./_utils");var _style=require("../Icon/_style");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledTournamentCard=_styledComponents["default"].div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: column;\n  justify-content: ",";\n  color: ",";\n  background: ",";\n  width: ",";\n  height: ",";\n  padding: ",";\n  overflow: hidden;\n\n  "," {\n    fill: ",";\n  }\n"])),function(_ref){var sCompact=_ref.sCompact;return sCompact?'center':'flex-start';},function(_ref2){var theme=_ref2.theme,sColor=_ref2.sColor;return(0,_utils.getColor)(theme,sColor);},function(_ref3){var theme=_ref3.theme,sColor=_ref3.sColor,isAccented=_ref3.isAccented,sType=_ref3.sType;return(0,_utils.getTournamentCardBackgroundColor)(theme,sColor,isAccented,sType);},function(_ref4){var sSize=_ref4.sSize;return(0,_utils.getTournamentCardSizes)(sSize);},function(_ref5){var sSize=_ref5.sSize,sCompact=_ref5.sCompact;return(0,_utils.getTournamentCardSizes)(sSize,sCompact,true);},function(_ref6){var sSize=_ref6.sSize,sCompact=_ref6.sCompact;return(0,_utils.getTournamentCardPadding)(sSize,sCompact);},_style.StyledIconSvg,function(_ref7){var theme=_ref7.theme,sColor=_ref7.sColor;return(0,_utils.getColor)(theme,sColor);});exports.StyledTournamentCard=StyledTournamentCard;var StyledTournamentCardImageDefault=_styledComponents["default"].div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: absolute;\n  top: ",";\n  left: -15px;\n"])),function(_ref8){var isAccented=_ref8.isAccented;return isAccented?0:'20px';});exports.StyledTournamentCardImageDefault=StyledTournamentCardImageDefault;var StyledTournamentCardImageCustom=_styledComponents["default"].div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n"])));exports.StyledTournamentCardImageCustom=StyledTournamentCardImageCustom;var StyledTournamentCardCap=_styledComponents["default"].div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  position: ",";\n  box-sizing: border-box;\n  top: 0;\n  z-index: 1;\n"])),function(_ref9){var sCompact=_ref9.sCompact;return sCompact?'absolute':'relative';});exports.StyledTournamentCardCap=StyledTournamentCardCap;var StyledTournamentCardCapBadge=_styledComponents["default"].div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  letter-spacing: 3px;\n  padding: 6px 12px;\n  text-transform: uppercase;\n  color: ",";\n  background: ",";\n"])),function(_ref10){var theme=_ref10.theme,sStatus=_ref10.sStatus;return(0,_utils.getTournamentCardCapBadgeColor)(theme,sStatus);},function(_ref11){var theme=_ref11.theme,sStatus=_ref11.sStatus;return(0,_utils.getTournamentCardCapBadgeBackgroundColor)(theme,sStatus);});exports.StyledTournamentCardCapBadge=StyledTournamentCardCapBadge;var StyledTournamentCardCapBadgeDot=_styledComponents["default"].div(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 8px;\n  background: ",";\n"])),function(_ref12){var theme=_ref12.theme;return theme.tournamentCard.badge.dotBackgroundColor;});exports.StyledTournamentCardCapBadgeDot=StyledTournamentCardCapBadgeDot;var StyledTournamentCardCapDate=_styledComponents["default"].div(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  letter-spacing: 3px;\n"])));exports.StyledTournamentCardCapDate=StyledTournamentCardCapDate;var StyledTournamentCardIconBox=_styledComponents["default"].div(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n"])));exports.StyledTournamentCardIconBox=StyledTournamentCardIconBox;var StyledTournamentCardIconBoxItem=_styledComponents["default"].div(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 0.25px;\n  border-radius: 4px;\n  border: 8px solid ",";\n  background: ",";\n  height: ",";\n  width: ",";\n"])),function(_ref13){var theme=_ref13.theme,sColor=_ref13.sColor,isCustom=_ref13.isCustom;return(0,_utils.getTournamentCardIconBoxBorderColor)(theme,sColor,isCustom);},function(_ref14){var theme=_ref14.theme,sColor=_ref14.sColor,isCustom=_ref14.isCustom;return(0,_utils.getTournamentCardIconBoxBackgroundColor)(theme,sColor,isCustom);},function(_ref15){var sSize=_ref15.sSize;return(0,_utils.getTournamentCardIconBoxSizes)(sSize);},function(_ref16){var sSize=_ref16.sSize;return(0,_utils.getTournamentCardIconBoxSizes)(sSize);});exports.StyledTournamentCardIconBoxItem=StyledTournamentCardIconBoxItem;var StyledTournamentCardParticipants=_styledComponents["default"].div(_templateObject10||(_templateObject10=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n"])));exports.StyledTournamentCardParticipants=StyledTournamentCardParticipants;var StyledTournamentCardParticipantsItem=_styledComponents["default"].div(_templateObject11||(_templateObject11=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  margin: -4px;\n  border: 2px solid\n    ",";\n  border-radius: 50%;\n\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),function(_ref17){var theme=_ref17.theme,sColor=_ref17.sColor,isAccented=_ref17.isAccented;return(0,_utils.getTournamentCardParticipantsItemBorderColor)(theme,sColor,isAccented);},function(_ref18){var theme=_ref18.theme,sColor=_ref18.sColor;return(0,_utils.getTournamentCardBackgroundColor)(theme,sColor);});exports.StyledTournamentCardParticipantsItem=StyledTournamentCardParticipantsItem;var StyledTournamentCardParticipantsExtra=_styledComponents["default"].div(_templateObject12||(_templateObject12=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: ",";\n  background: ",";\n"])),function(_ref19){var theme=_ref19.theme;return theme.tournamentCard.participantsExtraColor;},function(_ref20){var theme=_ref20.theme;return theme.tournamentCard.participantsExtraBackgroundColor;});exports.StyledTournamentCardParticipantsExtra=StyledTournamentCardParticipantsExtra;var StyledTournamentCardContent=_styledComponents["default"].div(_templateObject13||(_templateObject13=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  margin: -10px 0 0;\n"])));exports.StyledTournamentCardContent=StyledTournamentCardContent;var StyledTournamentCardContentTitle=_styledComponents["default"].div(_templateObject14||(_templateObject14=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  margin: 32px 0 0;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: ",";\n\n  @media (",") {\n    height: ",";\n  }\n\n  @media (",") {\n    height: ",";\n  }\n"])),(0,_utils.getTitleHeight)(_constants.MEDIA_SIZES.S),_constants.MEDIA.TABLET,(0,_utils.getTitleHeight)(_constants.MEDIA_SIZES.M),_constants.MEDIA.DESKTOP,(0,_utils.getTitleHeight)(_constants.MEDIA_SIZES.L));exports.StyledTournamentCardContentTitle=StyledTournamentCardContentTitle;var StyledTournamentCardContentDescribe=_styledComponents["default"].div(_templateObject15||(_templateObject15=_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  height: 55px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));exports.StyledTournamentCardContentDescribe=StyledTournamentCardContentDescribe;