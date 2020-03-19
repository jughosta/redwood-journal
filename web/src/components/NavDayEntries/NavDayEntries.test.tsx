import React from 'react'
import { render, cleanup } from '@testing-library/react'

import NavDayEntries from './NavDayEntries'

describe('NavDayEntries', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NavDayEntries />)
    }).not.toThrow()
  })
})
