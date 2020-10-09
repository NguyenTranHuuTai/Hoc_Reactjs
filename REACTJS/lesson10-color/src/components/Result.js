import React, { Component } from 'react';
 
 

class Result extends Component {
  setStyle(){
  //console.log(this.props.colorapp)
  return{
    color: this.props.colorapp,
    boderColor: this.props.colorapp,
    fontSize: this.props.fontsize
  }
  }
  render(){
    return (
        <div className="col-12">
        <p>Color : {this.props.colorapp} - Fontsize : {this.props.fontsize}px</p>
        <div className="content" style={ this.setStyle()}  >
          Nội dung setting
        </div>
      </div>
    );
  }    
  }
  

export default Result;
