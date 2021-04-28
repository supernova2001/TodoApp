import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'
import React,{useState} from 'react'
function App() {
  const [inputText,SetinputText]=useState("");
  const [todolist,setTodolist]=useState([]);
  return (
    <div className="App">
      <header>Todo App </header>
      <Form inputText={inputText}todolist={ todolist } setTodolist={ setTodolist } SetinputText={SetinputText}></Form>
      <Todolist todolist={todolist} setTodolist={setTodolist} inputText={inputText}></Todolist>
    </div>
  );
}

export default App;
