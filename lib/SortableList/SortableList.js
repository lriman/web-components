"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=SortableList;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactBeautifulDnd=require("react-beautiful-dnd");var _utils=require("../_utils");var _constants=require("./_constants");var _style=require("./_style");var _SortableListItem=_interopRequireDefault(require("./_internal/SortableListItem"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function SortableList(props){var id=props.id,children=props.children,handleOnDragEnd=props.handleOnDragEnd;return/*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.DragDropContext,{onDragEnd:handleOnDragEnd},/*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable,{droppableId:id},function(provided){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_style.StyledSortableList,_extends({},(0,_utils.addDataAttributes)({component:_constants.COMPONENTS.GENERAL}),provided.droppableProps,{ref:provided.innerRef}),children),provided.placeholder);}));}SortableList.propTypes={id:_propTypes["default"].string.isRequired,children:_propTypes["default"].node.isRequired,handleOnDragEnd:_propTypes["default"].func.isRequired};SortableList.Item=_SortableListItem["default"];