var initialState= false;
   
  
   

  var myreducer = (state = initialState, action )=>{
    if(action.type=== 'TOGGLE_STATUS'){
      state =! state;
    }

    return state;
  }
  export default myreducer;