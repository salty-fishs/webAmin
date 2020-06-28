<template>
  <div class="panel">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link tag="li" to="/" >
          <a href="\" @click="toTop">首页</a>
        </router-link>
        <router-link v-for="(item,index) in lists" :key="'panel' + index" tag="li" :to="item.path">
          <a href="\" @click="toTop">{{item.name}}</a>
          <!-- <span class="layui-badge-dot" v-if="item.isNew"></span> -->
        </router-link>
      </ul>

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
  },
  methods: {
    toTop() {
      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  },
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
  z-index: 99;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  height: 98px;
  background-color: #fff;
  border-top: 1px solid #f8f8f8;
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
