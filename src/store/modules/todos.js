import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos(state) {
    return state.todos;
  },
};

const actions = {
  // we do not call the mutation directly, we call it using the commit
  //{commit}
  async FetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
    commit("setTodos", response.data);
  },

  // there in the actions, we fetch the todos, then the commit is used when we want to pass the data to the mutations which then update the state,,,, we pass the name of the mutation and the data fetched.

  // commit part of a large object that is passed in
  async createTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    console.log(response);
    commit("newTodo", response.data);
  },

  async deleteTodo({ commit }, id) {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(response);
    commit("removeTodo", id);
  },
};

const mutations = {
  // here in the mutations, setTodos is the name of the mutation, then state, is the state, then also pass in the expected data, then we set the state to the data passed in.
  setTodos: (state, data) => (state.todos = data),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
