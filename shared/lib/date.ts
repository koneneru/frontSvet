/**
 * Formats a Date object into an ISO 8601 string including the local timezone offset.
 * @param {Date} date The date object to format.
 * @param {boolean} includeTZ The flag indicating whether to include the time zone.
 * @returns {string} The ISO 8601 formatted string with timezone offset.
 */
export const toIsoString = (date: Date, includeTZ: boolean = false): string => {
  let s = date.getFullYear()
    + '-' + padStart(date.getMonth() + 1, 2)
    + '-' + padStart(date.getDate(), 2)
    + 'T' + padStart(date.getHours(), 2)
    + ':' + padStart(date.getMinutes(), 2)
    + ':' + padStart(date.getSeconds(), 2)
    + '.' + padStart(date.getMilliseconds(), 3);

  if (includeTZ) s += getTimezoneOffset(date);

  return s;
};

function padStart(n: number, o: number) {
  return `${Math.floor(Math.abs(n))}`.padStart(o, '0');
}

function getTimezoneOffset(date: Date): string {
  const tzOffset = -date.getTimezoneOffset();
  const diff = tzOffset >= 0 ? '+' : '-';
  return diff + padStart(tzOffset / 60, 2) + ':'
    + padStart(tzOffset % 60, 2);
};
