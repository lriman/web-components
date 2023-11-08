import typeChecker from './typeChecker';
import getFormattedDate from './getFormattedDate';

export const CONSTRAINTS_TYPES = {
  REQUIRED: 'REQUIRED',
  ENUM: 'ENUM',
  PATTERN: 'PATTERN',
  INCLUDES: 'INCLUDES',
  RANGE: 'RANGE',
  YEAR_RANGE: 'YEAR_RANGE',
  DATE_RANGE: 'DATE_RANGE',
  EQUAL: 'EQUAL',
};

export default function checkConstraints(value, constraints, otherValues) {
  if (!constraints) return null;

  for (const constrain of constraints) {
    if (constrain.type === CONSTRAINTS_TYPES.REQUIRED) {
      if (typeChecker.isBoolean(value) && !value) return constrain.message;
      if (typeChecker.isEmpty(value)) return constrain.message;
    }

    if (constrain.type === CONSTRAINTS_TYPES.ENUM && typeChecker.isEmpty(value)) return constrain.message;

    if (constrain.type === CONSTRAINTS_TYPES.PATTERN) {
      const regExp = new RegExp(`^${constrain.condition}$`);
      if (value && !regExp.test(value)) return constrain.message;
    }

    if (constrain.type === CONSTRAINTS_TYPES.INCLUDES) {
      const regExp = new RegExp(constrain.condition);
      if (value && !value.match(regExp)) return constrain.message;
    }

    if (constrain.type === CONSTRAINTS_TYPES.RANGE) {
      const { min, max } = constrain.condition;

      if (value && typeChecker.isNumber(min) && value.length < min) return constrain.message;
      if (value && typeChecker.isNumber(max) && value.length > max) return constrain.message;
    }

    if (constrain.type === CONSTRAINTS_TYPES.DATE_RANGE) {
      const { min, max } = constrain.condition;
      const momentValue = getFormattedDate.moment(value);
      const today = getFormattedDate.today('start');
      const minDate = typeChecker.isNumber(min) ? today.clone().subtract(min, 'days') : null;
      const maxDate = typeChecker.isNumber(max) ? today.clone().subtract(max, 'days') : null;
      if (momentValue && minDate && momentValue.isAfter(minDate)) return constrain.message;
      if (momentValue && maxDate && momentValue.isBefore(maxDate)) return constrain.message;
    }

    if (constrain.type === CONSTRAINTS_TYPES.YEAR_RANGE) {
      const { min, max } = constrain.condition;
      const momentValue = getFormattedDate.moment(value);
      const today = getFormattedDate.today('start');
      const minDate = typeChecker.isNumber(min) ? today.clone().subtract(min, 'years') : null;
      const maxDate = typeChecker.isNumber(max) ? today.clone().subtract(max, 'years') : null;
      if (momentValue && minDate && momentValue.isAfter(minDate)) return constrain.message;
      if (momentValue && maxDate && momentValue.isBefore(maxDate)) return constrain.message;
    }

    if (constrain.type === CONSTRAINTS_TYPES.EQUAL) {
      if (value && value !== otherValues[constrain.condition]) return constrain.message;
    }
  }
  return null;
}
