import React from 'react'
import gql from 'graphql-tag'
import { useParams } from '@redwoodjs/router'
import { groupEntriesByDayTime } from 'src/utils/questions'
import { getDayCode } from 'src/utils/date'
import EntryList from 'src/components/EntryList/EntryList'
import { DayTime, Entry as EntryType } from 'src/types'

export const QUERY = gql`
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

type Props = {
  entries: EntryType[]
}

export const Success = ({ entries }: Props): JSX.Element => {
  const { day } = useParams()
  const readOnly = getDayCode(new Date()) !== day // not today
  const map = groupEntriesByDayTime(entries, !readOnly, day)

  if (entries.length === 0 && readOnly) {
    return <div className="text-gray-500 text-center">¯\_(ツ)_/¯</div>
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
