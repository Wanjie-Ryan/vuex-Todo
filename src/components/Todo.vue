<template>
  <div class="container">
    <h4>Todos</h4>

    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
        <p class="del" @click="deleteTodo(todo.id)">Del</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoComponent",
  computed: {
    ...mapGetters(["allTodos"]),
  },
  methods: {
    ...mapActions(["FetchTodos", "deleteTodo"]),
  },

  // Fetch Todos is called in the created hook which is just before the component loads or created.
  created() {
    this.FetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.del {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-weight: bold;
  color: red;
  cursor: pointer;
}
</style>
