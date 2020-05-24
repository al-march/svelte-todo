import { writable } from 'svelte/store';

const todoPromise = new Promise(resolve => {
  fetch("https://jsonplaceholder.typicode.com/users/1/todos?_limit=5")
    .then(response => response.json())
    .then(json => resolve(json));
})

function takeTodos() {
  let initialTodos = [];
  const { subscribe, set, update } = writable([]);

  todoPromise.then(res => {
    update(t => t = res);
    initialTodos = res;
  })

  return {
    subscribe,
    delete: (id) => update(todos => {
      initialTodos = initialTodos.filter(todo => todo.id !== id)
      return initialTodos
    }),
    create: (todo) => update(() => {
      initialTodos.unshift(todo)
      return initialTodos
    }),
    filtered: (search) => update(todos => todos = initialTodos.filter(todo => todo.includes(search))),
    resetFilters: () => set(initialTodos)
  };
}

export const Todos = takeTodos();

