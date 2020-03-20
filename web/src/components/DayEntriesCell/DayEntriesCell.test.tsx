import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DayTime } from 'src/types'

import { Empty, Failure, Loading, Success } from './DayEntriesCell'

describe('DayEntriesCell', () => {
  afterEach(() => {
    cleanup()
  })
  it('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })
  it('Empty renders successfully', () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })
  it('Failure renders successfully', () => {
    expect(() => {
      render(<Failure error={{ message: 'error message' }} />)
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
