import Header from 'src/components/Header/Header'

const MainLayout = ({ children, nav }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      {nav}
      <main className="mt-6">{children}</main>
    </div>
  )
}

export default MainLayout
