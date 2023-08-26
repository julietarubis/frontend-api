import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Maths Calculations header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Maths Calculations/i);
    expect(headerElement).toBeInTheDocument();
});

test('calculates sum, average, and standard deviation', () => {
    const { getByLabelText, getByText } = render(<App />);

    fireEvent.change(getByLabelText(/Enter numbers/i), { target: { value: '1,2,3' } });
    fireEvent.click(getByText(/Calculate/i));

    expect(screen.getByText(/Sum: 6/i)).toBeInTheDocument();
    expect(screen.getByText(/Average: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Standard Deviation: 1/i)).toBeInTheDocument();
});

