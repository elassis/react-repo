import '../App.css';
import React from 'react';

const Number = (props) => {
  const { value, display } = props;

  return (
    <div
      aria-hidden="true"
      className={(value === '0') ? 'number zero' : 'number'}
      onClick={() => {
        display(value);
      }}
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

export default Number;
