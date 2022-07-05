import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('Page has correct heading and image', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to popular concert venue/i,
    });
    const image = screen.getByRole('img');

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
