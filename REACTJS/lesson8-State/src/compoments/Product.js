import React, { Component } from 'react';
 

class Product extends Component {
  constructor(props){
    super(props);
    this.onAddToCart1=this.onAddToCart1.bind(this);
  }
  onAddToCart1(){
    alert(this.props.children+" "+this.props.price);
 }
 onAddToCart2= () => {
  alert(this.props.children+" "+this.props.price);
}
onAddToCart3(y){
  alert(y);
}
 
  render(){
    return (
      <div className="Product">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image} alt={this.props.children} />
            <div className="caption">
              <h3>{this.props.children} </h3>
              <p>{this.props.price}</p> 
              <button className="btn btn-primary" onClick={ this.onAddToCart1}>
                Mua Ngay không tham số dùng bind </button> <br/>
              <button className="btn btn-primary" onClick={ this.onAddToCart2}>
                Mua Ngay không tham số dùng arow function </button>
                <button className="btn btn-primary" onClick={ () => this.onAddToCart3("Truyền tham số"+" "+this.props.children)}>
                Mua Ngay có tham số dùng arow function </button>
            </div>
            
          </div>
         
        </div>
         
      </div>
    );
  }
  
}

export default Product;
