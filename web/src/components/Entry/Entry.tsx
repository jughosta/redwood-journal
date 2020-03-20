import React from 'react'
import { Entry as EntryType } from 'src/types'
import { decryptMessage } from 'src/utils/crypto'

type Props = {
  entry: EntryType
}

const Entry = ({ entry }: Props): JSX.Element => {
  return (
    <section className="bg-white px-3 py-2">
      <div className="text-gray-800 font-semibold">{entry.question}</div>
      <div className="text-gray-800">{decryptMessage(entry.answer)}</div>
    </section>
  )
}

export default Entry
