import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <h1>HomePage</h1>
      <Link to={routes.about()}>Go to About</Link>
    </MainLayout>
  )
}

export default HomePage
