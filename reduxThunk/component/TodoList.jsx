import React, { useState, useEffect } from "react";
import { fetchTodos, addTodo, removeChecked} from "../src/redux/todoAPI";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from './TodoItem.jsx'
export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todoAPI);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  //handle adding a new todo
  const submitAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };
  const removeAll=()=>{
    dispatch(removeChecked())
  }
  //render each todo using a sub-component
  function renderTodos(){
    return items.map((todo)=>(
        <TodoItem key={todo.id} todo={todo}/>)
    )}
  return (
    <div>
      <h1>TODO List</h1>
      <div>
        <form onSubmit={submitAdd}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add New Todo</button>
        </form>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

        {renderTodos()}

      <div style={{ color: 'red' }}>
        {items.filter((t) => t.completed).length} of {items.length} tasks done
        <br />
        <button onClick={removeAll}>Remove All Completed</button>
      </div>
    </div>
  );
}
