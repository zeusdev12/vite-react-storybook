import { render, screen, fireEvent } from '@testing-library/react';
import { Page } from './Page'

describe('Page', () => {
  it('renders', () => {
    render(<Page/>);

    expect(screen.getByText(/Find The Best Route Path/)).toBeInTheDocument();

    expect(screen.getByText(/Select Swap:/)).toBeInTheDocument();
    expect(screen.getByText(/From Asset:/)).toBeInTheDocument();
    expect(screen.getByText(/Amount:/)).toBeInTheDocument();
    expect(screen.getByText(/To Asset:/)).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(5);
    expect(screen.getAllByRole('option')).toHaveLength(9);
    expect(screen.getByRole('button').textContent).toBe('Calculate');

    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
  })

  it('swap asset button', async () => {
    render(<Page/>);

    const options = screen.getAllByRole('option');
    expect(options[4].textContent).toBe('USDT');

    // click USDT option of from asset
    fireEvent.click(options[4]);

    const textboxs = screen.getAllByRole('textbox');
    expect(textboxs[1].getAttribute('value')).toBe('USDT');

    // click USDC option of to asset
    fireEvent.click(options[6]);
    expect(textboxs[3].getAttribute('value')).toBe('USDC');

    // click swap asset button
    fireEvent.click(screen.getByAltText('swapArrow'));
    expect(textboxs[1].getAttribute('value')).toBe('USDC');
    expect(textboxs[3].getAttribute('value')).toBe('USDT');
  })
})