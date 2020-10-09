import status from "./status"
import sort from "./sort"
import {combineReducers} from "redux"

const myreducer = combineReducers({
    status : status,
    sort : sort
}) // trả ra ngoài
   
  export default myreducer;