import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@redwoodjs/web'
import { groupEntriesByDayTime } from 'src/utils/questions'
import { getDayCode } from 'src/utils/date'
import { ENTRY_FIELDS_FRAGMENT } from 'src/utils/gqlFragments'
import EntryList from 'src/components/EntryList/EntryList'
import { DayTime, Entry } from 'src/types'

const QUERY = gql`
  query getDayEntries($userId: String!, $day: String!) {
    entries(userId: $userId, day: $day) {
      ...EntryFields
    }
  }
  ${ENTRY_FIELDS_FRAGMENT}
`

export const Loading = (): JSX.Element => (
  <div className="text-gray-500 text-center">Loading...</div>
)

export const Failure = (): JSX.Element => (
  <div className="text-sm text-red-500">Something went wrong</div>
)

export const Empty = (): JSX.Element => (
  <div className="text-gray-500 text-center">¯\_(ツ)_/¯</div>
)

export const Success = ({
  day,
  entries,
}: {
  day: string
  entries: Entry[]
}): JSX.Element => {
  const userId = 'TODO'
  const readOnly = getDayCode(new Date()) !== day // not today
  const map = groupEntriesByDayTime(userId, entries, !readOnly, day)

  if (entries.length === 0 && readOnly) {
    return <Empty />
  }

  return (
    <section className="mt-4">
      <EntryList
        readOnly={readOnly}
        dayTime={DayTime.MORNING}
        entries={map[DayTime.MORNING]}
      />
      <EntryList
        readOnly={readOnly}
        dayTime={DayTime.EVENING}
        entries={map[DayTime.EVENING]}
      />
    </section>
  )
}

type Props = {
  day: string
}

const DayEntries = ({ day }: Props): JSX.Element => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      day,
      userId: 'TODO',
    },
  })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Failure />
  }

  return <Success entries={data.entries} day={day} />
}

export default DayEntries
