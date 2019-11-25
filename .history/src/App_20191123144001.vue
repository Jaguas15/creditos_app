<template>
    <router-view/>
</template>

<script>
    import store_app from './store/index.js'

    export default {
        name: 'App',
        store_app
    }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '@/styles/bootstrap.scss';
  @import '@/styles/app.scss';
</style>
