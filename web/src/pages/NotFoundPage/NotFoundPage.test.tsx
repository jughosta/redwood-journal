import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import NotFoundPage from './NotFoundPage'

describe('NotFoundPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NotFoundPage />)
    }).not.toThrow()
  })
})
