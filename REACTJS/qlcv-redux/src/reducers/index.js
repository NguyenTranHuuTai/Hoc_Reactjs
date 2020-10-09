import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from "./isDisplayForm";
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search'

const myReducer= combineReducers({
    tasks: tasks,
    isDisplayForm : isDisplayForm,
    itemEditing,
    filterTable,
    search,

}); // tổng hợp các reducer con từ combineReducer
// task trái như là 1 props truyền ra cho component cần xài . còn tasks phải là từ import vào của các reducer con mà có
export default myReducer;