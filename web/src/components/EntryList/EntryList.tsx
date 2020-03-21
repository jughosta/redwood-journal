import React from 'react'
import { DayTime, Entry as EntryType } from 'src/types'
import Entry from 'src/components/Entry/Entry'
import EntryForm from 'src/components/EntryForm/EntryForm'

type Props = {
  entries: EntryType[]
  dayTime: DayTime
  readOnly: boolean
}

const EntryList = ({ entries, dayTime, readOnly }: Props): JSX.Element => (
  <section className="mb-4">
    <h2 className="mb-2 text-gray-500">{`${dayTime[0].toUpperCase()}${dayTime
      .substr(1)
      .toLowerCase()}`}</h2>
    <ul className="rounded overflow-hidden">
      {entries.map((entry, index) => (
        <li key={entry.id}>
          {readOnly ? (
            <Entry entry={entry} />
          ) : (
            <EntryForm
              entry={entry}
              autoFocus={dayTime === DayTime.MORNING && index === 0}
            />
          )}
        </li>
      ))}
    </ul>
  </section>
)

export default EntryList
