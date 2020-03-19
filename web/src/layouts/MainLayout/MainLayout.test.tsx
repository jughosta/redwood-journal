import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import MainLayout from './MainLayout'

describe('MainLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(
        <MainLayout>
          <span>Test</span>
        </MainLayout>
      )
    }).not.toThrow()
  })
})
