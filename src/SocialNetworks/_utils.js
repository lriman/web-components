export const getShareLink = (link, url, title) => {
  return link.replace('{:url}', encodeURIComponent(url)).replace('{:title}', title);
};

export const getBoxPositionOnWindowCenter = (width, height) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2,
});
