<template>
  <div>
    <div v-if="loading">Loading...</div>
    <input v-model="first_name" placeholder="First Name" />
    <input v-model="last_name" placeholder="Last Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <button v-on:click="addUser">Submit</button>
  </div>
</template>

<script>
import http from "../utils/http";

export default {
  data() {
    return {
      loading: false,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    addUser: function () {
      this.loading = true;
      http
        .post("/user/create", {
          ...this.$data,
          password_confirmation: this.password,
        })
        .then(({ data }) => {
          if (data.id) {
            this.$store.commit("addUser", data);
          }
        });
    },
  },
};
</script>
