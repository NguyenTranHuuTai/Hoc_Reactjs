import React, { Component } from 'react';

import './App.css';

import {createStore} from 'redux'
import { status,sort} from "./Action"
import myreducer from "./reducer"



class App extends Component {
 
  render(){
    // tạo 1 state
   
    // 1 store chứa myreducer
    const store = createStore(myreducer);
    
    console.log( "Default :", store.getState());
    // action thay đổi trạng thái
    //var action = {type: "TOGGLE_STATUS"};
    store.dispatch(/* action*/status());
    console.log("TOGGLE_STATUS:",store.getState());

   /* var sortAction ={
      type: "SORT",
      sort :{
        by: "name",
        value: -1
      }
    }*/ 
    store.dispatch(/*sortAction*/sort({
       name: "name",
        value: -1
    }

    ));
   console.log("SORT:",store.getState());

   
  return (
    <div className="App">
      
    </div>
  );
}
}

export default App;
