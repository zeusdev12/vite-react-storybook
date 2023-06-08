import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render by default', () => {
    render(<Header/>);

    expect(screen.getByText(/Find The Best Route Path/)).toBeInTheDocument();
  });
});