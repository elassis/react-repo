import '../App.css';
import React from 'react';

const Operation = (props) => {
  const { value, display } = props;

  const getClassName = (value) => {
    if (value === 'AC' || value === '+/-' || value === '%') {
      return 'button dot';
    } if (value === '.') {
      return 'button';
    }
    return 'button';
  };

  return (
    <div
      aria-hidden="true"
      className={getClassName(value)}
      onClick={
        () => {
          display(value);
        }
      }
      onKeyDown={
        () => {
          display(value);
        }
      }
    >
      {value}
    </div>
  );
};

export default Operation;
