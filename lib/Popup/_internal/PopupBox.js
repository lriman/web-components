"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _reactDom=require("react-dom");var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _colorContext=_interopRequireDefault(require("../../_context/colorContext"));var _context=require("../../ModalWindow/_context");var _context2=require("../_context");var _constants=require("../_constants");var _style=require("../_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var PopupBoxWithContext=/*#__PURE__*/function(_Component){_inherits(PopupBoxWithContext,_Component);var _super=_createSuper(PopupBoxWithContext);function PopupBoxWithContext(props){var _this;_classCallCheck(this,PopupBoxWithContext);_this=_super.call(this,props);_defineProperty(_assertThisInitialized(_this),"setOffset",function(){var openerNode=_this.state.openerNode;if(!openerNode||!openerNode.current||!_this.innerNode||!_this.innerNode.current)return;var openerNodeBCRect=openerNode.current.getBoundingClientRect();var innerNodeBCRect=_this.innerNode.current.getBoundingClientRect();_this.setState({isMounted:true,openerNodeTop:openerNodeBCRect.top,openerNodeLeft:openerNodeBCRect.left,openerNodeHeight:openerNodeBCRect.height,openerNodeWidth:openerNodeBCRect.width,innerNodeHeight:innerNodeBCRect.height,innerNodeWidth:innerNodeBCRect.width});});_defineProperty(_assertThisInitialized(_this),"getPositioningParams",function(){var _this$state=_this.state,openerNodeTop=_this$state.openerNodeTop,openerNodeLeft=_this$state.openerNodeLeft,openerNodeHeight=_this$state.openerNodeHeight,openerNodeWidth=_this$state.openerNodeWidth,innerNodeHeight=_this$state.innerNodeHeight,innerNodeWidth=_this$state.innerNodeWidth;return{openerNodeTop:openerNodeTop,openerNodeLeft:openerNodeLeft,openerNodeHeight:openerNodeHeight,openerNodeWidth:openerNodeWidth,innerNodeHeight:innerNodeHeight,innerNodeWidth:innerNodeWidth};});_defineProperty(_assertThisInitialized(_this),"handleClick",function(e){var onClose=_this.props.onClose;var openerNode=_this.state.openerNode;if(!_this.node.current.contains(e.target)&&!openerNode.current.contains(e.target)){e.preventDefault();onClose();}});_defineProperty(_assertThisInitialized(_this),"handlePopupClick",function(e){e.stopPropagation();e.nativeEvent.stopImmediatePropagation();});_defineProperty(_assertThisInitialized(_this),"handleKeyPress",function(e){var _this$props=_this.props,isNotClosingOnEscPress=_this$props.isNotClosingOnEscPress,onClose=_this$props.onClose;if(!isNotClosingOnEscPress&&e.which===27)onClose();});_defineProperty(_assertThisInitialized(_this),"handleOnPointerMove",function(e){var _this$props2=_this.props,isClosingOnMouseLeave=_this$props2.isClosingOnMouseLeave,onClose=_this$props2.onClose;var openerNode=_this.state.openerNode;if(isClosingOnMouseLeave&&!_this.node.current.contains(e.target)&&!openerNode.current.contains(e.target))onClose();});var _openerNode=_this.props.openerNode;_this.state={isMounted:false,openerNode:_openerNode,openerNodeTop:null,openerNodeLeft:null,openerNodeHeight:null,openerNodeWidth:null,innerNodeHeight:null,innerNodeWidth:null};_this.node=/*#__PURE__*/_react["default"].createRef();_this.innerNode=/*#__PURE__*/_react["default"].createRef();_this.bodyNode=document.body;return _this;}_createClass(PopupBoxWithContext,[{key:"componentDidMount",value:function componentDidMount(){window.addEventListener('resize',this.setOffset);document.addEventListener('scroll',this.setOffset,true);document.addEventListener('click',this.handleClick);document.addEventListener('touchstart',this.handleClick);document.addEventListener('keydown',this.handleKeyPress);document.addEventListener('mousemove',this.handleOnPointerMove);setTimeout(this.setOffset,0);}},{key:"componentDidUpdate",value:function componentDidUpdate(){var _this$state2=this.state,innerNodeHeight=_this$state2.innerNodeHeight,innerNodeWidth=_this$state2.innerNodeWidth;var innerNodeBCRect=this.innerNode.current.getBoundingClientRect();if(innerNodeHeight!==innerNodeBCRect.height||innerNodeWidth!==innerNodeBCRect.width){this.setOffset();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener('resize',this.setOffset);document.removeEventListener('scroll',this.setOffset);document.removeEventListener('click',this.handleClick);document.removeEventListener('touchstart',this.handleClick);document.removeEventListener('keydown',this.handleKeyPress);document.removeEventListener('mousemove',this.handleOnPointerMove);}},{key:"render",value:function render(){var _this$props3=this.props,placement=_this$props3.placement,align=_this$props3.align,zIndex=_this$props3.zIndex,colorType=_this$props3.colorType,isTransparent=_this$props3.isTransparent,overflow=_this$props3.overflow,children=_this$props3.children;var isMounted=this.state.isMounted;return/*#__PURE__*/(0,_reactDom.createPortal)(/*#__PURE__*/_react["default"].createElement(_style.StyledPopupBox,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.BOX}),{ref:this.node,isMounted:isMounted,sPlacement:placement,sAlign:align,sPositioningParams:this.getPositioningParams(),sZIndex:zIndex,sColorType:colorType,isTransparent:isTransparent,sOverflow:overflow,onClick:this.handlePopupClick}),/*#__PURE__*/_react["default"].createElement(_style.StyledPopupBoxInner,{sColorType:colorType,ref:this.innerNode},children)),this.bodyNode);}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props,state){if(props.openerNode&&!state.openerNode){return{openerNode:props.openerNode};}return null;}}]);return PopupBoxWithContext;}(_react.Component);_defineProperty(PopupBoxWithContext,"propTypes",{openerNode:_propTypes["default"].shape({}),placement:_propTypes["default"].oneOf(Object.values(_constants.BOX_REFS.PLACEMENT)),align:_propTypes["default"].oneOf(Object.values(_constants.BOX_REFS.ALIGN)),zIndex:_propTypes["default"].number,isNotClosingOnEscPress:_propTypes["default"].bool,isClosingOnMouseLeave:_propTypes["default"].bool,isTransparent:_propTypes["default"].bool,overflow:_propTypes["default"].string,colorType:_propTypes["default"].string,onClose:_propTypes["default"].func,children:_propTypes["default"].element.isRequired});_defineProperty(PopupBoxWithContext,"defaultProps",{openerNode:null,placement:_constants.BOX_REFS.PLACEMENT.BOTTOM,align:_constants.BOX_REFS.ALIGN.START,zIndex:9,isNotClosingOnEscPress:false,isClosingOnMouseLeave:false,isTransparent:false,overflow:'auto',colorType:undefined,onClose:function onClose(){return null;}});var PopupBox=function PopupBox(props){return/*#__PURE__*/_react["default"].createElement(_context2.PopupContext.Consumer,null,function(_ref){var openerNode=_ref.openerNode,isOpened=_ref.isOpened,onClose=_ref.onClose;return isOpened?/*#__PURE__*/_react["default"].createElement(_context.ModalWindowContext.Consumer,null,function(_ref2){var modalWindowPopupBoxZIndex=_ref2.popupBoxZIndex;return/*#__PURE__*/_react["default"].createElement(_colorContext["default"].Consumer,null,function(_ref3){var _ref3$colorType=_ref3.colorType,colorType=_ref3$colorType===void 0?'normal':_ref3$colorType;return/*#__PURE__*/_react["default"].createElement(PopupBoxWithContext,_extends({zIndex:modalWindowPopupBoxZIndex},props,{openerNode:openerNode,colorType:colorType,onClose:onClose}));});}):null;});};PopupBox.propTypes={placement:_propTypes["default"].oneOf(Object.values(_constants.BOX_REFS.PLACEMENT)),align:_propTypes["default"].oneOf(Object.values(_constants.BOX_REFS.ALIGN)),isNotClosingOnEscPress:_propTypes["default"].bool,isClosingOnMouseLeave:_propTypes["default"].bool,children:_propTypes["default"].element.isRequired};PopupBox.defaultProps={placement:_constants.BOX_REFS.PLACEMENT.BOTTOM,align:_constants.BOX_REFS.ALIGN.START,isNotClosingOnEscPress:false,isClosingOnMouseLeave:false};PopupBox.REFS=_objectSpread({},_constants.BOX_REFS);var _default=PopupBox;exports["default"]=_default;