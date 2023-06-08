import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should render by default', () => {
    render(<Footer/>);

    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
  });
});