import format from 'date-fns/format'

export function getDayCode(date) {
  return format(date, 'yyyy-MM-dd')
}
