"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _oldColors=_interopRequireDefault(require("../oldColors"));var _colors=_interopRequireDefault(require("../colors"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var _default={profile:{accountBorderColor:_oldColors["default"].white,userNameColor:_oldColors["default"].white,userRatingColor:_oldColors["default"].greyDark50,timerColor:{normal:_oldColors["default"].greyDark70,active:_oldColors["default"].white,littleTime:_colors["default"].accents.error.medium}},pgnViewer:{footerBorderColor:_oldColors["default"].white},settings:{gameIconColor:_oldColors["default"].purpleHigh,buttons:{color:{normal:_oldColors["default"].white,hovered:_oldColors["default"].purpleHigh}},modalWindow:{color:_oldColors["default"].white,saveBackground:'linear-gradient(360deg, #2D2E37 11.22%, rgba(45, 46, 55, 0) 100%)',scrollbar:{track:{backgroundColor:_oldColors["default"].transparent},thumb:{backgroundColor:_oldColors["default"].greyDark80}}}},actionPopup:{color:_oldColors["default"].white,backgroundColor:_oldColors["default"].purple,boxShadow:'0px 0px 53.0387px rgba(0, 0, 0, 0.75)',iconDotWithWaveColor:_oldColors["default"].purpleHigh},pawnPromotionModal:{backgroundColor:_oldColors["default"].white,boxShadow:'0px 0px 53.0387px rgba(0, 0, 0, 0.75)',figureBackgroundColor:{normal:_oldColors["default"].transparent,active:_colors["default"].brand.primary.main,hovered:_colors["default"].brand.primary.main}},finishGameModal:{backgroundColor:_oldColors["default"].purple,winnerLabelColor:_oldColors["default"].greyLight5,rating:{winColor:_oldColors["default"].green,lostColor:_oldColors["default"].red,drawColor:_oldColors["default"].greyDark30},userNameColor:_oldColors["default"].white,countryNameColor:_oldColors["default"].whiteHigh,playerRatingColor:_oldColors["default"].purpleMedium,result:{winColor:_oldColors["default"].red,lostColor:_oldColors["default"].purpleMedium,drawColor:_oldColors["default"].greyLight20,separatorColor:_oldColors["default"].white}}};exports["default"]=_default;