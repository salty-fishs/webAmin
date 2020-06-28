<template>
  <!-- list -->
  <div class="fly-panel" style="margin-bottom: 0;">
    <div class="fly-panel-title fly-filter">
      <a :class="{'layui-this': status ==='' && tag === ''}" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status ==='0'}" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status ==='1'}" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status ==='' && tag === '精华'}" @click.prevent="search(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{'layui-this': sort ==='created'}" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': sort ==='answer'}" @click.prevent="search(4)">按热议</a>
      </span>
    </div>
    <list-item :lists="lists" @nextpage="nextPage"></list-item>
  </div>
</template>
<script>
import { getList } from '../../api/content'
import ListItem from './Listitem'
export default {
  name: 'list',
  data () {
    return {
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      lists: [{
        uid: {
          name: 'imooc',
          isVip: 1
        },
        title: '课程目录',
        content: '',
        created: '2020-6-10 01:00:00',
        catalog: 'share',
        fav: 40,
        isEnd: 0,
        reads: 10,
        answer: 0,
        status: 0,
        isTop: 0,
        sort: '',
        tags: [
          {
            name: '精华',
            calss: 'layui-bg-red'
          },
          {
            name: '热门',
            calss: 'layui-bg-blue'
          }
        ]
      }]
    }
  },
  components: {
    ListItem
  },
  mounted () {
    // this._getList()
  },
  methods: {
    _getLists () {
      const options = {
        catalog: this.catalog,
        isTop: 0,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      getList(options).then((res) => {
        console.log(res)
      })
    },
    nextPage () {
      this.page++
      this.__getLists()
    },
    search (val) {
      switch (val) {
        // 未结
        case 0:
          this.status = '0'
          this.tag = ''
          break
        // 已结
        case 1:
          this.status = '1'
          this.tag = ''
          break
        // 查询“精华”标签
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        // 按照时间查询
        case 3:
          this.sort = 'created'
          break
        // 按照评论数
        case 4:
          this.sort = 'answer'
          break
        // 综合查询
        default:
          this.status = ''
          this.tag = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.layui-this{
  color: #5fb878;
}
</style>
