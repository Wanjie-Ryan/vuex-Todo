<template>
  <div class="container">
    <h4>Todos</h4>

    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoComponent",
  computed: {
    ...mapGetters(["allTodos"]),
  },
};
</script>

<style></style>
