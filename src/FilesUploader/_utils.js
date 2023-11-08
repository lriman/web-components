import { PROGRESS_COLORS } from './_constants';

export function getAddBackgroundColor(theme, isActive, isError) {
  if (isActive) return theme.filesUploader.addBackgroundColors.active;
  if (isError) return theme.filesUploader.addBackgroundColors.error;
  return theme.filesUploader.addBackgroundColors.normal;
}

export function calcFilesTotalSize(files) {
  if (!files) return 0;
  let result = 0;
  files.forEach(file => {
    if (file.size) result += file.size;
  });
  return result;
}

export function checkConstraints(files, maxFilesQty, maxFilesTotalSize, maxFileSize) {
  let filesTotalSize = 0;
  const result = [];
  files.forEach(file => {
    const size = file.size || 0;
    if (size <= maxFileSize && filesTotalSize + size <= maxFilesTotalSize) {
      result.push(file);
      filesTotalSize += size;
    }
  });
  if (result.length > maxFilesQty) result.length = maxFilesQty;
  return result;
}

export function getProgressColor(loading) {
  return loading.error ? PROGRESS_COLORS.NEGATIVE : PROGRESS_COLORS.POSITIVE;
}
