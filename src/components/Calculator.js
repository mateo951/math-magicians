import React from 'react';
import PropTypes from 'prop-types';

const Quantity = ({ quantity }) => (
  <div>
    <p>
      The current date is:
      { quantity }
    </p>
  </div>
);

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="Test"><Quantity quantity={10} /></div>;
  }
}

export default Calculator;
