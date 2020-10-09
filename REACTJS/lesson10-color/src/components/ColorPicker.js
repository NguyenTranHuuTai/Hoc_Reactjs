import React, { Component } from 'react';
 
 

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state={
            colors: [
                'red',
                'green',
                'blue',
                '#ccc',
            ]
        };  
    }
    // trạng thái tại app Component

    showC(a){
         
        return{
            backgroundColor: a
        };// trả về màu nên thẻ span là màu được truyền vào
    }
    setActiveC  (a)  {
         this.props.onreceive(a); // nhận thuộc tính từ App Component truyền vào
    } 
    classActive(a){
        if(this.props.colorapp=== a)
        {
           return "active"
        }
       
           return " "
      
    }// trả về giá trị cho classname
      
render(){

   var elementC =this.state.colors.map((a,index) => {
       return <span  
       key= {index} 
       style= {this.showC(a)} //gọi function showC 
       // className= { this.props.colorapp === a? "active": " " } // Nếu màu ở app Component trùng với màu được truyền vào thì sẽ có class là active được định nghĩa ở App.css
       className= {this.classActive(a)}
       onClick= {  ()=>  this.setActiveC(a)}
        >

       </span>
        
   });
    return (
        <div className="col-6" >
            <div className="card" >
                <div className="card-header">
                    <h3 className="card-title" >Color Picker</h3>
                </div>
                <div className="card-body" >
                    {elementC}
                    <hr/>
                </div>
            </div>
      </div>
      );
    }
}
 

export default ColorPicker;
