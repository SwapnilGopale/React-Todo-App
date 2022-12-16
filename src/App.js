import { useState,useRef,useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from 'uuid';

const LOCAL_STORAGE_KEY = "todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const refTodoInput = useRef()

  useEffect(()=>{
    const storedTodoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodoList)setTodos(storedTodoList);
  },[])

  useEffect(()=>{
    if(todos.length)
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function handleAddTodo(e){
    const todoName = refTodoInput.current.value;
    if(todoName==="")return
    setTodos(prevTodo=>[...prevTodo,{id:uuid(),name:todoName,isCompleted:false}])
    refTodoInput.current.value = null
  }

  function handleTodoToggle(id){
    const newTodoList = [...todos];
    const todo = newTodoList.find(todo => todo.id===id);
    todo.isCompleted = !todo.isCompleted
    setTodos(newTodoList);
  }

  function handleClearTodo() {
    const newTodoList = [...todos].filter(e=>!e.isCompleted);
    setTodos(newTodoList);
  }
  return (
    <>
    <TodoList todos={todos} handleTodoToggle={handleTodoToggle} />
    <input ref={refTodoInput} type="text"/>
    <button onClick={handleAddTodo}>Add</button>
    <button onClick={handleClearTodo}>Clear Completed</button>
    <div>{todos.filter(e=>!e.isCompleted).length} items left Todo from {todos.length}</div>
    </>
  );
};

export default App;
