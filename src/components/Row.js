import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ value, className, handleClick }) => (
  <input type="button" key={value} className={`calcItem ${className}`} value={value} onClick={handleClick} />
);

Row.defaultProps = {
  className: '',
};

Row.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Row;
