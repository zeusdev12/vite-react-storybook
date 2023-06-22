import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from './TextArea'

describe('TextArea', () => {
  it('renders', () => {
    render(<TextArea/>);

    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  })
})