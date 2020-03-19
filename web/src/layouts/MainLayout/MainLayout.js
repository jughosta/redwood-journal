import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={routes.home()}>Redwood Journal</Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
