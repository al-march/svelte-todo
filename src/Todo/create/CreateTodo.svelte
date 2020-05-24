<script>
	import { Todos } from './../../Store/TodoStore.js';
  let title = ''

  function onSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }

    Todos.create(newTodo)
  }

</script>

<style src="./Create.scss"></style>

<form on:submit={onSubmit}>
  <input type="text" placeholder="Todo Name" bind:value={title}>
  <button disabled={title.length < 3}>+</button>
</form>