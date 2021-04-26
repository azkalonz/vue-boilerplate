import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users/:id?",
    name: "Users",
    component: Users
  },
  {
    path: "/add-user",
    name: "User",
    component: AddUser
  },
  {
    path: "*",
    name: "404",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
