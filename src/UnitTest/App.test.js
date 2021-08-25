import { render, screen, fireEvent } from '@testing-library/react';
import CategoryView from '../Demo/ViewController/CategoryView';

test('Check contain categoryId = 2 has title: At age 40', () => {
  render(<CategoryView />);
  const element = screen.getByTestId('category-id-2');
  expect(element).toHaveTextContent('At age 40');
});

test('Check category "At age 40" has child content ', () => {
  render(<CategoryView />);
  const element = screen.getByTestId('child-content-category-0-0-0');
  expect(element).toHaveTextContent('300,000');
});

test('Click on arrow button and expect to display 2nd Category', async () => {
  window = Object.assign(window, { innerWidth: 375 });
  render(<CategoryView />);
  fireEvent.click(screen.getByTestId('arrow-button-next'));
  const element = screen.getByTestId('wrap-container');
  const styles = getComputedStyle(element);
  expect(styles.transform).toBe('translateX(-375px)');
});
