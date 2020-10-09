import React, { Component } from 'react';
 
 

class Product extends Component {
  render(){
    return (
      <div className="Product">
        <div className= "row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
              <img src={this.props.image} alt={this.props.children} />
              <div className="caption">
                <h1>{this.props.children} </h1>
                <h1>{this.props.price}</h1>
                <button className="btn btn-primary">Mua Ngay </button>
              </div>
            </div>
          </div>  
        </div>
         
      </div>
    );
  }
  
}

export default Product;
