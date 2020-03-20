import add from 'date-fns/add'
import sub from 'date-fns/sub'
import format from 'date-fns/format'
import isFuture from 'date-fns/isFuture'

export function getDayCode(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

export function formatDate(date: Date): string {
  return format(date, 'PPPP')
}

export function getNextDate(date: Date): Date {
  return add(date, { days: 1 })
}

export function getPreviousDate(date: Date): Date {
  return sub(date, { days: 1 })
}

export function hasNextDate(date: Date): boolean {
  return !isFuture(getNextDate(date))
}
