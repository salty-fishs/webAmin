<template>
  <div class="index">
    <router-view></router-view>
    <panel></panel>
  </div>
</template>
<script>
import Panel from '../components/Panel'
export default {
  name: 'home',
  components: {
    Panel
  }
}
</script>
<style lang="scss" scoped>

</style>
