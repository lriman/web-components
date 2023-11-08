import moment from 'moment';

/**
 * Форматирование даты из формата ISO
 * @param {string} date - дата в формате ISO
 * @param {string} format - формат
 * @returns {string} - отформатированная дата
 */
export default function getFormattedDate(date, format = 'DD.MM.YYYY') {
  return date && moment(date).isValid() ? moment(date).format(format) : null;
}

getFormattedDate.withTime = date => getFormattedDate(date, 'DD.MM.YYYY HH:mm:ss');

/**
 * Форматирование даты в формат ISO
 * @param {string} date - дата в любом формате
 * @param {string} format - формат
 * @returns {string} - дата в формате ISO
 */
getFormattedDate.ISO = (date, format = 'DD.MM.YYYY') => {
  return date && moment(date, format).isValid() ? moment(date, format).format() : null;
};

/**
 * Получение текущей даты в формате ISO
 * @param {string} param - (start, end) - начало или конец дня
 * @returns {string} - текущая дата в формате ISO
 */
getFormattedDate.today = param => {
  const today = moment();
  if (param === 'start') return today.startOf('day');
  if (param === 'end') return today.endOf('day');
  return today;
};

getFormattedDate.moment = (date, format = 'DD.MM.YYYY') => {
  return date && moment(date, format).isValid() ? moment(date, format) : null;
};

getFormattedDate.range = (from, to) => {
  if (!from || !moment(from).isValid() || !to || !moment(to).isValid()) return null;

  const fFrom = moment(from).format('D MMMM YYYY').split(' ');
  const fTo = moment(to).format('D MMMM YYYY').split(' ');

  if (fFrom[2] !== fTo[2]) return `${fFrom[0]} ${fFrom[1]} ${fFrom[2]} - ${fTo[0]} ${fTo[1]} ${fTo[2]}`;
  if (fFrom[1] !== fTo[1]) return `${fFrom[0]} ${fFrom[1]} - ${fTo[0]} ${fTo[1]} ${fTo[2]}`;
  if (fFrom[0] !== fTo[0]) return `${fFrom[0]} - ${fTo[0]} ${fTo[1]} ${fTo[2]}`;
  return `${fTo[0]} ${fTo[1]} ${fTo[2]}`;
};
