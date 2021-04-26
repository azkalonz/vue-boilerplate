<template>
  <div class="home">
    <AddUser />
    <img alt="Vue logo" src="../assets/logo.png" />
    <Users />
  </div>
</template>

<script>
import AddUser from "../views/AddUser";
import Users from "../views/Users";

export default {
  name: "Home",
  mounted: function () {},
  components: {
    AddUser,
    Users,
  },
};
</script>
