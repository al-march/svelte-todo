<script>
	import { Todos } from './../../Store/TodoStore.js';
  
  let search = '';

  function reset() {
    Todos.resetFilters()
    search = ''
  }
</script>

<style src="../todo.scss"></style>

<div class="filtered">
  <input type="text" placeholder="Search..." bind:value={search} on:input={Todos.filtered(search)}>
  <button class="reset" on:click={reset}>&times;</button>
</div>