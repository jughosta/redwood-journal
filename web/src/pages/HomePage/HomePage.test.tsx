import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import StartPage from './StartPage'

describe('HomePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<StartPage />)
    }).not.toThrow()
  })
})
