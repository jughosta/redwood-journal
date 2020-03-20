import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DayTime } from 'src/types'

import { Failure, Loading, Success } from './DayEntriesCell'

describe('DayEntriesCell', () => {
  afterEach(() => {
    cleanup()
  })
  it('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })
  it('Failure renders successfully', () => {
    expect(() => {
      render(<Failure />)
    }).not.toThrow()
  })
  it('Success renders successfully', () => {
    expect(() => {
      Success({
        entries: [
          {
            id: 'entry-1',
            question: 'How are you?',
            answer: 'Fine',
            dayTime: DayTime.MORNING,
            day: '2020-03-19',
          },
        ],
      })
    }).not.toThrow()
  })
})
