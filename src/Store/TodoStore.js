import { writable } from 'svelte/store';

const todoPromise = new Promise(resolve => {
  fetch("https://jsonplaceholder.typicode.com/users/1/todos?_limit=5")
    .then(response => response.json())
    .then(json => resolve(json));
})

function deleteTodo() {

}

function takeTodos() {
  const { subscribe, set, update } = writable([]);

  todoPromise.then(res => {
    update(t => t = res);
  })

  return {
    subscribe,
    delete: (id) => update(todos => todos = todos.filter(todo => todo.id !== id))
  };
}

export const Todos = takeTodos();

