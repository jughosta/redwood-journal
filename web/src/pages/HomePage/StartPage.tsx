import * as React from 'react'
import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { getDayCode } from 'src/utils/date'

const StartPage = (): JSX.Element => {
  return (
    <MainLayout>
      <>
        <h1 className="text-center font-bold">Welcome!</h1>
        <div className="text-center text-blue-700">
          <Link to={routes.dayEntries({ day: getDayCode(new Date()) })}>
            Go to Today entries
          </Link>
        </div>
      </>
    </MainLayout>
  )
}

export default StartPage
