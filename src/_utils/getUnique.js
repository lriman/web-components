import typeChecker from './typeChecker';

export default function getUnique(array, key) {
  if (!typeChecker.isArray(array)) return array;
  if (key) {
    const keysArray = array.map(item => item[key]);
    const uniqueKeysArray = Array.from(new Set(keysArray));
    return uniqueKeysArray.map(u => array.find(a => a[key] === u));
  }
  return Array.from(new Set(array));
}
