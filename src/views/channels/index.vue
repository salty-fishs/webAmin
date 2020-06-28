<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <top></top>
        <list></list>
      </div>
      <div class="layui-col-md4">
        <tips></tips>
        <sign></sign>
        <links></links>
        <hot-list></hot-list>
        <ads></ads>
      </div>
    </div>
  </div>
</template>
<script>
import Tips from '../../components/sidebar/Tips'
import HotList from '../../components/sidebar/HotList'
import Ads from '../../components/sidebar/Ads'
import Sign from '../../components/sidebar/Sign'
import Links from '../../components/sidebar/Links'
import List from '../../components/contents/List'
import Top from '../../components/contents/Top'
export default {
  name: 'index',
  components: {
    Tips,
    Links,
    HotList,
    Ads,
    Sign,
    List,
    Top
  }
}
</script>
<style lang="scss" scoped>

</style>
