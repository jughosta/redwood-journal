import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DayTime } from 'src/types'

import EntryForm from './EntryForm'

describe('Entry', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(
        <EntryForm
          entry={{
            id: 'entry-1',
            question: 'How are you?',
            answer: 'Fine',
            dayTime: DayTime.MORNING,
            day: '2020-03-19',
          }}
          question="How are you?"
          dayTime={DayTime.MORNING}
          day="2020-03-19"
        />
      )
    }).not.toThrow()

    expect(() => {
      render(
        <EntryForm
          entry={null}
          question="How are you?"
          dayTime={DayTime.MORNING}
          day="2020-03-19"
        />
      )
    }).not.toThrow()
  })
})
