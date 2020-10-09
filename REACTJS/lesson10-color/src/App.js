import React, { Component } from 'react';
 
import './App.css';
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import SizeSetting from "./components/SizeSetting";
import Result from "./components/Result";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      colorapp  : 'red', 
      fontsize : 12

    };
     this.onChangeSize=this.onChangeSize.bind(this);
  }// trạng thái của AppComponent 
  onSetingC=(b)=>{
     // console.log(b);
    this.setState({
      colorapp : b 
    }); // Khi bắt Event click vào color khác thì funtion onSeting này yêu cầu thiết lập lại trạng màu tương ứng với ColorPicker con gửi sang. Sau đó App sẽ truyền lại cho con màu đó và kiểm tra nếu trùng khớp màu gửi sang thì kích hoạt class là Active
  }// nhận color từ ColorPicker component con qua 1 function là onSetingC
   // khi click vào các ô span color thì các màu tương ứng sẽ hiện ra nếu log để check xem có lấy được màu từ ColorPicker hay không

   onChangeSize (value) {
    //console.log(value); //kiểm tra xem có nhận được giá trị +2/-2 từ SizeSetting component con truyền sang
    if(this.state.fontsize + value >=8 && this.state.fontsize + value <=36)
    this.setState({
      fontsize : this.state.fontsize + value
    })
   }
   onSettingDefault=(value)=>{
    if(value)
    this.setState({
      colorapp : 'red',
      fontsize: 12
    })
   }
  render(){

    return (
      <div className="container mt-50">
        <div className="row">
          
            <ColorPicker 
              colorapp  ={this.state.colorapp }
              onreceive= {this.onSetingC}
             >
             </ColorPicker>   {/* truyền cho Component ColorPicke các thuộc tính */ }

            <div className="col-6">

              <SizeSetting 
              fontsize={this.state.fontsize}
              onchangesize={this.onChangeSize}
              ></SizeSetting>

              <Reset onsettingdefault={this.onSettingDefault}></Reset>
            </div>
            
            <Result
            colorapp = {this.state.colorapp}
            fontsize ={this.state.fontsize}
            ></Result>

        </div>
        
      </div>
    );
  }    
  }
  

export default App;
