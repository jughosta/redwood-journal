import React from 'react'
import { render, cleanup } from '@testing-library/react'

import DayEntriesNav from './DayEntriesNav'

describe('NavDayEntries', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DayEntriesNav />)
    }).not.toThrow()
  })
})
