import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@redwoodjs/web'
import { DayTime, Entry } from 'src/types'

const CREATE_ENTRY = gql`
  mutation CreateEntryMutation($input: EntryInput!) {
    createEntry(input: $input) {
      id
      question
      answer
      dayTime
      day
    }
  }
`

const UPDATE_ENTRY = gql`
  mutation UpdateEntryMutation($id: String!, $input: EntryInput!) {
    updateEntry(id: $id, input: $input) {
      id
      question
      answer
      dayTime
      day
    }
  }
`

type Props = {
  question: string
  dayTime: DayTime
  day: string
  entry: Entry | null
}

const EntryForm = ({
  question,
  dayTime,
  day,
  entry: initialEntry,
}: Props): JSX.Element => {
  const [entry, setEntry] = useState({ ...initialEntry })
  const [create, { loading: createLoading, error: createError }] = useMutation(
    CREATE_ENTRY
  )
  const [update, { loading: updateLoading, error: updateError }] = useMutation(
    UPDATE_ENTRY,
    {
      onCompleted: (data: Entry) => setEntry(data),
    }
  )

  const onBlur = (event): void => {
    const target = event.currentTarget
    const answer = target.value.trim()

    const entryInput = {
      question,
      answer,
      dayTime,
      day,
    }

    if (entry) {
      update({
        variables: {
          id: entry.id,
          input: entryInput,
        },
      })
    } else {
      create({
        variables: {
          input: entryInput,
        },
      })
    }
  }

  const inputId = `entry-form-${Math.random()}`
  const hasError = createError || updateError

  return (
    <section className="bg-white px-3 py-2">
      <label htmlFor={inputId} className="mb-1 text-gray-800 font-semibold">
        {question}
      </label>
      <textarea
        id={inputId}
        name="answer"
        disabled={createLoading || updateLoading}
        defaultValue={entry?.answer}
        className="w-full py-1 px-2 border-gray-200 border-solid border-2 text-gray-800 outline-none focus:border-gray-300"
        onBlur={onBlur}
      />
      {hasError && (
        <span className="text-sm text-red-500">Something went wrong</span>
      )}
    </section>
  )
}

export default EntryForm
