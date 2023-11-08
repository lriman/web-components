"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../../_utils");var _colorContext=_interopRequireDefault(require("../../_context/colorContext"));var _constants=require("../_constants");var _context=require("../_context");var _style=require("../_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var MenuItemWithContext=/*#__PURE__*/function(_PureComponent){_inherits(MenuItemWithContext,_PureComponent);var _super=_createSuper(MenuItemWithContext);function MenuItemWithContext(props){var _this;_classCallCheck(this,MenuItemWithContext);_this=_super.call(this,props);_defineProperty(_assertThisInitialized(_this),"handleOnClick",function(){var _this$props=_this.props,active=_this$props.active,id=_this$props.id,onClick=_this$props.onClick;if(!active)onClick(id);});_this.node=/*#__PURE__*/_react["default"].createRef();return _this;}_createClass(MenuItemWithContext,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,isMain=_this$props2.isMain,setItemNode=_this$props2.setItemNode,id=_this$props2.id;if(isMain)setItemNode(id,this.node);}},{key:"render",value:function render(){var _this2=this;var _this$props3=this.props,active=_this$props3.active,id=_this$props3.id,title=_this$props3.title,isExtra=_this$props3.isExtra,size=_this$props3.size;return/*#__PURE__*/_react["default"].createElement(_colorContext["default"].Consumer,null,function(_ref){var _ref$colorType=_ref.colorType,colorType=_ref$colorType===void 0?'normal':_ref$colorType;return/*#__PURE__*/_react["default"].createElement(_style.StyledMenuItem,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.ITEM,id:id}),{ref:_this2.node,isExtra:isExtra}),/*#__PURE__*/_react["default"].createElement(_style.StyledMenuItemInner,{onClick:_this2.handleOnClick,isExtra:isExtra,isActive:active,sSize:size,sColorType:colorType},title));});}}]);return MenuItemWithContext;}(_react.PureComponent);_defineProperty(MenuItemWithContext,"propTypes",{id:_propTypes["default"].string.isRequired,title:_propTypes["default"].string,isMain:_propTypes["default"].bool,isExtra:_propTypes["default"].bool,active:_propTypes["default"].bool,size:_propTypes["default"].string.isRequired,onClick:_propTypes["default"].func.isRequired,setItemNode:_propTypes["default"].func.isRequired});_defineProperty(MenuItemWithContext,"defaultProps",{title:null,isMain:false,isExtra:false,active:false});var MenuItem=function MenuItem(props){return/*#__PURE__*/_react["default"].createElement(_context.MenuContext.Consumer,null,function(_ref2){var setItemNode=_ref2.setItemNode;return/*#__PURE__*/_react["default"].createElement(MenuItemWithContext,_extends({},props,{setItemNode:setItemNode}));});};var _default=MenuItem;exports["default"]=_default;