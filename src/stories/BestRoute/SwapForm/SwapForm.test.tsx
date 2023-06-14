import { render, screen, fireEvent } from '@testing-library/react';
import { SwapForm } from './SwapForm'

describe('SwapForm', () => {
  it('renders', () => {
    render(<SwapForm/>);

    expect(screen.getByText(/From Asset:/)).toBeInTheDocument();
    expect(screen.getByText(/Amount:/)).toBeInTheDocument();
    expect(screen.getByText(/To Asset:/)).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getAllByRole('option')).toHaveLength(6);
    expect(screen.getByRole('button').textContent).toBe('Calculate');
  })

  it('swap asset button', async () => {
    render(<SwapForm/>);

    const options = screen.getAllByRole('option');
    expect(options[1].textContent).toBe('USDT');

    // click USDT option of from asset
    fireEvent.click(options[1]);

    const textboxs = screen.getAllByRole('textbox');
    expect(textboxs[0].getAttribute('value')).toBe('USDT');

    // click USDC option of to asset
    fireEvent.click(options[3]);
    expect(textboxs[2].getAttribute('value')).toBe('USDC');

    // click swap asset button
    fireEvent.click(screen.getByAltText('swapArrow'));
    expect(textboxs[0].getAttribute('value')).toBe('USDC');
    expect(textboxs[2].getAttribute('value')).toBe('USDT');
  })
})