import * as types from './ActionType'
export const status = ()=>{
    return {
        type : types.TOGGLE_STATUS
    }   
}
export const sort =(a)=>{
    return {
        type: types.SORT,
       e : a
    }
}