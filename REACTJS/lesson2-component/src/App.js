import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PhanTren from './components/Header';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>  
       <PhanTren/>
        <Product/>
    </div>
    
  );
   

}

export default App;
