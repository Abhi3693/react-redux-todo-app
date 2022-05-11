export function addTodo(todo) {
  return {
    type: 'add',
    todo,
  };
}

export function deleteTodo(name) {
  return {
    type: 'delete',
    name,
  };
}

export function handleIsDone(name) {
  return {
    type: 'toggle',
    name,
  };
}

export function search(val) {
  return {
    type: 'search',
    search: val,
  };
}
