
import * as types from './../constants/ActionTypes';
var id="";
var index = 0;
var s4 = () => {
    return Math.floor((1+ Math.random())* 0x10000).toString(16).substring(1);
}
var GenerateID =()=>{
    return s4() + s4()+ "-"+ s4()+ "-"+ s4()+ "-"+ s4()+ "-"+s4()+s4()+s4();
}

var data =JSON.parse(localStorage.getItem('taskss'));
var initialState = data ? data : [];

var findIndex=(task,id)=>{
    var result = -1;
    task.map((task, index)=>{
            if(task.id === id){             
                result = index;   
                     
            }           
            
    });
    return result;      
}

var myReducer = (state= initialState,action)=>{
    switch(action.type){
        case types.LIST_ALL :  return state;

        
        case types.ADD_TASK: 
            var newTask= {
                id: action.task.id,
                name: action.task.name,
                status : action.task.status 
            };
            console.log(newTask.status);
            if(!newTask.id){
                newTask.id=GenerateID();
                state.push(newTask);
            }
            else{
                index=findIndex(state,newTask.id);
                state[index]=newTask;
            }
            // var newTask= {
            //     id: GenerateID(),
            //     name: action.task.name,
            //     status : action.task.status ==="true"? true : false
            // };
            // state.push(newTask);

        
           
            localStorage.setItem("taskss",JSON.stringify(state));
             return [...state];



        case types.UPDATE_STATUS :
      
            
             id= action.id;
             index = findIndex(state,id);
            //state[index].status = !state[index].status;
            state[index]={
                ...state[index],
                status : !state[index].status
            }
           
                 localStorage.setItem("taskss",JSON.stringify(state));
            
      
                 return [...state];

        case types.DELETE_TASK:
             id = action.id;
             index = findIndex(state,id);
         
               if(index !== -1){
                     state.splice(index,1);
                     
                     localStorage.setItem("taskss",JSON.stringify(state));
                }
                return [...state];
            
        default : return state;
    }
  
}
export default myReducer;