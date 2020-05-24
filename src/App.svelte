<script>
  import Todo from "./Todo/Todo.svelte";
  export let name = "World";
</script>

<style src="./main.scss"></style>

<main>
  <h1>Hello {name.toUpperCase()}!</h1>
  
  <div class="container">
    <Todo />
  </div>

</main>
