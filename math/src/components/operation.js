import '../App.css';
import React from 'react';

class Operation extends React.Component{
  constructor(props){
    super(props);
    this.showMe = this.showMe.bind(this);
  }
  showMe(){
    this.props.display(this.props.value)   
  }
   getClassName(value){
    if(value === 'AC'|| value === '+/-'||value === '%'){
      return 'button dot';
    }else if(value === '.'){
      return 'button';
    }else{
      return 'button';
    }
  }
  render(){
    return(
      <div className={this.getClassName(this.props.value)} onClick={this.showMe}>
        {this.props.value}</div>
    )
  }
}

export default Operation;