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

.table > thead > tr, .modal-header {
  background-color: #37bc9b !important;
}
.table > thead > tr > th {
  color: #fff !important;
}

.table > tbody > tr {
  background-color: #fff !important;
}

.modal-title{
    color: #fff !important;
}

</style>
