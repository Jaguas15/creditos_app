<template>
    <router-view/>
</template>

<script>
    import store from './store/index.js'

    export default {
        name: 'App',
        store
    }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '@/styles/bootstrap.scss';
  @import '@/styles/app.scss';

  .table > thead > tr{
      background-color: #37bc9b !important;
      color: #fff !important;
  }
</style>
