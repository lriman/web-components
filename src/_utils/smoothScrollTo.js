/**
 * Плавная прокрутка контента
 * @param {number} scrollTo - значение, куда промотать window
 * @param {function()} callback - коллбэк-функция
 */
export default function smoothScrollTo(scrollTo, callback = null) {
  const maxScroll =
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    ) - window.innerHeight;
  const realScrollTo = scrollTo < maxScroll ? scrollTo : maxScroll;
  const scrollFrom = window.pageYOffset;
  const scrollDistance = realScrollTo - scrollFrom;
  const scrollDirection = scrollDistance > 0;
  if (scrollDistance < -20 || scrollDistance > 20) {
    let scrollStep = scrollDistance / 30;
    if (scrollStep > 0 && scrollStep < 20) scrollStep = 20;
    if (scrollStep < 0 && scrollStep > -20) scrollStep = -20;
    let scrolled = scrollFrom;
    const scrollInterval = setInterval(() => {
      scrolled += scrollStep;
      if ((scrollDirection && scrolled > realScrollTo) || (!scrollDirection && scrolled < realScrollTo)) {
        window.scrollTo(window.pageXOffset, realScrollTo);
        clearInterval(scrollInterval);
        if (callback) callback();
      } else {
        window.scrollTo(window.pageXOffset, scrolled);
      }
    }, 10);
  } else if (callback) callback();
}
