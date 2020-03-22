import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { getDayCode } from 'src/utils/date'

const StartPage = (): JSX.Element => (
  <MainLayout>
    <div className="my-48 text-center">
      <div className="my-16">
        <Link
          className="text-white bg-blue-500 px-4 py-2"
          to={routes.entries({ day: getDayCode(new Date()) })}
        >
          Open the journal
        </Link>
      </div>
    </div>
  </MainLayout>
)

export default StartPage
