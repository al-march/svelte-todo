<script>
  import { Todos } from "../Store/TodoStore.js";

  export let todo;
  export let index;
</script>

<style src="./todo.scss"></style>

<div class="todo__item">
  <div class="todo__content" class:completed="{todo.completed}">
    <input class="todo__check" type="checkbox" bind:checked={todo.completed}>
    <strong class="todo__index">{index}</strong>
    <p>{todo.title}</p>
  </div>
  <button class="btn-icon" on:click={Todos.delete(todo.id)}>&times;</button>
</div>
