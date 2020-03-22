import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import { getDayCode } from 'src/utils/date'

const Header = (): JSX.Element => {
  const now = new Date()

  return (
    <header className="text-center">
      <Link
        to={routes.entries({ day: getDayCode(now) })}
        className="font-semibold text-blue-700"
      >
        Redwood Journal
      </Link>
    </header>
  )
}

export default Header
