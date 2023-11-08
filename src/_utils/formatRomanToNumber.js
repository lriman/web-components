export default function formatRomanToNumber(roman) {
  if (roman === '') return 0;
  if (roman.startsWith('L')) return 50 + formatRomanToNumber(roman.substr(1));
  if (roman.startsWith('XL')) return 40 + formatRomanToNumber(roman.substr(2));
  if (roman.startsWith('X')) return 10 + formatRomanToNumber(roman.substr(1));
  if (roman.startsWith('IX')) return 9 + formatRomanToNumber(roman.substr(2));
  if (roman.startsWith('V')) return 5 + formatRomanToNumber(roman.substr(1));
  if (roman.startsWith('IV')) return 4 + formatRomanToNumber(roman.substr(2));
  if (roman.startsWith('I')) return 1 + formatRomanToNumber(roman.substr(1));
  return 0;
}
