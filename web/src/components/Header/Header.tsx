import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import { getDayCode } from 'src/utils/date'

const Header = (): JSX.Element => {
  const now = new Date()

  return (
    <header className="mt-8 text-center">
      <Link
        to={routes.dayEntries({ day: getDayCode(now) })}
        className="font-semibold text-blue-700"
      >
        Redwood Journal
      </Link>
    </header>
  )
}

export default Header
