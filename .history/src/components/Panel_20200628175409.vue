<template>
  <div class="panel">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link tag="li" to="/">
          <a href="\">首页</a>
        </router-link>
        <router-link v-for="(item,index) in lists" :key="'panel' + index" tag="li" :to="item.path">
          <a href="\">{{item.name}}</a>
          <!-- <span class="layui-badge-dot" v-if="item.isNew"></span> -->
        </router-link>
        <!-- 用户登录后显示 -->
        <template v-if="isLogin">
          <li class="layui-hide-xs"><span class="line"></span></li>
          <li class="layui-hide-xs layui-col-sm"><a href="\">我发表的帖</a></li>
          <li class="layui-hide-xs layui-col-sm"><a href="\">我收藏的帖</a></li>
        </template>
      </ul>
      <div class="right layui-hide-xs">
        <span class="layui-icon layui-icon-search"></span>
        <a href="" class="layui-btn">发表新帖</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'panel',
  data () {
    return {
      lists: [
        {
          name: '提问',
          path: '/index/ask',
          isNew: true
        },
        {
          name: '分享',
          path: '/index/share',
          isNew: false
        },

   
      ],
      isLogin: this.$store.state.isLogin
    }
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 768) {
  // 最大宽度 即 <768
  .panel {
    height: auto !important;
  }
  ul {
    li {
      width: 33.3%;
    }
  }
}
.panel{
  position: fixed;
  height: 50px;
  width: 100%;
  line-height: 50px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  bottom: 0;
  left: 0;
}
.layui-this{
  a {
    color: #5fb878;
  }
}
ul {
  li {
    display: inline-block;
    a {
      padding: 0 20px;
    }
  }
  .line {
    display: inline-block;
    height: 16px;
    width: 1px;
    background: #e2e2e2;
    vertical-align: middle;
    margin: 0 20px;
  }
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  .layui-icon-search {
    margin-right: 10px;
  }
}
.layui-icon-search {
  margin-right: 10px;
  font-size: 20px;
  &:hover {
    color: #5fb878;
    cursor: pointer;
  }
}
</style>
