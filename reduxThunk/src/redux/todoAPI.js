const TODOS_API = "http://localhost:3000/todos";
import store from "./store";
export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "SET_TODOS_LOADING" });
  try {
    const response = await fetch(TODOS_API);
    const data = await response.json();
    console.log(data);
    dispatch({ type: "SET_TODOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "SET_TODOS_FAIL", error: error.message });
  }
};

export const addTodo = (task) => async (dispatch) => {
  dispatch({ type: "ADD_TODOS_LOADING" });
  try {
    const newTodo = { task, completed: false };
    const response = await fetch(TODOS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json(); //data now has an 'id' automatically generated by the server
    console.log(data);
    dispatch({ type: "ADD_TODO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ADD_TODO_FAIL", error: error.message });
  }
};

export const editTodo = (id, updates) => async (dispatch) => {
  dispatch({ type: "EDIT_TODO_LOADING" });
  try {
    // const editTodo = { id: id, task: updatedTitle, completed: false };
    const response = await fetch(`${TODOS_API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
      // body: JSON.stringify(editTodo),
    });
    //updates is an object containing only the fields to be changed. since it is a patch request
    //Toggling completed might pass { completed: !todo.completed }
    //Editing title might pass { task: newTitle }
    const data = response.json();
    console.log(data); //data is a promise, with {id:id, task:updatedTitle,completed: false)
    dispatch({ type: "EDIT_TODO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "EDIT_TODO_FAIL", error: error.message });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_TODO_LOADING" });
  try {
    await fetch(`${TODOS_API}/${id}`, { method: "DELETE" });
    dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_TODO_FAIL", error: error.message });
  }
};

export const removeChecked = () => async (dispatch) => {
  dispatch({ type: "REMOVE_LOADING" });
  try {
    const state = store.getState();
    const completedTodos = state.todoAPI.items.filter((t) => t.completed);
    await Promise.all(
      completedTodos.map((todo) =>
        fetch(`${TODOS_API}/${todo.id}`, {
          method: "DELETE",
        })
      )
    );
    // If all deletes succeed, dispatch success action
    dispatch({ type: "REMOVE_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REMOVE_FAIL", error: error.message });
  }
};
