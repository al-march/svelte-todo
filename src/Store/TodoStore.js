import { writable } from 'svelte/store';

const todoPromise = new Promise(resolve => {
  fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then(response => response.json())
    .then(json => resolve(json));
})

function takeTodos() {
  let initialTodos = [];
  const { subscribe, set, update } = writable([]);

  todoPromise.then(res => {
    set(res);
    initialTodos = res;
  })

  return {
    subscribe,
    delete: (id) => update(() => {
      initialTodos = initialTodos.filter(todo => todo.id !== id)
      return initialTodos
    }),
    create: (todo) => update(() => {
      initialTodos.unshift(todo)
      return initialTodos
    }),
    filtered: (search) => update(() => initialTodos.filter(todo => todo.title.includes(search))),
    resetFilters: () => set(initialTodos)
  };
}

export const Todos = takeTodos();

