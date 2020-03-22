import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@redwoodjs/web'
import { groupEntriesByDayTime } from 'src/utils/questions'
import { getDayCode } from 'src/utils/date'
import EntryList from 'src/components/EntryList/EntryList'
import { DayTime, Entry } from 'src/types'

const QUERY = gql`
  query getDayEntries($day: String!) {
    entries: dayEntries(day: $day) {
      id
      question
      answer
      dayTime
      day
    }
  }
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
  const readOnly = getDayCode(new Date()) !== day // not today
  const map = groupEntriesByDayTime(entries, !readOnly, day)

  if (entries.length === 0 && readOnly) {
    return <Empty />
  }

  return (
    <>
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
    </>
  )
}

type Props = {
  day: string
}

const DayEntries = ({ day }: Props): JSX.Element => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      day,
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
