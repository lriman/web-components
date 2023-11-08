export function prepareData(data, xAxis) {
  const prevValues = {};

  const result = xAxis.map(item => {
    const obj = {
      name: item.title,
    };

    data.forEach(line => {
      let value = line.values[item.id];
      if (value === undefined) value = prevValues[line.id];
      prevValues[line.id] = value;
      obj[line.title] = value;
    });

    return obj;
  });

  return result;
}
