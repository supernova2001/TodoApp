import React from 'react'
import Todo from './Todo'

const Todolist=({todolist,setTodolist,inputText})=>{
    return(
        <div className="react-container">
            <ul className="todo-list">
                {todolist.map((todo)=>(
                    <Todo key={todo.id} todo={todo} setTodolist={ setTodolist } todolist={todolist} text={todo.text} inputText={inputText}></Todo>
                ))}
            </ul>
        </div>
    )
}

export default Todolist