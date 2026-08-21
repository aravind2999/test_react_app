import { render, screen } from '@testing-library/react';
import App from './App';

test('renders birthday headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/happy birthday/i);
  expect(headingElement).toBeInTheDocument();
});
