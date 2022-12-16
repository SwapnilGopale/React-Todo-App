import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,handleTodoToggle}) {
  return (
   todos.map(todo=>{
    return <Todo key={todo.id} todo = {todo} handleTodoToggle={handleTodoToggle}/>
   })
  )
}
