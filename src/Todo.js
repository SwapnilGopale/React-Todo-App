import React from 'react'

export default function Todo({todo,handleTodoToggle}) {
  function handleTodoCheck(){
    handleTodoToggle(todo.id)
  }
  return (
    <div>
        <input type="checkbox" checked={todo.isCompleted} onChange={handleTodoCheck}/>
        <label>
        {todo.name}
        </label>
    </div>
  )
}
