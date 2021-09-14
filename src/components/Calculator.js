import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calcContainer">
        <input type="text" id="result" value="...To be continued" disabled />
        <input type="button" className="calcItem" value="AC" />
        <input type="button" className="calcItem" value="+/-" />
        <input type="button" className="calcItem" value="%" />
        <input type="button" className="calcItem operators" value="÷" />
        <input type="button" className="calcItem" value="7" />
        <input type="button" className="calcItem" value="8" />
        <input type="button" className="calcItem" value="9" />
        <input type="button" className="calcItem operators" value="x" />
        <input type="button" className="calcItem" value="4" />
        <input type="button" className="calcItem" value="5" />
        <input type="button" className="calcItem" value="6" />
        <input type="button" className="calcItem operators" value="-" />
        <input type="button" className="calcItem" value="1" />
        <input type="button" className="calcItem" value="2" />
        <input type="button" className="calcItem" value="3" />
        <input type="button" className="calcItem operators" value="+" />
        <input type="button" className="calcItem cero" value="0" />
        <input type="button" className="calcItem" value="." />
        <input type="button" className="calcItem" value="=" />
      </div>
    );
  }
}

export default Calculator;
