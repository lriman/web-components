export default function getFormattedPoints(value) {
  if (typeof value !== 'number') return '';
  if (value === Infinity) return '—';

  const stringValue = value.toString();

  const preparedValue = stringValue
    .replace(',', '.')
    .replace(/[^\d\\.]/g, '')
    .replace(/^0+/, '0')
    .replace(/^0([\d\\.]+)$/, '$1');
  const dotIndex = preparedValue.indexOf('.');
  const integerValue = preparedValue.substring(0, dotIndex < 0 ? preparedValue.length : dotIndex);
  const decimalValue = dotIndex < 0 ? '' : preparedValue.substring(dotIndex + 1);

  const integerResultArray = [];
  integerValue
    .split('')
    .reverse()
    .forEach((symbol, index) => {
      if (index && !(index % 3)) integerResultArray.unshift(' ');
      integerResultArray.unshift(symbol);
    });
  const integerResult = integerResultArray.length ? integerResultArray.join('') : '0';

  if (decimalValue === '5') {
    if (integerResult === '0') return '½';
    return `${integerResult}½`;
  }

  return `${integerResult}${decimalValue ? `,${decimalValue}` : ''}`;
}
