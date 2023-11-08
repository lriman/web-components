export default function formatQueryToObject(str) {
  if (str) {
    return str
      .slice(1)
      .split('&')
      .map(item => item.split('='))
      .reduce((acc, item) => ({ ...acc, [item[0]]: item[1] }), {});
  }
  return null;
}
