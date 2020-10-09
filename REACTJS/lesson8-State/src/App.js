import React, { Component } from 'react';
import './App.css';
import Product from'./compoments/Product';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      obj:[
        {
          id:1,
          name:'Samsung',
          price:'10000',
          status: true,
          image: "https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/600_samsung-galaxy-a71-5g.jpg"
        },
        {
          id:2,
          name:'Apple',
          price:'5000000',
          status: true,
          image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXYJ2?wid=532&hei=582&fmt=png-alpha&qlt=80&.v=1585361639136"
        },
        {
          id:3,
          name:'Oppo',
          price:'8500000',
          status: true,
          image:"https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-400x460-1-400x460.png"
        },
        {
          id:4,
          name:'Nokia',
          price:'3000000',
          status: true,
          image:"https://cdn.tgdd.vn/Products/Images/42/207650/nokia-72-black-600x600.jpg"
        }

      ],
      isActive: true
    };
  }
  onSetState= ()=>{
    /*if(this.state.isActive== true){
      this.setState({
        isActive:false
      });
    }
      else{
        this.setState({
          isActive:true
        })
      } */
       this.setState({
        isActive:!this.state.isActive
      });
  }
  render(){  
    var elementP = this.state.obj.map((a,index) =>{
      let x='';
      if(this.state.isActive )
        {
          return(   
            <tr>
              <td>{index}</td>
              <td>{a.name}</td>
              <td>
                <span className="label-success">{a.price}</span>
              </td>
            </tr>   
        )}
      else
        {
          return x
        }
            });  
     
     
    return (
              <div className="App">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" ><h1>State</h1></a>
                    </div>
                  </div>
                </nav>
                <div className="container"> 
                  <div className="row">
                    <div className="row">
                      <table className="table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                          </tr>
                        </thead>
                        <tbody>
                          {elementP}
                        </tbody>
                      </table>
                      <button type="button" className="btn-warning" onClick={this.onSetState}>
                        Active:{this.state.isActive == true? 'true':'false'}
                        </button>
                    </div> 
                  </div>         
                </div>
              </div>
    );
  }
  
}

export default App;
