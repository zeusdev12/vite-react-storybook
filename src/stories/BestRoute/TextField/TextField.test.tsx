import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './TextField'

describe('TextField', () => {
  it('renders', () => {
    render(<TextField/>);

    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  })
})