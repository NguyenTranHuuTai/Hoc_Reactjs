import React, { Component } from 'react';
import Taskitem from './Taskitem';
import {connect} from 'react-redux';
import * as action from './../actions';




class  Tasklist extends Component {
    constructor(props){
        super(props);
        this.state={
            filterName : "",
            filterStatus : -1
        }
    }
   onChange =(event)=>{
       var target = event.target;
       var name = target.name;
       var value = target.value;
       
     /* var a = () =>{
       // console.log(this.state.filterName,this.state.filterStatus);
        this.props.onFilter(
             name === "filterName" ? value : "th1" ,
            name === "filterStatus" ? value : "th2"
         );
    };
    setTimeout(a,5000);*/
       this.setState({
            [name]: value,
       });

    var filter={
        name: name === "filterName" ? value : this.state.filterName,
        status : name === "filterStatus" ? value : this.state.filterStatus
    }
    this.props.onFilterTable(filter);
          
   }
  render(){
     
    var tasks = this.props.tasks;  
    var filterTable = this.props.filterTable;
    var keyword = this.props.keyword;
     
      
        if(filterTable.name){
           tasks= tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            });
        }
        console.log(filterTable.status);
      
            tasks = tasks.filter((task)=>{
                if(filterTable.status === -1)
                return task
                else{
                    return task.status=== (filterTable.status === 1 ? true : false)
                }
            });
        
      console.log(this.props.keyword);
   
        
           tasks= tasks.filter((a)=>{
                return a.name.toLowerCase().indexOf(keyword) !== -1
            });
        
    
     
      var elmTasks =tasks.map((task,index)=>{
          return <Taskitem 
          key = {task.id}
          index ={index}
          a = {task} // thuộc a truyền từ TaskList sang TaskItem
      
          />
      })
    return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                             
                            <td>
                                <input
                                 type="text"
                                 className="form-control"
                                 name = "filterName"
                                 value = {this.state.filterName}
                                 onChange={this.onChange}
                                  />
                            </td>
                            <td>
                                <select
                                 className="form-control"
                                 name= "filterStatus"
                                 value = {this.state.filterStatus}
                                 onChange={this.onChange}
                                 >
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                       {elmTasks}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
          }
}
 const  mapStateToProps = (state)=>{
    return{
         tasks : state.tasks,
         filterTable: state.filterTable,
         keyword : state.search
    }
 }; // thằng tasks bên trái như là  1 props sẽ được gọi ra trong render phía trên
 //  tasks bên phải được gọi từ state.tasks lây từ reducer tổng . State là 1 para trong  thằng reducer tổng
 const mapDispatchToProps = (dispatch,props)=>{
    return {
        onFilterTable : filter =>{
            console.log(filter);
            dispatch(action.filterTask(filter));
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Tasklist);
