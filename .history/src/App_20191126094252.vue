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

.modal.fade {
  position: fixed;
  top: 35px;
  left: 160px;
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.modal.fade.active{
    display: block;
}

.table > thead > tr {
  background-color: #37bc9b !important;
}
.table > thead > tr > th {
  color: #fff !important;
}
</style>
