<template>
  <div>
    <!-- 温馨提醒tips -->
    <div class="fly-panel">
      <h3 class="fly-panel-title">温馨通道</h3>
      <div class="fly-panel-main layui-row">
        <ul class="layui-clear imooc-quick">
          <li class="layui-col-xs6">
            <a href="/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          <li class="layui-col-xs6">
            <a href="/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          <li class="layui-col-xs6">
            <a href="/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          <li class="layui-col-xs6">
            <a href="/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tips'
}
</script>
<style lang="scss" scoped>
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
}
.imooc-quick {
  border: 1px solid $border-color;
  border-bottom: none;
  border-top: none;
  .layui-col-xs6 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border: 1px solid $border-color;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-left: none;
    border-top: none;
  }
}
</style>
