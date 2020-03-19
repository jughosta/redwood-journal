import { Link, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'

import {
  formatDate,
  getDayCode,
  getPreviousDate,
  getNextDate,
  hasNextDate,
} from 'src/utils/date'

const NavDayEntries = () => {
  const { day } = useParams()
  const date = new Date(day)

  return (
    <nav className="flex justify-between items-center">
      <Link
        to={routes.dayEntries({
          day: getDayCode(getPreviousDate(date)),
        })}
        className="w-24 font-semibold text-sm text-blue-700"
      >
        {'< Before'}
      </Link>
      <h1 className="font-semibold">{formatDate(date)}</h1>
      <div className="w-24 text-right">
        {hasNextDate(date) && (
          <Link
            to={routes.dayEntries({
              day: getDayCode(getNextDate(date)),
            })}
            className="font-semibold text-sm text-blue-700"
          >
            {'After >'}
          </Link>
        )}
      </div>
    </nav>
  )
}

export default NavDayEntries
