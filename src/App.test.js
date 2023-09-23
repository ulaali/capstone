import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('add', () => {
  render(<App />);
  const btn = screen.getByTestId('add');
  const p=screen.getAllByTestId('order');
  fireEvent.click(btn);
  expect(p).toBe('2')
});
