import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Tests on <App /> component', () => {
  test('Should render correctly', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('Public Page');
  });
});
