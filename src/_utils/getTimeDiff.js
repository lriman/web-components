import moment from 'moment';

export function getTimeDiff(t1, t2, unit) {
  const m1 = moment(t1);
  const m2 = moment(t2);
  return m2.diff(m1, unit); // 'seconds'
}
