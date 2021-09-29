import React from "react";
import Calculator from "../../../components/calculator/Calculator";
import { render, screen, cleanup } from '@testing-library/react';
import calculate from "../calculate";

beforeEach(() => {
  render(<Calculator />)
});

describe('Test for calculations', () => {
  test('Check for object functionality', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '+');
    obj = calculate(obj, '1');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('9');
  });

  test('Check if 0 is clicked', () => {
    let obj = { total: null };
    obj = calculate(obj, '0');
    expect(obj.total).toBeNull();
  });

  test('Check if AC is clicked', () => {
    let obj = { total: null };
    obj = calculate(obj, '9');
    obj = calculate(obj, '0');
    obj = calculate(obj, 'AC');
    expect(obj.total).toBeNull();
  });

  test('Check for no operation', () => {
    let obj = { total: null };
    obj = calculate(obj, '=');
    expect(obj.total).toBeUndefined();
  });
})

