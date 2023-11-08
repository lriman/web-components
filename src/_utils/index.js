export { default as formatLabel } from './formatLabel';
export { default as formatObjectToQuery } from './formatObjectToQuery';
export { default as formatQueryToObject } from './formatQueryToObject';
export { default as getFormattedAmount } from './getFormattedAmount';
export { default as getFormattedDate } from './getFormattedDate';
export { default as getFormattedPhoneNumber } from './getFormattedPhoneNumber';
export { default as getUnique } from './getUnique';
export { default as keyMirrorWithPrefix } from './keyMirrorWithPrefix';
export { default as merge } from './merge';
export { default as regExpEscape } from './regExpEscape';
export { default as typeChecker } from './typeChecker';
export { default as chessGame } from './chessGame';
export { default as getFormattedArray } from './getFormattedArray';
export { default as getPlayer } from './getPlayer';
export { default as getCaptured } from './getCaptured';
export { default as zeroPad } from './zeroPad';
export { default as indexDb } from './indexDb';
export { default as smoothScrollTo } from './smoothScrollTo';
export { default as useWindowSize } from './useWindowSize';
export { default as debounce } from './debounce';
export { default as getEngineAnalyze } from './getEngineAnalyze';

export function addDataAttributes(dataAttributes) {
  if (!dataAttributes) return null;
  return Object.keys(dataAttributes).reduce(
    (previous, key) => ({ ...previous, [`data-${key}`]: dataAttributes[key] }),
    {},
  );
}

export function isMobile() {
  return isMobile.android() || isMobile.blackberry() || isMobile.ios() || isMobile.opera() || isMobile.windows();
}
isMobile.android = () => navigator.userAgent.match(/Android/i);
isMobile.blackberry = () => navigator.userAgent.match(/BlackBerry/i);
isMobile.ios = () => navigator.userAgent.match(/iPhone|iPad|iPod/i);
isMobile.opera = () => navigator.userAgent.match(/Opera Mini/i);
isMobile.windows = () => navigator.userAgent.match(/IEMobile/i);

export function getBrowser() {
  if (navigator.userAgent.search(/Safari/) > 0) return 'Safari';
  if (navigator.userAgent.search(/Firefox/) > 0) return 'Firefox';
  if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) return 'Internet Explorer';
  if (navigator.userAgent.search(/Chrome/) > 0) return 'Google Chrome';
  if (navigator.userAgent.search(/OPR/) > 0) return 'Opera';
  if (navigator.userAgent.search(/Edge/) > 0) return 'Microsoft Edge';
  return null;
}
