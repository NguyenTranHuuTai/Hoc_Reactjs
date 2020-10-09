import React, { Component } from 'react';
import {connect} from'react-redux';
import * as actions from './../actions/index'


class  Taskform extends Component {
    constructor(props){
        super(props);
        this.state={
            id: "",
            name:"",
            status: false

        }
    }
    componentWillMount(){
        if(this.props.itemEditing && this.props.itemEditing.id!== null){

            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status,
            })
            }else{
                this.onClear();
            //console.log(this.state);
        }
    }
    componentWillReceiveProps(nextprops){
     
        if(nextprops && nextprops.itemEditing){
         
            this.setState({
                id: nextprops.itemEditing.id,
                name: nextprops.itemEditing.name,
                status: nextprops.itemEditing.status,
            })
            //console.log(this.state);
        }else if (!nextprops.itemEditing){
           
           this.setState({
                id: "",
                name:"",
                status: false
           });
        }
    }
    onChange=(event)=>{
        var target= event.target;
        var name = target.name;
        var value = target.value;
        if(name === "status"){
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name] : value
        })
        
    }
    onSubmit=(event)=>{
        
        event.preventDefault();

       
       this.props.onAddTask(this.state); 

       
        this.onCloseForm();

    }
    onCloseForm=()=>{
        this.props.onCloseForm();
        
    }
    onClear=()=>{
        console.log("onClear");
        this.setState({
            name:'',
            status: false
        })
       // this.onCloseForm();
    }
  render(){
   
      if(!this.props.isDisplayForm) return null;
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    
               {this.state.id !== ""? "Cập nhật công việc" : "Thêm Công Việc"}
                
                    <span 
                    className="fa fa-times-circle  text-right"
                    onClick={this.onCloseForm}
                    ></span>
                
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit= {this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                        type="text"
                         className="form-control" 
                         name="name"
                         value={this.state.name}
                         onChange={this.onChange}
                         />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                    className="form-control"
                     
                     name="status"
                     value={this.state.status}
                     onChange={this.onChange}
                     >
                        <option value="true">Kích Hoạt</option>
                        <option value="false">Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button
                            type="button" 
                            className="btn btn-danger"
                            onClick= {this.onClear}

                         >Hủy Bỏ</button>
                    </div>
                </form>
            </div>
    </div>
    );
          }
}
const mapStateToProps=(state)=>{
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
            onAddTask : (task)=> {
                console.log(task);
                dispatch(actions.addTask(task));
            },// onAddTask như là 1 props để trên render ra
            onCloseForm: ()=>{
                dispatch(actions.closeForm());
            },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Taskform);
