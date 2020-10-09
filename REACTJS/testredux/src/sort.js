var initialState={
  
    
      by: "status",
      value :1
  
  }

  var myreducer = (state = initialState, action )=>{
   
    if(action.type==="SORT"){
      var {value,name}= action.e; 
     
      return {
        value,name
    }
   
    }

    return state;
  }
  export default myreducer;