<script>
	import CreateTodo from './Todo/create/CreateTodo.svelte';
  import Todo from "./Todo/Todo.svelte";
  export let name = "World";
</script>

<style src="./main.scss"></style>

<main>
  <h1>Hello {name.toUpperCase()}!</h1>

  <div class="container">
    <div class="main__content">
      <CreateTodo/>
      <Todo/>
    </div>
  </div>
</main>
