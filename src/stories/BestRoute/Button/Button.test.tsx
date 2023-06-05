import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('<Toggle />', () => {
  it('should render OFF by default', () => {
    render(<Button label="Test"/>);

    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });

  it('should render ON when clicked', () => {
    render(<Button label="Test"/>);

    expect(screen.getByText(/Test/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Test/)) // trigger click event on the element
  });
});