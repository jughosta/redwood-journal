import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import DayEntriesPage from './DayEntriesPage'

describe('DayEntriesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DayEntriesPage day="2020-03-19" />)
    }).not.toThrow()
  })
})
