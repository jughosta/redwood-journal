import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DayTime } from 'src/types'

import EntryList from './EntryList'

describe('Entry', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders readonly view successfully', () => {
    expect(() => {
      render(
        <EntryList
          userId="tttt"
          readOnly
          dayTime={DayTime.MORNING}
          entries={[
            {
              id: 'entry-1',
              question: 'How are you?',
              answer: 'Fine',
              dayTime: DayTime.MORNING,
              day: '2020-03-19',
              userId: 'tttt',
            },
            {
              id: 'entry-2',
              question: 'How are you?',
              answer: 'Fine',
              dayTime: DayTime.MORNING,
              day: '2020-03-19',
              isDraft: true,
              userId: 'tttt',
            },
          ]}
        />
      )
    }).not.toThrow()
  })

  it('renders forms successfully', () => {
    expect(() => {
      render(
        <EntryList
          userId="tttt"
          readOnly={false}
          dayTime={DayTime.MORNING}
          entries={[
            {
              id: 'entry-1',
              question: 'How are you?',
              answer: 'Fine',
              dayTime: DayTime.MORNING,
              day: '2020-03-19',
              userId: 'tttt',
            },
            {
              id: 'entry-2',
              question: 'How are you?',
              answer: 'Fine',
              dayTime: DayTime.MORNING,
              day: '2020-03-19',
              isDraft: true,
              userId: 'tttt',
            },
          ]}
        />
      )
    }).not.toThrow()
  })
})
