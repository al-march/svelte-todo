<script>
  import { Todos } from "../Store/TodoStore.js";
  import Filter from './filter/Filter.svelte';
  import TodoItem from "./TodoItem.svelte";
</script>

<style src="./todo.scss"></style>

<main>
  <p class="t-center">List of Todo</p>
  <Filter/>
  <br>

  {#if !$Todos.length}
    <p>No Todos...</p>
  {/if}

  <ul class="todo__list">
    {#each $Todos as todo, index}
      <TodoItem {todo} {index} />
    {/each}
  </ul>
</main>