import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import Calculator from '../Calculator';

let div = null;
beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  render(<Calculator />);
});
afterEach(cleanup);

describe('Test rendering', () => {
  it('renders with out crashing', () => {
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders text correctly', () => {
    const calculator = screen.getByText('Lets do some math!');
    expect(calculator).toMatchSnapshot();
  });

  it('renders calculator operations', () => {
    const operations = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    operations.forEach((operation) => {
      expect(screen.getByText(operation)).toBeInTheDocument();
    });
  });

  it('5 + 4', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('9')).toMatchSnapshot();
  });
});
