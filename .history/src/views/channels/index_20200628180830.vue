<template>
  <div class="layui-row layui-col-space15">
    <div class="layui-col-md4">
      <tips></tips>
      <sign></sign>
      <links></links>
      <hot-list></hot-list>
      <ads></ads>
    </div>
  </div>
</template>
<script>
import Tips from '../../components/sidebar/Tips'
import HotList from '../../components/sidebar/HotList'
import Ads from '../../components/sidebar/Ads'
import Sign from '../../components/sidebar/Sign'
import Links from '../../components/sidebar/Links'

export default {
  name: 'index',
  components: {
    Tips,
    Links,
    HotList,
    Ads,
    Sign,

  }
}
</script>
<style lang="scss" scoped>

</style>
