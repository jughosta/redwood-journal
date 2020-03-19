import add from 'date-fns/add'
import sub from 'date-fns/sub'
import format from 'date-fns/format'
import isFuture from 'date-fns/isFuture'

export function getDayCode(date) {
  return format(date, 'yyyy-MM-dd')
}

export function formatDate(date) {
  return format(date, 'PPPP')
}

export function getNextDate(date) {
  return add(date, { days: 1 })
}

export function getPreviousDate(date) {
  return sub(date, { days: 1 })
}

export function hasNextDate(date) {
  return !isFuture(getNextDate(date))
}
