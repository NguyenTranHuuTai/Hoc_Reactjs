import React, { Component } from 'react';
 
 

class Reset extends Component {
    /*constructor(props){
        super(props);
         
         this.onReset=this.onReset.bind(this);
    }*/
    onReset = (a) =>  {
         this.props.onsettingdefault(true);
    }
    render(){
        return (
            <button
             className="btn btn-primary" 
             type="button" 
             onClick={ this.onReset }>Reset</button>
          );
        }
    }
  

export default Reset;
