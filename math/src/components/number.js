import '../App.css';
import React from 'react';


class Number extends React.Component{
  constructor(props){
    super(props);
    this.showMe = this.showMe.bind(this);
  }
  showMe(){
    this.props.display(this.props.value)
   
  }
  render(){
    return(
      <div className={(this.props.value === '0') ?
        'number zero': 'number'}
         onClick={this.showMe}>
        {this.props.value}
      </div>
    )
  }
}

export default Number;