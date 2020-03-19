import React from 'react'
import gql from 'graphql-tag'
import Entry from 'src/components/Entry/Entry'
import { GraphQLError, Entry as EntryType } from 'src/types'

export const QUERY = gql`
  query getDayEntries($day: String!) {
    entries: dayEntries(day: $day) {
      id
      question
      answer
      dayTime
    }
  }
`

export const Loading = (): JSX.Element => (
  <div className="text-gray-500 text-center">Loading...</div>
)

export const Empty = (): JSX.Element => (
  <div className="text-gray-500 text-center">¯\_(ツ)_/¯</div>
)

export const Failure = ({ error }: { error: GraphQLError }): JSX.Element => (
  <div>Error: {error.message}</div>
)

type Props = {
  entries: EntryType[]
}

export const Success = ({ entries }: Props): JSX.Element => {
  const morningEntries = entries.filter((e) => e.dayTime === 'MORNING')
  const eveningEntries = entries.filter((e) => e.dayTime === 'EVENING')

  return (
    <section>
      <h2 className="mb-2 text-gray-500">Morning</h2>
      <ul>
        {morningEntries.map((entry) => (
          <li key={entry.id}>
            <Entry entry={entry} />
          </li>
        ))}
      </ul>
      <h2 className="mt-3 mb-2 text-gray-500">Evening</h2>
      <ul>
        {eveningEntries.map((entry) => (
          <li key={entry.id}>
            <Entry entry={entry} />
          </li>
        ))}
      </ul>
    </section>
  )
}
