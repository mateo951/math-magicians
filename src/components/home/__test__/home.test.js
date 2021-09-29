import React from "react";
import ReactDOM from 'react-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Home from "../Home";

let div = null;
beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  render(<Home />);
});

describe('Test rendering', () => {
  it('renders with out crashing', () => {
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders text correctly', () => {
    expect(screen.getByText('Welcome to our page')).toMatchSnapshot();
  });
});
