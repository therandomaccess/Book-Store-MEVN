<template>
  <NavBar />
</template>

<script>
import NavBar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap");

html,
body {
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
