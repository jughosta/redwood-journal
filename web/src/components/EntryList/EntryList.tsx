import React from 'react'
import { Entry as EntryType } from 'src/types'
import Entry from 'src/components/Entry/Entry'
import EntryForm from 'src/components/EntryForm/EntryForm'

type Props = {
  entries: EntryType[]
  heading: string
  readOnly: boolean
}

const EntryList = ({ entries, heading, readOnly }: Props): JSX.Element => (
  <section className="mb-4">
    <h2 className="mb-2 text-gray-500">{heading}</h2>
    <ul className="rounded overflow-hidden">
      {entries.map((entry) => (
        <li key={entry.id}>
          {readOnly ? <Entry entry={entry} /> : <EntryForm entry={entry} />}
        </li>
      ))}
    </ul>
  </section>
)

export default EntryList
