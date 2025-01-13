import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem'
export default function UncompletedTodos() {
    const todos=useSelector((state=>state.todoAPI.items))
    const unCompletedTodos=todos.filter((todo)=>!todo.completed)
  return (
    <div>
      <h2>Uncompleted Todos</h2>
      {unCompletedTodos?.map((todo)=> (<TodoItem key={todo.id} todo={todo} />))}
    </div>
  )
}

