import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('verifica se tem 6 links', () => {
  render(<App />);
  const linkElements = screen.getAllByRole("link");
  expect(linkElements).toHaveLength(6);
});
