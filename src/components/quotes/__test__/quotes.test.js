import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Quotes from '../Quotes';

let div = null;
beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  render(<Quotes />);
});

describe('Test rendering', () => {
  it('renders with out crashing', () => {
    ReactDOM.render(<Quotes />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders text correctly', () => {
    const calculator = screen.getByText('A language that does not affect the way you think about programming is not worth knowing.');
    expect(calculator).toMatchSnapshot();
  });
});
