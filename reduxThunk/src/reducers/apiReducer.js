const initialState = {
  items: [],
  loading: false,
  error: null,
};
export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    //fetch
    case "SET_TODOS_LOADING":
      return { ...state, loading: true, error: null };
    case "SET_TODOS_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "SET_TODOS_FAIL":
      return { ...state, loading: false, error: action.error };

    //add
    case "ADD_TODO_LOADING":
      return { ...state, loading: true, error: null };
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case "ADD_TODO_FAIL":
      return { ...state, loading: false, error: action.error };

    //edit
    case "EDIT_TODO_LOADING":
      return { ...state, loading: true, error: null };
    case "EDIT_TODO_SUCCESS": {
      return {
        ...state,
        loading: false,
        items: state.items.map((todo) =>
          {return todo.id === action.payload.id ? updated : todo}
        ),
      };
    }
    case "EDIT_TODO_FAIL":
      return { ...state, loading: false, error: action.error };

    //delete
    case "DELETE_TODO_LOADING":
      return { ...state, loading: true, error: null };
    case "DELETE_TODO_SUCCESS":
      return {...state, loading:false, items:state.items.filter((todo) => todo.id !== action.payload)}
    case "DELETE_TODO_FAIL":
      return { ...state, loading: false, error: action.error };

        //removeAll
    case 'REMOVE_LOADING':
      return {...state, loading: true};
    case "REMOVE_SUCCESS":
      return {...state, loading: false, items:state.items.filter((todo)=>!todo.completed)}
    case "REMOVE_FAIL":
      return {...state, loading: false, error: action.error}
    default:
      return state;
  }
}
