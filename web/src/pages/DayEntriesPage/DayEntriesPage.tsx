import React, { useEffect } from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { navigate, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import DayEntriesNav from 'src/components/DayEntriesNav/DayEntriesNav'
import DayEntries from 'src/components/DayEntries/DayEntries'

type Props = {
  day?: string
}

const DayEntriesPage = ({ day }: Props): JSX.Element => {
  const identity = useIdentityContext()

  useEffect(() => {
    if (!day) {
      navigate(routes.home())
    }
  }, [day])

  if (!day) {
    return null
  }

  return (
    <MainLayout>
      <>
        <DayEntriesNav />
        <DayEntries day={day} userId={identity.user?.id} />
      </>
    </MainLayout>
  )
}

export default DayEntriesPage
