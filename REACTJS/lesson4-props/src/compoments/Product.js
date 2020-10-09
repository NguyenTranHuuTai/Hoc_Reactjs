import React from 'react';

 function Product(props) {
  
  return (
     
    <div className ="Product">
       
                    <h3 >
                     {props.name}
                    </h3>
                    <p> 
                     { props.price}
                    </p>
                    <p>
                        <a className="btn btn-primary">Mua ngay</a>
                    </p>
               
    </div>   
        
     
  );
}

export default Product;
