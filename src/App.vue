<template>
  <!-- <router-view /> -->

  <div id="app">
    <div class="container">
      <AddTodoComponent />
      <TodoComponent />
    </div>
  </div>
</template>

<script>
import TodoComponent from "./components/Todo.vue";
import AddTodoComponent from "./components/AddTodo.vue";
export default {
  name: "App",
  components: {
    TodoComponent,
    AddTodoComponent,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border-box: box-sizing;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
