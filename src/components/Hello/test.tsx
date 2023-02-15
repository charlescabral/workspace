import { render, screen } from '@testing-library/react'

import Hello from '.'

describe('<Hello />', () => {
  it('should render the heading', () => {
    render(<Hello />)

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
