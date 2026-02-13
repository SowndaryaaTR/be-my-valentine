import { render, screen } from '@testing-library/react';
import App from './App';

test('renders valentine prompt', () => {
  render(<App />);
  const prompt = screen.getByText(/will you be my valentine\?/i);
  expect(prompt).toBeInTheDocument();
});
