<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from './components/MainTabBar.vue'

  export default {
    name: 'APP',
    components: {
      MainTabBar
    }
  }


</script>

<style lang="scss">



</style>
