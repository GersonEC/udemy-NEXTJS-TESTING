import { render, screen } from '@testing-library/react';
import { UserReservations } from '@/components/user/UserReservations';

describe('UserReservations', () => {
  it('Page has correct label button', async () => {
    render(<UserReservations userId={1} />);
    const button = await screen.findByRole('button', {
      name: /purchase more tickets/i,
      exact: true,
    });
    expect(button).toBeInTheDocument();
  });
});
