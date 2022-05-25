import React from 'react';
import '../styles/counter.css';
import PropTypes from 'prop-types';

function Counter({ clickNumber }) {
  return (
    <div className="counter">
      {clickNumber}
    </div>
  );
}

Counter.propTypes = {
  clickNumber: PropTypes.string.isRequired,
};

export default Counter;
