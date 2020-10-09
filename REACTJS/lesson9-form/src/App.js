import React, { Component } from 'react';

import './App.css';

class App extends Component {
          constructor(props){
            super(props);
            this.state={
              txtname:"Nhập user",
              txtpassw:" Nhập pass",
              txtarea:" Nhập mô tả",
              txtselect: 1,
              rlang:"vi"   ,
               chkstt: true 
            } // state và name ở ô input nên có giá trị giống nhau
            
          }
          
     /* onHandleChange = (event)=> {
        //console.log(event.target.value);
        this.setState({
                username: event.target.value 
        });
      } //1 ô input thôi */
      
       
      xxyyzz= (xx)=>{
        if( xx.target.type=== "checkbox" ){
          return xx.target.checked
        }
        else {
          return xx.target.value
        }
      }
      onHandleChange = (event)=> {
        
        var target = event.target; // target đến từng ô input txtname, txtpassword
        var abc  = target.name; // mỗi ô input phân biệt = name
        // var xyz = target.type=== "checkbox" ? target.checked :target.value;
       /* var xyz =()=>{
          if( target.type=== "checkbox" ){
            return target.checked
          }
          else {
            return target.value
          }
        };*/
        var xyz = this.xxyyzz(event);
        
          
       
        this.setState({
          [abc]: xyz // thiết lập trạng thái ban đầu bằng với giá trị sau mỗi lần thay đổi ô input
        })
        
        }
     
      onHandleSubmit = (event)=>{
        event.preventDefault (); // chặn cái gì đấy
        console.log(this.state)
      }

      onabc = (event)=>{
        event.preventDefault ();
        console.log(this.state)
      }
render(){
  return (
    <div className="container mt-30">
      <div className="row">
        <div className="col-cs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-heading">
            <h3 className="panel-title">FORM</h3>
          </div>
          <div className="panel-body">
            
            <form onSubmit={this.onHandleSubmit}   >  
            <div className="form-group">
              <label >User name:</label>
              <input 
                type="text" 
                className="form-control"  
                placeholder="Enter " 
                name="txtname"
                value= {this.state.txtname}
                onChange={ this.onHandleChange}
                
                />
            </div>

            {/* <div className="form-group">
              <label >User name 2:</label>
              <input 
                type="text" 
                className="form-control"  
                placeholder="Enter " 
                name="txtname"
                value= {this.state.txtname}
                onChange={ this.onHandleChange}
                
                />
            </div> */}

            <div className="form-group">
              <label >Password:</label>
              <input 
                type="password" 
                className="form-control"  
                placeholder="Enter " 
                name="txtpassw"
                value= {this.state.txtpassw}
                onChange={ this.onHandleChange} // xài chung function onHandleChange vì 1 form có rất nhiều input,button...

                />
            </div>


          
            <div className="form-group">
              <label >Mô tả:</label>
              <textarea 
                className="form-control"
                rows="5" 
                name="txtarea"
                value= {this.state.txtarea}
                onChange={ this.onHandleChange}
                >

               </textarea>
            </div>

              <select
                className="form-control"
                name="txtselect"
                value= {this.state.txtselect}
                onChange= {this.onHandleChange}
                >
                <option value={1}>Nữ</option>
                <option value={2} >Nam</option>
            
              </select><br/>
              <label>
                Ngôn ngữ
              </label><br/>
              <div className="radio">
                <label>
                  <input 
                    type="radio" 
                    name="rlang"
                    value="en"
                    checked ={this.state.rlang}
                    onChange= {this.onHandleChange}/>Tiếng Anh
                </label>
                <label>
                  <input 
                  type ="radio"
                  name="rlang"
                  value="vi"
                  checked ={this.state.rlang}
                  onChange= {this.onHandleChange}/> Tiếng Việt
                </label>
              </div>
              
            <div className="checkbox">
              <label >
                <input 
                  type="checkbox" 
                  name="chkstt" 
                  value={true}
                  onChange= {this.onHandleChange}
                  checked = {this.state.chkstt === true }
                  />
                  Trạng thái
              </label>
                  
              
            </div>  
            
              <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
              <button type="reset" className="btn btn-default">Reset</button>
              <button  onClick={this.onabc} className="btn btn-default">Test</button>
              </form>
          </div>
        </div>
      </div>
    </div>
    
      


    
  
  );
}
}

export default App;
