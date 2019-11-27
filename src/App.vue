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

.btn-primary{
  background-color: #37bc9b !important;
  border-color: #31a588 !important;
}

.table > thead > tr > th {
  color: #fff !important;
}

.table > tbody > tr {
  background-color: #fff !important;
}

.modal-title{
    color: #fff !important;
    font-size: 16pt;
}

.wrapper .aside-container .aside-inner {
  overflow: auto;
}

.btn-label-r {
    position: relative;
    background: transparent;
    background: 
    rgba(0, 0, 0, 0.06);
    display: inline-block;
    padding:  0.375rem 1rem;
    right: -1rem;
    border-radius: 0.25rem 0 0 0.25rem;
}



</style>
