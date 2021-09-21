import React from 'react';
import Row from './Row';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.value));
  }

  render() {
    const { total, next, operation } = this.state;
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
      <div className="calcContainer">
        <input type="text" id="result" value={displayTotal() + (operation || '') + (next || '')} disabled />
        {[['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']].map((subArray) => (
          <div key={subArray[0]}>
            <Row value={subArray[0]} className={subArray[0] === '0' ? 'cero' : ''} handleClick={this.handleClick} />
            <Row value={subArray[1]} handleClick={this.handleClick} />
            <Row value={subArray[2]} handleClick={this.handleClick} />
            {subArray.length === 4 && <Row value={subArray[3]} className={`${subArray.length === 4 ? 'operators' : ''}`} handleClick={this.handleClick} />}
          </div>
        ))}
      </div>
    );
  }
}

export default Calculator;
