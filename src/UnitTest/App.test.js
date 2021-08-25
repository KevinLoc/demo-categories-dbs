import { render, screen, fireEvent } from '@testing-library/react';
import CategoryView from '../Demo/ViewController/CategoryView';

test('Check contain category 0 has title: At age 40', () => {
  render(<CategoryView />);
  const element = screen.getByTestId('category-id-2');
  expect(element).toHaveTextContent('At age 40');
});

test('Check category 0 has child content ', () => {
  render(<CategoryView />);
  const element = screen.getByTestId('child-content-category-0-0-0');
  expect(element).toHaveTextContent('300,000');
});

test('Click on arrow button', async () => {
  window = Object.assign(window, { innerWidth: 500 });
  render(<CategoryView />);
  fireEvent.click(screen.getByTestId('arrow-button-next'));
  const element = screen.getByTestId('category-id-01');
  expect(element).toHaveTextContent('During the policy term');
});
