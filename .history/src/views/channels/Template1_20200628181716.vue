<template>
  <div>
    <div class="layui-col-md8">
      <list></list>
    </div>
    <div class="layui-col-md4">
      <links></links>
      <hot-list></hot-list>
      <ads></ads>
    </div>
  </div>
</template>
<script>
import List from '../../components/contents/List'
import HotList from '../../components/sidebar/HotList'
import Ads from '../../components/sidebar/Ads'
import Links from '../../components/sidebar/Links'
export default {
  name: 'teplate1',
  components: {
    HotList,
    Links,
    Ads,
    List
  }
}
</script>
<style lang="scss" scoped>

</style>
