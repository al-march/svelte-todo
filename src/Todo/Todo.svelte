<script>
import { Todos } from "../Store/TodoStore.js";
import TodoItem from "./TodoItem.svelte";

function showTodo() {
  console.log($Todos);
  
}
</script>

<style src="./todo.scss"></style>

<main>
  <p class="t-center">List of Todo</p>
  <ul class="todo__list">
    {#each $Todos as todo, index}
      <TodoItem {todo} {index} />
    {/each}
  </ul>
</main>