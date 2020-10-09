import React, { Component } from 'react';
 
 

class SizeSetting extends Component {
   
   
  changeSize(value){
    //console.log(value);// kiểm tra xem value co phải là -2/+2 khi click vào 2 nút tăng giảm
    this.props.onchangesize(value);
  }
 
  render(){
    return (
         
            <div className="card" > 
                <div className="card-header">
                   <h3 className="card-title">Size: {this.props.fontsize} px</h3> 
                 
                </div>
               <div className="card-body" >
                    <button className="btn btn-success" type="button" onClick={()=>this.changeSize(-2)}>Giảm</button>&nbsp;
                    <button className="btn btn-success" type="button"onClick={()=>this.changeSize(+2)}>Tăng</button>
                </div> 
               
            </div>
           
        
    );
  }    
  }
  

export default SizeSetting;
