import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Example from 'components/Example'

describe('Example', () => {
  it('render correctly', () => {
    render(<Example />)

    expect(screen.findAllByAltText('Vite + React')).toBeTruthy()
  })
})
