import React, { useState } from 'react'
import { setProvidedSecret } from 'src/utils/crypto'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import NavDayEntries from 'src/components/NavDayEntries/NavDayEntries'

import DayEntriesCell from 'src/components/DayEntriesCell/DayEntriesCell'

type Props = {
  day: string
}

const DayEntriesPage = ({ day }: Props): JSX.Element => {
  const [locked, setLocked] = useState(true)

  const onBlur = (event): void => {
    const passphrase = event.currentTarget.value

    if (passphrase) {
      setProvidedSecret(passphrase)
      setLocked(false)
    }
  }

  const onKeyUp = (event): void => {
    if (event.key === 'Enter') {
      onBlur(event)
    }
  }

  return (
    <MainLayout nav={<NavDayEntries />}>
      {locked ? (
        <div className="my-24 text-center text-gray-700">
          The journal is locked, please enter your passphrase
          <div className="text-center">
            <input
              autoFocus
              type="password"
              className="mt-4 py-1 px-2 border-gray-200 border-solid border-2 text-gray-800 outline-none focus:border-gray-300"
              onBlur={onBlur}
              onKeyUp={onKeyUp}
            />
          </div>
        </div>
      ) : (
        <DayEntriesCell day={day} />
      )}
    </MainLayout>
  )
}

export default DayEntriesPage
