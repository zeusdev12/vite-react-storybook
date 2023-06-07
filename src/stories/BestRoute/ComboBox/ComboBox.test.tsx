import { render, screen } from '@testing-library/react';
import { ComboBox } from './ComboBox';

describe('<ComboBox />', () => {
  it('should render by default', () => {
    render(<ComboBox placeholder="Asset" options={[]} onChange={() => {}}/>);

    expect(screen.getByPlaceholderText(/Asset/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.queryByRole('option')).toBeNull();
  });

  it('should render with options', () => {
    render(<ComboBox placeholder="Asset" options={['USDC']} onChange={() => {}}/>);

    expect(screen.getByPlaceholderText(/Asset/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.queryByRole('option')).toBeDefined();
  });
});