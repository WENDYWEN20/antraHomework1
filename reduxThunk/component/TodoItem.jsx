import React, { useState } from "react";
import { editTodo, deleteTodo } from "../src/redux/todoAPI";
import { useDispatch } from "react-redux";
export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.task);
  const dispatch = useDispatch();
  const handleCheckbox = () => {
    dispatch(editTodo(todo.id, { completed: !todo.completed }));
  };

  function handleEditSave() {
    dispatch(editTodo(todo.id, { task: editTitle }));
    setIsEditing(false);
  }

  const toggleComplete = () => {
    dispatch(editTodo(todo.id, { completed: !todo.completed }));
  };
  return (
    <div key={todo.id}> Todo Item
        {isEditing ? (
          <div>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button onClick={handleEditSave} type='submit'>Save</button>
          </div>
        ) : (
          <div>
          <input
          type="checkbox"
          checked={todo.completed}
          onClick={handleCheckbox}
        />
          <span tyle={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.task}
          </span> 
          
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          DELETE
        </button>
        </div> )}
      <div style={{backgroundColor:'pink'}}>status: {todo.completed ? 'completed' : 'not completed'}
      {todo.completed ? (
        <button onClick={toggleComplete}>Mark As Incomplete</button>
      ) : (
        <button onClick={toggleComplete}>Complete</button>
      )}
    </div>
    </div>
  );
}
