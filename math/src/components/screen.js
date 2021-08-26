import React from 'react';
import '../App.css';

class Screen extends React.Component{
  render(){
    return (
      <div className="input">{this.props.value}</div>
    );
  }
}

export default Screen;