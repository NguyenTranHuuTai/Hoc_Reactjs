import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';




class  Taskitem extends Component {
    onUpdateStatus=()=>{
       
       this.props.onUpdateStatus( this.props.a.id);
    }
    onDelete=()=>{
  
        this.props.onDeleteTask(this.props.a.id); 
        this.props.onCloseForm();

    }
    onFix=()=>{
      
       
        this.props.onOpenForm();
        this.props.onEditTask(this.props.a);
    }
   
  render(){
       var a= this.props.a;
     
       var {index}= this.props;
    return (
        <tr>
            <td>{index+1}</td>
            <td>{a.name}</td>
            <td className="text-center">
                <span 
                className={a.status=== true? "label label-danger": "label label-success" }
                onClick={this.onUpdateStatus}
                >
                {a.status=== true? "Kích hoạt": "ẩn" }
                        </span>
            </td>
            <td className="text-center">
                <button 
                    type="button"
                    className="btn btn-warning"
                    onClick={this.onFix}
                 >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onDelete} >
                    <span 
                        className="fa fa-trash mr-5"
                         
                     ></span>Xóa
                </button>
            </td>
        </tr>
    );
          }
}
const mapStateToProps = (state)=>{
    return {
     
    };
};
const mapDispatchToProps = (dispatch,props)=>{
    return {
        onUpdateStatus :(id)=>{
         
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask : (id)=>{
          
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: ()=>{
            dispatch(actions.closeForm());
        },
        
        onOpenForm : ()=>{
            dispatch(actions.openForm())
        },
        onEditTask : (task)=>{
            dispatch(actions.editTask(task))
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (Taskitem);
