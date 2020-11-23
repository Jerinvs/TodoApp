import React, { Component } from 'react';
import "./Todo.css";

 class Todo extends Component {
     constructor(props){
         super(props)
         this.state={
             textbox:"",
             todolist:[]
         }
        
     }
     
     textchange=(e)=>{
         this.setState({textbox:e.target.value})

     }

     addtodo=()=>{
         let currenttext=this.state.textbox;
         let currenttodo=this.state.todolist;
         currenttodo.push(currenttext);
         this.setState({todolist:currenttodo});
     }

     deletetodo=(k)=>{
        let currenttodo=this.state.todolist;
        currenttodo.splice(k,1);
        this.setState({todolist:currenttodo})

     }
    render() {
        return (
            <div className="todo-container">
                <h1>To Do!!</h1>

                <div className="inputbox">
                    <input type="text" placeholder="write here" onChange={this.textchange} required></input>
                    <button type="submit" onClick={this.addtodo}>Add Task</button>
                </div>

                <ul>
                    {this.state.todolist.map((item,k)=>{
                        return(
                            <li>{item}<i className="fas fa-trash-alt" onClick={()=>{this.deletetodo(k)}}></i></li>

                        )
                    })}
                   
                </ul>
            </div>
        )
    }
}
export default Todo;


