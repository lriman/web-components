"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _utils=require("../_utils");var _colorContext=_interopRequireDefault(require("../_context/colorContext"));var _IconCheckedCheckbox=_interopRequireDefault(require("../Icon/IconCheckedCheckbox"));var _constants=require("./_constants");var _style=require("./_style");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var InputCheckbox=/*#__PURE__*/function(_PureComponent){_inherits(InputCheckbox,_PureComponent);var _super=_createSuper(InputCheckbox);function InputCheckbox(props){var _this;_classCallCheck(this,InputCheckbox);_this=_super.call(this,props);_defineProperty(_assertThisInitialized(_this),"disallowBlur",function(){_this.setState({disallowBlurFlag:true});});_defineProperty(_assertThisInitialized(_this),"allowBlur",function(){var disallowBlurFlag=_this.state.disallowBlurFlag;if(disallowBlurFlag){_this.inputNode.current.focus();_this.setState({disallowBlurFlag:false});}});_defineProperty(_assertThisInitialized(_this),"handleFocus",function(){var _this$props=_this.props,id=_this$props.id,onFocus=_this$props.onFocus;var _this$state=_this.state,checked=_this$state.checked,isFocused=_this$state.isFocused;if(!isFocused){_this.setState({isFocused:true});onFocus({id:id,value:checked});}});_defineProperty(_assertThisInitialized(_this),"handleBlur",function(){var _this$props2=_this.props,id=_this$props2.id,onBlur=_this$props2.onBlur;var _this$state2=_this.state,checked=_this$state2.checked,disallowBlurFlag=_this$state2.disallowBlurFlag;if(!disallowBlurFlag){_this.setState({isFocused:false});onBlur({id:id,value:checked});}});_defineProperty(_assertThisInitialized(_this),"handleChange",function(e){var checked=e.target.checked;var _this$props3=_this.props,id=_this$props3.id,onChange=_this$props3.onChange;var stateChecked=_this.state.checked;_this.setState({checked:checked});if(checked!==stateChecked){onChange({id:id,value:checked});}});_defineProperty(_assertThisInitialized(_this),"handleMouseEnter",function(){_this.setState({isHovered:true});});_defineProperty(_assertThisInitialized(_this),"handleMouseLeave",function(){_this.setState({isHovered:false});});var _checked=_this.props.checked;_this.state={isInitialized:false,isFocused:false,isHovered:false,checked:_checked,disallowBlurFlag:false};_this.inputNode=/*#__PURE__*/_react["default"].createRef();return _this;}_createClass(InputCheckbox,[{key:"componentDidMount",value:function componentDidMount(){var _this$props4=this.props,id=_this$props4.id,setInputNode=_this$props4.setInputNode;if(setInputNode)setInputNode(id,this.inputNode);document.addEventListener('mouseup',this.allowBlur);}},{key:"componentDidUpdate",value:function componentDidUpdate(){var disabled=this.props.disabled;var isFocused=this.state.isFocused;if(disabled&&isFocused)this.handleBlur();}},{key:"componentWillUnmount",value:function componentWillUnmount(){var _this$props5=this.props,id=_this$props5.id,setInputNode=_this$props5.setInputNode;if(setInputNode)setInputNode(id,this.inputNode,true);document.removeEventListener('mouseup',this.allowBlur);}},{key:"render",value:function render(){var _this2=this;var _this$props6=this.props,id=_this$props6.id,disabled=_this$props6.disabled,size=_this$props6.size,type=_this$props6.type,isWarning=_this$props6.isWarning,isError=_this$props6.isError,isSingle=_this$props6.isSingle,children=_this$props6.children;var _this$state3=this.state,isFocused=_this$state3.isFocused,isHovered=_this$state3.isHovered,checked=_this$state3.checked;return/*#__PURE__*/_react["default"].createElement(_colorContext["default"].Consumer,null,function(_ref){var _ref$colorType=_ref.colorType,colorType=_ref$colorType===void 0?'normal':_ref$colorType;return/*#__PURE__*/_react["default"].createElement(_style.StyledInputSwitch,_extends({},(0,_utils.addDataAttributes)({component:_constants.TYPES.CHECKBOX}),{sSize:size,isDisabled:disabled,isChecked:checked,isSingle:isSingle,onMouseEnter:_this2.handleMouseEnter,onMouseLeave:_this2.handleMouseLeave,onMouseDown:_this2.disallowBlur,onMouseUp:_this2.allowBlur,sColorType:colorType,sType:type}),/*#__PURE__*/_react["default"].createElement(_style.StyledInputCheckboxHtmlInput,{ref:_this2.inputNode,sSize:size,id:id,checked:!!checked,disabled:disabled,onFocus:_this2.handleFocus,onBlur:_this2.handleBlur,onChange:_this2.handleChange}),/*#__PURE__*/_react["default"].createElement(_style.StyledInputCheckboxIcon,{sSize:size,isChecked:checked,isDisabled:disabled,isFocused:isFocused,isWarning:isWarning,isError:isError,isHovered:isHovered,sColorType:colorType},checked&&/*#__PURE__*/_react["default"].createElement(_IconCheckedCheckbox["default"],{display:_IconCheckedCheckbox["default"].REFS.DISPLAY.BLOCK,size:_IconCheckedCheckbox["default"].REFS.SIZES.S})),children&&/*#__PURE__*/_react["default"].createElement(_style.StyledInputSwitchTitle,{sSize:size},children));});}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props,state){if(!state.isInitialized||props.checked!==state.checked){return{isInitialized:true,checked:props.checked};}return null;}}]);return InputCheckbox;}(_react.PureComponent);exports["default"]=InputCheckbox;_defineProperty(InputCheckbox,"REFS",_constants.INPUT_REFS);_defineProperty(InputCheckbox,"inputType",_constants.TYPES.CHECKBOX);_defineProperty(InputCheckbox,"propTypes",{id:_propTypes["default"].string.isRequired,checked:_propTypes["default"].bool,children:_propTypes["default"].node,size:_propTypes["default"].oneOf(Object.values(_constants.INPUT_REFS.SIZES)),type:_propTypes["default"].oneOf(Object.values(_constants.INPUT_REFS.TYPES)),isWarning:_propTypes["default"].bool,isError:_propTypes["default"].bool,isSingle:_propTypes["default"].bool,disabled:_propTypes["default"].bool,onFocus:_propTypes["default"].func,onBlur:_propTypes["default"].func,onChange:_propTypes["default"].func,/** @ignore */setInputNode:_propTypes["default"].func});_defineProperty(InputCheckbox,"defaultProps",{checked:false,children:null,size:_constants.INPUT_REFS.SIZES.M,type:_constants.INPUT_REFS.TYPES.PRIMARY,isWarning:false,isError:false,isSingle:false,disabled:false,onFocus:function onFocus(){return null;},onBlur:function onBlur(){return null;},onChange:function onChange(){return null;},setInputNode:null});