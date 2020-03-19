import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link to={routes.about()}>Go to About</Link>
        </li>
        <li>
          <Link to={routes.dayEntries()}>Go to Day Entries</Link>
        </li>
      </ul>
    </MainLayout>
  )
}

export default HomePage
