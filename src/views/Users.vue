<template>
  <div class="about">
    <b v-if="loading">Loading...</b>
    <div v-if="!loading && $route.params.id">
      <table>
        <tr>
          <td>First Name</td>
          <td>{{ user.first_name }}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{{ user.last_name }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
    <table width="100%" v-if="!loading && !!!$route.params.id">
      <thead>
        <th>Fname</th>
        <th>Lname</th>
        <th>Email</th>
        <th>Action</th>
      </thead>
      <tbody v-for="item of $store.state.users" :key="item.id">
        <tr>
          <td>
            <a :href="'/users/' + item.id">
              {{ item.first_name }}
            </a>
          </td>
          <td>
            {{ item.last_name }}
          </td>
          <td>
            {{ item.email }}
          </td>
          <td>
            <button v-on:click="deleteUser(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../utils/http";

export default {
  name: "Users",
  data() {
    return {
      user: {},
      loading: false,
    };
  },
  components: {},
  mounted: function () {
    if (this.$store.state.users.length === 0) this.getUsers();
  },
  methods: {
    deleteUser: function (id) {
      this.$store.commit("deleteUser", id);
    },
    getUsers: function (event) {
      this.loading = true;
      if (this.$route.params.id == null) {
        http
          .get("/users")
          .then((resp) => {
            delete resp.data.meta;
            const users = [];

            Object.keys(resp.data).map((key) => {
              users.push(resp.data[key]);
            });

            this.$store.commit("setUsers", users);
            this.loading = false;
          })
          .catch((error) => {
            alert(error);
            this.loading = false;
          });
      } else {
        http.get("/user/" + this.$route.params.id).then(({ data }) => {
          this.user = data;
          this.loading = false;
        });
      }
    },
  },
};
</script>

