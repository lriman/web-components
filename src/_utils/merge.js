import typeChecker from './typeChecker';

export default function merge(data, changedData) {
  if (typeChecker.isArray(data)) {
    const result = [...data];
    Object.keys(changedData).forEach(index => {
      if (typeChecker.isObject(changedData[index])) result[index] = merge(result[index], changedData[index]);
      else result[index] = changedData[index];
    });
    return result;
  }

  if (typeChecker.isObject(data)) {
    return Object.keys(data).reduce((result, key) => {
      if (changedData.hasOwnProperty(key)) { /* eslint-disable-line */
        if (typeChecker.isObject(changedData[key])) return { ...result, [key]: merge(data[key], changedData[key]) };
        return { ...result, [key]: changedData[key] };
      }
      return { ...result, [key]: data[key] };
    }, {});
  }

  return changedData;
}
