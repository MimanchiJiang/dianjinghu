<template>
  <top-bar></top-bar>
  <router-view />
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'HomeView',
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
@function px($n) {
  @return $n / 1920 * 100rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  border: 1px solid red;
  display: flex;
  width: px(1000);
  margin: 0 auto;
  margin-top: px(70);
}
</style>
