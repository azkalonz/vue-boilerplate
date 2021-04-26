import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    deleteUser(state, id) {
      const index = state.users.findIndex(q => q.id == id);
      state.users.splice(index, 1);
    }
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  store
});
