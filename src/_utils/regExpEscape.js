export default function regExpEscape(text) {
  return text && text.replace(/[-[\]{}()*+?.,\\^$|#]/gi, '\\$&');
}
