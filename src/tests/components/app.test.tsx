import { render, screen } from '@testing-library/react';
import { Loader } from '../../components';

describe('<Loader /> component tests', () => {
  test('Should have Saving text', () => {
    render(<Loader />);
    const text = screen.getByText(/Saving/i);

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Saving');
  });
});
