import * as types from './../constants/ActionTypes';
export const listAll = ()=> {
    return{
        type:types.LIST_ALL
    }
};
export const addTask = (task)=>{
    return {
        type: types.ADD_TASK, 
        task:task,
        
    } // type và tasks sẽ hiện ra ngoài . còn para task là nhận được từ component truyền qua
    // task bên trái sẽ được gọi từ thằng reducer (reducer con)
    
};

export const toggleForm =()=>{
    return {
        type : types.TOGGLE_FORM,
    }
};
export const openForm =()=>{
    return {
        type : types.OPEN_FORM,
    }
};
export const closeForm =()=>{
    return {
        type : types.CLOSE_FORM,
    }
};
export const updateStatus = id =>{
    return {
        type : types.UPDATE_STATUS,
        id : id,
    }
};
export const deleteTask = id =>{
    return{
        type: types.DELETE_TASK,
        id,
    }
};
export const editTask = task =>{
    return{
        type :types.EDIT_TASK,
        task,
    }
};
export const filterTask = filter =>{
    return{
        type :types.FILTER_TABLE,
        filter,
    }
};
export const searchTask = keyword =>{
    return{
        type :types.SEARCH,
        keyword,
    }
};// tham so keyword kieu string