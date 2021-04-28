import React from 'react'

const Form =({ inputText,SetinputText, todolist,setTodolist })=>{
    const inputTextHandler = (e)=>{
        console.log(e);
        SetinputText(e.target.value);
    }
    const todoHandler=(e)=>{
        e.preventDefault()
        setTodolist([...todolist,{text: inputText, id: Math.random()*1000} 
        ]);
    }
    return(
        <form>
      <input value={ inputText }onChange={inputTextHandler}type="text" className="todo-input" />
      <button onClick={ todoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form