import { render, screen } from '@testing-library/react';
import BandComponent from '@/pages/bands/[bandId]';
import { readFakeData } from '@/__tests__/__mocks__/fakeData';

describe('Home', () => {
  it('Page has correct heading', async () => {
    const { fakeBands } = await readFakeData();
    render(<BandComponent band={fakeBands[0]} error={null} />);

    const heading = screen.getByRole('heading', {
      name: /The Wandering Bunnies/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('Page shows error correctly', async () => {
    const errorMessage = 'Try again!';
    render(<BandComponent band={null} error={errorMessage} />);

    const errorHeading = screen.getByRole('heading', {
      name: /Could not retrieve band data: Try again!/i,
    });
    expect(errorHeading).toBeInTheDocument();
  });
});
