import React from 'react';
import  '../App.css';
import Screen from './screen.js';
import Number from './number.js';
import Operation from './operation.js';
import calculate from '../logic/calculate.js';
import { useState } from 'react';

const Calculator = () =>{
  const[state] = useState({total:null,next:null,operation:null});  

  function display(value){
    
    let screen = document.querySelector('#screen');

    if(value==='AC'){
      screen.innerText = '0';
    }
    
    let obj ={};
    obj = calculate(state,value);
    if(obj.total || obj.total === null){
      state.total = obj.total;
    }
    if(obj.next || obj.next === null){
      state.next = obj.next;
    }
    if(obj.operation || obj.operation === null){
      state.operation = obj.operation;
    } 
    if(value === 'AC'){
      screen.innerText = '';
    }else if(value === '='){
      screen.innerText = state.total;
    }else if(value === '+/-'){
      screen.innerText= state.next;
    } else{
      screen.innerText += value;
    }  
    console.log(state)
  } 
    return (
      <div className='calculator-container'>
        <div className="row">
          <div className="screen">
            {/*i'm setting this text as value of the component and its display it */}
           <Screen  />
          </div>
        </div>
        <div className="row">
          <Operation value='AC' display={display}/>
          <Operation value='+/-' display={display}/>
          <Operation value='%' display={display}/>
          <Operation value='/' display={display}/>
        </div>
        <div className="row">
          <Number value='7' display={display}/>
          <Number value='8' display={display}/>
          <Number value='9' display={display}/>
          <Operation value='x' display={display}/>
        </div>
        <div className="row">
          <Number value='4' display={display}/>
          <Number value='5' display={display}/>
          <Number value='6' display={display}/>
          <Operation value='-' display={display}/>
        </div>
        <div className="row">
          <Number value='1' display={display}/>
          <Number value='2' display={display}/>
          <Number value='3' display={display}/>
          <Operation value='+' display={display}/>
        </div>
        <div className="row">
           <Number value='0' display={display}/>
           <Operation value='.' display={display}/>      
           <Operation value='=' display={display}/>
        </div>
      </div>
    );
  
};

export default Calculator;