import React, { useState } from "react";
import { editTodo, deleteTodo } from "../src/redux/todoAPI";
import { useDispatch } from "react-redux";
export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.task);
  const dispatch = useDispatch();
  const handleCheckbox=()=>{
    dispatch(editTodo(todo.id, {completed:!todo.completed}))
  }
 
  function handleEditSave() {
    dispatch(editTodo(todo.id, {task: editTitle}));
    setIsEditing(false);
  }

  return (
    <div>
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckbox}
        />
        {isEditing ? (
          <div>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
          <button onClick={handleEditSave}>Save</button>
          </div>
        ) : (
          <span style={{textDecoration: todo.completed? 'line-through': 'none'}}>{todo.task}</span>
        )}
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          style={{ marginLeft: "4px" }}
        >
          X
        </button>
      </li>
    </div>
  );
}
