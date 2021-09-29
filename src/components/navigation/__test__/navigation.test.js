import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';

let div = null;
beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  render(<Router><Navigation /></Router>);
});

describe('Test rendering', () => {
  it('renders with out crashing', () => {
    ReactDOM.render(<Router><Navigation /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders NavLink correctly', () => {
    expect(screen.getByText('Calculator')).toMatchSnapshot();
    expect(screen.getByText('Quotes')).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    const calculator = screen.getByText('Math Magicians');
    expect(calculator).toMatchSnapshot();
  });
});
