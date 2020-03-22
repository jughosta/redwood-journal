import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@redwoodjs/web'
import { decryptMessage, encryptMessage } from 'src/utils/crypto'
import { ENTRY_FIELDS_FRAGMENT } from 'src/utils/gqlFragments'
import { Entry } from 'src/types'
import { generateDraftEntry } from 'src/utils/questions'

const CREATE_ENTRY = gql`
  mutation CreateEntryMutation($input: EntryInput!) {
    createEntry(input: $input) {
      ...EntryFields
    }
  }

  ${ENTRY_FIELDS_FRAGMENT}
`

const UPDATE_ENTRY = gql`
  mutation UpdateEntryMutation($id: String!, $input: EntryInput!) {
    updateEntry(id: $id, input: $input) {
      ...EntryFields
    }
  }
  ${ENTRY_FIELDS_FRAGMENT}
`

const DELETE_ENTRY = gql`
  mutation DeleteEntryMutation($id: String!) {
    deleteEntry(id: $id) {
      ...EntryFields
    }
  }
  ${ENTRY_FIELDS_FRAGMENT}
`

type Props = {
  userId: string
  entry: Entry
  autoFocus?: boolean
}

const EntryForm = ({
  userId,
  entry: initialEntry,
  autoFocus,
}: Props): JSX.Element => {
  const [entry, setEntry] = useState({ ...initialEntry })
  const [create, { loading: createLoading, error: createError }] = useMutation(
    CREATE_ENTRY,
    {
      onCompleted: (data) => setEntry(data.createEntry),
    }
  )
  const [update, { loading: updateLoading, error: updateError }] = useMutation(
    UPDATE_ENTRY,
    {
      onCompleted: (data) => setEntry(data.updateEntry),
    }
  )
  const [
    deleteEntry,
    { loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_ENTRY, {
    onCompleted: (data) => {
      const deletedEntry = data.deleteEntry
      setEntry(
        generateDraftEntry(
          deletedEntry.userId,
          deletedEntry.day,
          deletedEntry.dayTime,
          deletedEntry.question
        )
      )
    },
  })

  const onBlur = (event): void => {
    const target = event.currentTarget
    const answer = target.value.trim()

    if (!answer) {
      // skipped
      if (!entry.isDraft) {
        deleteEntry({
          variables: {
            id: entry.id,
          },
        })
      }
      return
    }

    const entryInput = {
      question: entry.question,
      dayTime: entry.dayTime,
      day: entry.day,
      answer: encryptMessage(answer),
      userId,
    }

    if (entry.isDraft) {
      create({
        variables: {
          input: entryInput,
        },
      })
    } else {
      update({
        variables: {
          id: entry.id,
          input: entryInput,
        },
      })
    }
  }

  const inputId = `entry-form-${Math.random()}`
  const hasError = createError || updateError || deleteError
  let answer = ''

  if (!entry.isDraft) {
    answer = decryptMessage(entry.answer)
  }

  return (
    <section className="bg-white px-3 py-2">
      <label htmlFor={inputId} className="mb-1 text-gray-800 font-semibold">
        {entry.question}
      </label>
      <textarea
        id={inputId}
        autoFocus={autoFocus}
        name="answer"
        disabled={createLoading || updateLoading || deleteLoading}
        defaultValue={answer}
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
