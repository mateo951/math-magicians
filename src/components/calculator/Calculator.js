import React, { useState } from 'react';
import Row from './Row';
import calculate from '../../logic/calculate/calculate';
import style from './calc.module.css';

const Calculator = () => {
  const [obj, setObj] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = obj;

  const handleClick = (e) => {
    setObj((prevState) => calculate(prevState, e.target.value));
  };

  const displayTotal = () => {
    if ((total === 0) && next === null) {
      return 0;
    }
    if (total !== 0 && total !== null) {
      return total;
    }
    return '';
  };
  return (
    <div>
      <h3 className={style.title}>Lets do some math!</h3>
      <div className="calcContainer">
        <input type="text" id="result" value={displayTotal() + (operation || '') + (next || '')} disabled />
        {[['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']].map((subArray) => (
          <div key={subArray[0]}>
            <Row value={subArray[0]} className={subArray[0] === '0' ? 'cero' : ''} handleClick={handleClick} />
            <Row value={subArray[1]} handleClick={handleClick} />
            <Row value={subArray[2]} handleClick={handleClick} />
            {subArray.length === 4 && <Row value={subArray[3]} className={`${subArray.length === 4 ? 'operators' : ''}`} handleClick={handleClick} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
