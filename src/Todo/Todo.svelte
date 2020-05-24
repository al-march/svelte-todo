<script>
import { Todos } from "../Store/TodoStore.js";
import TodoItem from "./TodoItem.svelte";

function showTodo() {
  console.log($Todos);
  
}
</script>

<main>
  <p>Список тудушек</p>
  <button on:click={showTodo}>Вывести в консоль</button>
  <ul>
    {#each $Todos as todo, index}
      <TodoItem {todo} {index} />
    {/each}
  </ul>
</main>