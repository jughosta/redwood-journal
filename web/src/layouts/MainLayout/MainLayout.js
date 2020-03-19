import Header from 'src/components/Header/Header'

const MainLayout = ({ children }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
