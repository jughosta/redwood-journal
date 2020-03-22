import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DayTime } from 'src/types'

import { Failure, Loading, Success, Empty } from './DayEntries'

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
  it('Empty renders successfully', () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })
  it('Success renders successfully', () => {
    expect(() => {
      Success({
        day: '2020-03-22',
        entries: [
          {
            id: 'entry-1',
            question: 'How are you?',
            answer: 'Fine',
            dayTime: DayTime.MORNING,
            day: '2020-03-22',
          },
        ],
      })
    }).not.toThrow()
  })
})
