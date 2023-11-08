export default function formatObjectToQuery(params, start = '') {
  if (params) {
    return Object.keys(params).reduce((acc, key) => {
      if (!acc) {
        if (params[key]) {
          acc += `${key}=${params[key]}`;
        }
      } else if (params[key]) {
        acc += `&${key}=${params[key]}`;
      }
      return acc;
    }, start);
  }
  return null;
}
