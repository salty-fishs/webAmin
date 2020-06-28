<template>
  <div id="app">
    <imooc-header></imooc-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    'imooc-header': Header
  }
}
</script>
<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
#app{
  position: absolute;
}
</style>
