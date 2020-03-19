import * as React from 'react'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import NavDayEntries from 'src/components/NavDayEntries/NavDayEntries'

import DayEntriesCell from 'src/components/DayEntriesCell/DayEntriesCell'

type Props = {
  day: string
}

const DayEntriesPage = ({ day }: Props): JSX.Element => {
  return (
    <MainLayout nav={<NavDayEntries />}>
      <DayEntriesCell day={day} />
    </MainLayout>
  )
}

export default DayEntriesPage
