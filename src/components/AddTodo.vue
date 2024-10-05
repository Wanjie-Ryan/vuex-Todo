<template>
  <h4 style="color: black">add</h4>

  <div class="add">
    <form @submit.prevent="AddTodo">
      <input type="text" v-model="title" placeholder="Add Todo..." />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["createTodo"]),

    // addTodo is an onSubmit function to the form
    AddTodo() {
      this.createTodo(this.title);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

button {
  flex: 2;
  background: #41b883;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
