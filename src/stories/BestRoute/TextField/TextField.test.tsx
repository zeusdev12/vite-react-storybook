import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './TextField'

describe('SwapForm', () => {
  it('renders', () => {
    render(<TextField/>);

    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  })
})