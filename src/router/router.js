import { createRouter, createWebHistory } from "vue-router";
import TodoComponent from "../components/Todo.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: TodoComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
