import { render, cleanup } from '@testing-library/react'

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
            dayTime: 'MORNING',
            day: '2020-03-19',
          }}
        />
      )
    }).not.toThrow()
  })
})
