import { createStore } from 'redux';

function todoReducer(state = { todos: JSON.parse(localStorage.getItem('todos')), searchValue: '' }, action) {
  switch (action.type) {
    case 'add':
      state.todos.push(action.todo);
      return { ...state };
    case 'delete':
      state.todos = state.todos.filter((elm) => elm.name !== action.name);
      return { ...state };
    case 'toggle':
      state.todos.map((elm) => {
        if (elm.name === action.name) {
          elm.isDone = !elm.isDone;
        }
        return elm;
      });
      return { ...state };
    case 'search':
      return { ...state, searchValue: action.search };
    default:
      return state;
  }
}

let store = createStore(todoReducer);

export default store;
