import { render, screen } from '@testing-library/react';
import { Reservation } from '@/components/reservations/Reservation';

describe('Reservation', () => {
  it('Page has correct heading with remaining seats', async () => {
    const mockSubmit = jest.fn();
    render(<Reservation showId={0} submitPurchase={mockSubmit} />);
    const heading = await screen.findByRole('heading', {
      name: /10 seats left/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('Page shows sold out message and no purchase button when there are no seats available', async () => {
    const mockSubmit = jest.fn();
    render(<Reservation showId={1} submitPurchase={mockSubmit} />);
    const soldoutMessage = await screen.findByRole('heading', {
      name: /show is sold out/i,
    });
    expect(soldoutMessage).toBeInTheDocument();
    const purchaseButton = screen.queryByRole('button', {
      name: /purchase/i,
    });

    expect(purchaseButton).not.toBeInTheDocument();
  });
});
