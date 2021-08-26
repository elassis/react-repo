import React from 'react';
import  '../App.css';
import Screen from './screen.js';
import Number from './number.js';
import Operation from './operation.js';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state={
      total:null,
      next:null,
      operation:null,
    };
    this.text = '';
    this.display = this.display.bind(this);    
  }
  display(value){
   
    let obj = {};
    //Displaying value in the screen if its a number an basic operation
    obj = calculate(this.state,value);
    console.log(obj)
    if(value === '='){
      this.text = obj.total;
    }else if(value === 'AC'){
      this.text ='';
    }else if(value === '+/-'){
      if(obj.next){
        this.text = obj.next;
      }
      if(obj.total){
        this.text = obj.total;
      }
    }else{
      this.text += value;
    }
    
    if(obj.total || obj.total === null){
      this.setState({
        total:obj.total
      })      
    } 
    if(obj.next || obj.next === null){
      this.setState({
        next:obj.next
      })
    }
     if(obj.operation || obj.operation === null){
      this.setState({
        operation:obj.operation
      })
    } 
  }
 
  render(){
    return (
      <div className='calculator-container'>
        <div className="row">
          <div className="screen">
            {/*i'm setting this text as value of the component and its display it */}
           <Screen value={this.text} />
          </div>
        </div>
        <div className="row">
          <Operation value='AC' display={this.display}/>
          <Operation value='+/-' display={this.display}/>
          <Operation value='%' display={this.display}/>
          <Operation value='/' display={this.display}/>
        </div>
        <div className="row">
          <Number value='7' display={this.display}/>
          <Number value='8' display={this.display}/>
          <Number value='9' display={this.display}/>
          <Operation value='x' display={this.display}/>
        </div>
        <div className="row">
          <Number value='4' display={this.display}/>
          <Number value='5' display={this.display}/>
          <Number value='6' display={this.display}/>
          <Operation value='-' display={this.display}/>
        </div>
        <div className="row">
          <Number value='1' display={this.display}/>
          <Number value='2' display={this.display}/>
          <Number value='3' display={this.display}/>
          <Operation value='+' display={this.display}/>
        </div>
        <div className="row">
           <Number value='0' display={this.display}/>
           <Operation value='.' display={this.display}/>      
           <Operation value='=' display={this.display}/>
        </div>
      </div>
    );
  }
};

export default Calculator;