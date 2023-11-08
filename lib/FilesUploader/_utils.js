"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getAddBackgroundColor=getAddBackgroundColor;exports.calcFilesTotalSize=calcFilesTotalSize;exports.checkConstraints=checkConstraints;exports.getProgressColor=getProgressColor;var _constants=require("./_constants");function getAddBackgroundColor(theme,isActive,isError){if(isActive)return theme.filesUploader.addBackgroundColors.active;if(isError)return theme.filesUploader.addBackgroundColors.error;return theme.filesUploader.addBackgroundColors.normal;}function calcFilesTotalSize(files){if(!files)return 0;var result=0;files.forEach(function(file){if(file.size)result+=file.size;});return result;}function checkConstraints(files,maxFilesQty,maxFilesTotalSize,maxFileSize){var filesTotalSize=0;var result=[];files.forEach(function(file){var size=file.size||0;if(size<=maxFileSize&&filesTotalSize+size<=maxFilesTotalSize){result.push(file);filesTotalSize+=size;}});if(result.length>maxFilesQty)result.length=maxFilesQty;return result;}function getProgressColor(loading){return loading.error?_constants.PROGRESS_COLORS.NEGATIVE:_constants.PROGRESS_COLORS.POSITIVE;}