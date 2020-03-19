import MainLayout from 'src/layouts/MainLayout/MainLayout'
import DayEntriesCell from 'src/components/DayEntriesCell/DayEntriesCell'
import NavDayEntries from 'src/components/NavDayEntries/NavDayEntries'

const DayEntriesPage = ({ day }) => {
  return (
    <MainLayout nav={<NavDayEntries />}>
      <DayEntriesCell day={day} />
    </MainLayout>
  )
}

export default DayEntriesPage
