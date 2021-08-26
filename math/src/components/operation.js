import '../App.css';
import React from 'react';

const Operation =(props)=>{
  
  const getClassName = (value) => {
    if(value === 'AC'|| value === '+/-'||value === '%'){
      return 'button dot';
    }else if(value === '.'){
      return 'button';
    }else{
      return 'button';
    }
  } 

  return (
    <div className={getClassName(props.value)} 
      onClick={
        ()=>{
          props.display(props.value)
        }
      }>{props.value}</div>
  );
}



export default Operation;