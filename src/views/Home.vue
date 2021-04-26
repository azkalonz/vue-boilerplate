<template>
  <div class="home">
    <h1>Home</h1>
    <AddUser />
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
