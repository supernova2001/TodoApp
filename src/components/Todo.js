import React from 'react'
import Button from '@material-ui/core/Button'

const Todo=({text,todolist,setTodolist,todo})=>{
    const deleteHandler=()=>{
         setTodolist(todolist.filter(el=> el.id!==todo.id))
            console.log(todo)
        }
    return (
        <div className="todo">
            <li className="todo-item">{ text }</li>
            <button className="complete-btn" ><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo