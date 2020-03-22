import React, { useState } from 'react'
import { Form, TextField, HiddenField } from '@redwoodjs/web'
import { setProvidedSecret } from 'src/utils/crypto'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import DayEntriesNav from 'src/components/DayEntriesNav/DayEntriesNav'
import DayEntries from 'src/components/DayEntries/DayEntries'

type Props = {
  day: string
}

const DayEntriesPage = ({ day }: Props): JSX.Element => {
  const [locked, setLocked] = useState(true)

  const onSubmit = ({ passphrase }: { passphrase: string }): void => {
    if (passphrase) {
      setProvidedSecret(passphrase)
      setLocked(false)
    }
  }

  return (
    <MainLayout nav={<DayEntriesNav />}>
      {locked ? (
        <div className="my-24 text-center text-gray-700">
          The journal is locked, please enter your passphrase
          <Form className="text-center" onSubmit={onSubmit}>
            <TextField
              autoFocus
              name="passphrase"
              type="password"
              className="mt-4 py-1 px-2 border-gray-200 border-solid border-2 text-gray-800 outline-none focus:border-gray-300"
            />
            <HiddenField name="action" type="submit" />
          </Form>
        </div>
      ) : (
        <DayEntries day={day} />
      )}
    </MainLayout>
  )
}

export default DayEntriesPage
