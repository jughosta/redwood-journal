import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import IdentityModal from 'react-netlify-identity-widget'
import { navigate, routes } from '@redwoodjs/router'
import Header from 'src/components/Header/Header'
import { setProvidedSecret } from 'src/utils/crypto'
import { getDayCode } from 'src/utils/date'

interface Props {
  children?: JSX.Element
}

const MainLayout = ({ children }: Props): JSX.Element => {
  const identity = useIdentityContext()
  const [isModalVisible, setModalVisibility] = useState(false)

  setProvidedSecret((identity.isLoggedIn && identity.user?.email) || null)

  const onModalClosed = (): void => {
    setModalVisibility(false)
    if (identity.isLoggedIn) {
      navigate(routes.entries({ day: getDayCode(new Date()) }))
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {identity.isLoggedIn ? (
        <>
          <div className="my-4 flex justify-between align-center">
            <Header />
            <h1 className="text-center font-bold">
              Hi, {identity.user?.user_metadata?.full_name || 'my friend'}!{' '}
              <button
                className="text-blue-700"
                onClick={(): void => setModalVisibility(true)}
              >
                Logout
              </button>
            </h1>
          </div>
          <hr className="mb-8" />
          <main>{children}</main>
        </>
      ) : (
        <div className="h-screen flex flex-col justify-center align-center">
          <Header />
          <div className="text-center text-5xl">✍️</div>
          <div className="mt-4 text-center">
            <button
              className="text-white bg-blue-500 px-4 py-2"
              onClick={(): void => setModalVisibility(true)}
            >
              Login/Sign up
            </button>
          </div>
        </div>
      )}
      <IdentityModal
        showDialog={isModalVisible}
        onCloseDialog={onModalClosed}
      />
    </div>
  )
}

export default MainLayout
