import React from 'react';
import '../App.css';

class Screen extends React.Component{
   
  render(){
    return (
      <input className="input" value={this.props.value}/>
    );
  }
}

export default Screen;