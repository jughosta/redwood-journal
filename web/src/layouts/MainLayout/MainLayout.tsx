import React from 'react'
import Header from 'src/components/Header/Header'

interface Props {
  children?: JSX.Element
  nav?: JSX.Element
}

const MainLayout = ({ children, nav }: Props): JSX.Element => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header />
      {nav}
      <main className="mt-6">{children}</main>
    </div>
  )
}

export default MainLayout
