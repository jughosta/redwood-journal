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
          <Link to={routes.dayEntries({ day: '20200319' })}>
            Go to Day Entries
          </Link>
        </li>
      </ul>
    </MainLayout>
  )
}

export default HomePage
