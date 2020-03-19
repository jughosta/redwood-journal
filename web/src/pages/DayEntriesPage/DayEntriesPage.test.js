import { render, cleanup } from '@testing-library/react'

import DayEntriesPage from './DayEntriesPage'

describe('DayEntriesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DayEntriesPage />)
    }).not.toThrow()
  })
})
