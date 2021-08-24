import React from 'react';
import  './calculator.css';

class Calculator extends React.Component{
  
  render(){
    return (
      <div className='calculator-container'>
        <div className="row">
          <div className="screen">
            <div className="input">0</div>
          </div>
        </div>
        <div className="row">
          <div className="button dot">AC</div>
          <div className="button dot">+/-</div>
          <div className="button dot">%</div>
          <div className="button">/</div>
        </div>
        <div className="row">
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
          <div className="button">X</div>
        </div>
        <div className="row">
          <div className="number">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
          <div className="button">-</div>
        </div>
        <div className="row">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
          <div className="button">+</div>
        </div>
        <div className="row">
           <div className="number zero">0</div>
           <div className="button dot">.</div>       
           <div className="button">=</div>
        </div>
      </div>
    );
  }
};

export default Calculator;