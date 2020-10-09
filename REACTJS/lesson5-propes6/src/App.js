import React, { Component } from 'react';
import './App.css';
import Product from'./compoments/Product';

class App extends Component {
  
  render(){
    var obj = [
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
        id:3,
        name:'Nokia',
        price:'3000000',
        status: true,
        image:"https://cdn.tgdd.vn/Products/Images/42/207650/nokia-72-black-600x600.jpg"
      }
    ];
    
    var elementP = obj.map((a,index) =>{
     
      return(
              <Product 
                image={a.image}
                price={a.price}
              >
                {a.name}
                </Product>)    
                
            });  
     
     
    return (
              <div className="App">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" ><h1>Props</h1></a>
                    </div>
                  </div>
                </nav>
                <div className="container"> 
                  <div className="row">
                    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {elementP}
                    </div>
                  </div>         
                </div>
              </div>
    );
  }
  
}

export default App;
