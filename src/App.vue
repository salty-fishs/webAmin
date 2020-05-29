<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <validation-provider name="用户名" rules="required|email" v-slot="{errors}">
              <input
                type="text"
                name="name"
                v-model.trim="name"
                placeholder="请输入标题"
                autocomplete="off"
                class="layui-input"
              />
              <span class="error">{{errors[0]}}</span>
            </validation-provider>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              v-model="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              v-model="code"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid color-mid"
          @click="geetCaptcha()"
          v-html="svg"></div>
        </div>
        <button type="button" @click="checkForm" class="layui-btn">点击登录</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}

export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: []
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this.geetCaptcha()
  },
  methods: {
    geetCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          this.svg = obj.msg
        }
      })
    },
    checkForm () {
      this.errorMsg = []
      if (!this.name) {
        this.errorMsg.push('登录为空')
      }
      if (!this.password) {
        this.errorMsg.push('密码为空')
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空')
      }
      console.log(this.errorMsg)
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.color-mid{
  color:#009688;
  position:relative;
  margin-top: -15px;
}
.error{
  color:red;
}
</style>
