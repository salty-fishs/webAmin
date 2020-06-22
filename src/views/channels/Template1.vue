<template>
  <div>
    <panel></panel>
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <list></list>
        </div>
        <div class="layui-col-md4">
          <links></links>
          <hot-list></hot-list>
          <ads></ads>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Panel from '../../components/Panel'
import List from '../../components/contents/List'
import HotList from '../../components/sidebar/HotList'
import Ads from '../../components/sidebar/Ads'
import Links from '../../components/sidebar/Links'
export default {
  name: 'home',
  components: {
    Panel,
    HotList,
    Links,
    Ads,
    List
  }
}
</script>
<style lang="scss" scoped>

</style>
