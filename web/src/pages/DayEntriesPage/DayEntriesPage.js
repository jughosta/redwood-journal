import MainLayout from 'src/layouts/MainLayout/MainLayout'
import DayEntriesCell from 'src/components/DayEntriesCell/DayEntriesCell'

const DayEntriesPage = ({ day }) => {
  return (
    <MainLayout>
      <h1>DayEntriesPage</h1>
      <DayEntriesCell day={day} />
    </MainLayout>
  )
}

export default DayEntriesPage
