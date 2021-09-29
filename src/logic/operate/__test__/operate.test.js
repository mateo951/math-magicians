import React from "react";
import Calculator from "../../../components/calculator/Calculator";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import operate from "../operate";

describe('Test for numerical operations', () => {
  it('Check sum operation', () => {
    const numberOne = 10;
    const numberTwo = 5;
    const operation = '+';
    expect(operate(numberOne, numberTwo, operation)).toEqual('15');
  })

  it('Check substract operation', () => {
    const numberOne = 10;
    const numberTwo = 2;
    const operation = '-';
    expect(operate(numberOne, numberTwo, operation)).toEqual('8');
  })

  it('Check division operation', () => {
    const numberOne = 10;
    const numberTwo = 2;
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toEqual('5');
  })

  it('Check multiplying operation', () => {
    const numberOne = 10;
    const numberTwo = 2;
    const operation = 'x';
    expect(operate(numberOne, numberTwo, operation)).toEqual('20');
  })

  it('Check modular operation', () => {
    const numberOne = 10;
    const numberTwo = 2;
    const operation = '%';
    expect(operate(numberOne, numberTwo, operation)).toEqual('0');
  })

})
