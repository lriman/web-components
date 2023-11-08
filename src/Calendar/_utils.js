import moment from 'moment';
import ru from 'moment/locale/ru'; /* eslint-disable-line */

moment.locale('ru');

export const convertMomentValue = value => {
  if (value === null) return null;
  if (typeof value === 'string') {
    const momentValue = moment(value);
    return momentValue.isValid() ? momentValue : null;
  }
  if (Array.isArray(value)) {
    return value.map(date => {
      const momentValue = moment(date);
      return momentValue.isValid() ? momentValue.format() : null;
    });
  }
  return value.isValid && value.isValid() ? value.format() : null;
};
