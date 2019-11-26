<template>
  <router-view />
</template>

<script>
import store from "./store/index.js";

export default {
  name: "App",
  store
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "@/styles/bootstrap.scss";
@import "@/styles/app.scss";

.modal {
  display: block;
  position: fixed;
  top: 25px;
  left: 15%;
  background-color: rgba(0, 0, 0, 0.6);
}

.table > thead > tr {
  background-color: #37bc9b !important;
}
.table > thead > tr > th {
  color: #fff !important;
}
</style>
