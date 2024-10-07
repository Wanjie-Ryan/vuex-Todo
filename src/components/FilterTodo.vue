<template>
  <div style="margin-top: 10px">
    Filter Todos:

    <select @change="FilterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodo",
  methods: {
    ...mapActions(["FilterTodos"]),
  },
};
</script>

<style>
</style>