import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render by default', () => {
    render(<Button label="Test"/>);

    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });

  it('when clicked', () => {
    render(<Button label="Test"/>);

    expect(screen.getByText(/Test/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Test/)) // trigger click event on the element
  });
});