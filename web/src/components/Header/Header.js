import { Link, routes } from '@redwoodjs/router'

import { getDayCode } from 'src/utils/date'

const Header = () => {
  return (
    <header className="mt-8 mb-4 text-center">
      <Link
        to={routes.dayEntries({ day: getDayCode(Date.now()) })}
        className="font-semibold"
      >
        Redwood Journal
      </Link>
    </header>
  )
}

export default Header
