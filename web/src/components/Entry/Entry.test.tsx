import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DayTime } from 'src/types'

import Entry from './Entry'

describe('Entry', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(
        <Entry
          entry={{
            id: 'entry-1',
            question: 'How are you?',
            answer: 'Fine',
            dayTime: DayTime.MORNING,
            day: '2020-03-19',
          }}
        />
      )
    }).not.toThrow()
  })
})
