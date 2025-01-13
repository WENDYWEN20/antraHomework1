import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem'
export default function CompletedTodos() {
    const todos=useSelector((state=>state.todoAPI.items))
    const completedTodos=todos.filter((todo)=>todo.completed)
  return (
    <div>
      <h2>Completed Todos</h2>
      {completedTodos?.map((todo)=> (<TodoItem key={todo.id} todo={todo} />))}
    </div>
  )
}
