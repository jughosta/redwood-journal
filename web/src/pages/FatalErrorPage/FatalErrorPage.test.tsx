import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import FatalErrorPage from './FatalErrorPage'

describe('FatalErrorPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FatalErrorPage />)
    }).not.toThrow()
  })
})
