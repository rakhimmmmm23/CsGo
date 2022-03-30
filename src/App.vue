<template>
  <router-view />
</template>


<script>
import Main from "./components/Main.vue";
export default {
  components: {
    Main,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: roboto;
}

a {
  text-decoration: none;
  color: #fff;
}

button {
  cursor: pointer;
  border: none;
}
</style>
