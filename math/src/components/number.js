import '../App.css';
import React from 'react';

const Number = (props) =>{
  return(
    <div className={(props.value === '0') ? 'number zero': 'number'}
      onClick={()=>{
        props.display(props.value);
      }}
    >{props.value}</div>
  )
}



export default Number;