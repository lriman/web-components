const MAP = [
  { value: 1000, char: 'M' },
  { value: 900, char: 'CM' },
  { value: 500, char: 'D' },
  { value: 400, char: 'CD' },
  { value: 100, char: 'C' },
  { value: 90, char: 'XC' },
  { value: 50, char: 'L' },
  { value: 40, char: 'XL' },
  { value: 10, char: 'X' },
  { value: 9, char: 'IX' },
  { value: 5, char: 'V' },
  { value: 4, char: 'IV' },
  { value: 1, char: 'I' },
];

export default function getFormattedRoman(value) {
  if (typeof value !== 'number') return '';
  if (value === Infinity) return '—';

  let preparedValue = parseInt(value, 10);

  return MAP.reduce((result, currentValue) => {
    while (preparedValue >= currentValue.value) {
      result += currentValue.char;
      preparedValue -= currentValue.value;
    }

    return result;
  }, '');
}
