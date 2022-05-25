import React from 'react';
import '../styles/button.css';
import PropTypes from 'prop-types';

function Button({ text, typeButton, clickAction }) {
  PropTypes = {
    text: PropTypes.string,
    typeButton: PropTypes.func,
    clickAction: PropTypes.func,
  };
  return (
    <button type="button" className={typeButton ? 'add-btn' : 'remove-button'} onClick={clickAction}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  typeButton: PropTypes.func.isRequired,
  clickAction: PropTypes.func.isRequired,
};

export default Button;
