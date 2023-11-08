"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.findActive=findActive;exports.getNavigationLiteLinkCursor=exports.getNavigationLiteLinkMarkBackgroundColor=exports.getNavigationLiteSectionTitleColor=exports.getNavigationLiteLinkColor=void 0;function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function getItems(items){return items.reduce(function(result,item){if(item.items)return[].concat(_toConsumableArray(result),[item],_toConsumableArray(getItems(item.items)));return[].concat(_toConsumableArray(result),[item]);},[]);}function findActive(items){return getItems(items).find(function(item){return item.active;});}var getNavigationLiteLinkColor=function getNavigationLiteLinkColor(isActive,theme,isHovered){if(isActive)return theme.navigationLite.linkColors.active;if(isHovered)return theme.navigationLite.linkColors.hovered;return theme.navigationLite.linkColors["default"];};exports.getNavigationLiteLinkColor=getNavigationLiteLinkColor;var getNavigationLiteSectionTitleColor=function getNavigationLiteSectionTitleColor(isActive,theme,isHovered){if(isActive)return theme.navigationLite.sectionTitleColors.active;if(isHovered)return theme.navigationLite.sectionTitleColors.hovered;return theme.navigationLite.sectionTitleColors["default"];};exports.getNavigationLiteSectionTitleColor=getNavigationLiteSectionTitleColor;var getNavigationLiteLinkMarkBackgroundColor=function getNavigationLiteLinkMarkBackgroundColor(isActive,theme,isHovered){if(isActive)return theme.navigationLite.linkMarkColors.active;if(isHovered)return theme.navigationLite.linkMarkColors.hovered;return theme.navigationLite.linkMarkColors["default"];};exports.getNavigationLiteLinkMarkBackgroundColor=getNavigationLiteLinkMarkBackgroundColor;var getNavigationLiteLinkCursor=function getNavigationLiteLinkCursor(isActive,isDisabled){if(isActive)return'default';if(isDisabled)return'not-allowed';return'pointer';};exports.getNavigationLiteLinkCursor=getNavigationLiteLinkCursor;