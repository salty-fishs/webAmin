<template>
   <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li><router-link :to="{name: 'reg'}">注册</router-link></li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <validation-observer ref="observer" v-slot="{ validate }">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <label for="username" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                      <validation-provider name="username" rules="required|email" v-slot="{errors}">
                        <input type="text" name="email" v-model="username" lay-verify="required" autocomplete="off" class="layui-input">
                        <span class="error">{{errors[0]}}</span>
                      </validation-provider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <validation-provider name="password" rules="required|min:6" v-slot="{errors}">
                      <input type="password" name="password" v-model="password" lay-verify="required" autocomplete="off" class="layui-input">
                      <span class="error">{{errors[0]}}</span>
                    </validation-provider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-row">
                      <label for="L_vercode" class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <validation-provider name="code" ref="codefield" rules="required|length:4" v-slot="{errors}">
                          <input type="text" name="code" v-model="code" lay-verify="required" autocomplete="off" class="layui-input">
                          <span class="error">{{errors[0]}}</span>
                        </validation-provider>
                      </div>
                      <div class="layui-form-mid color-mid"
                      @click="_getCode()"
                      v-html="svg"></div>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <span class="layui-btn" @click="validate().then(submit)">立即登录</span>
                    <span style="padding-left:20px;">
                      <router-link :to="{name: 'forget'}">忘记密码？</router-link>
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                    <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                  </div>
                </form>
              </div>
            </div>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCode, login } from '@/api/login'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import uuid from 'uuid/dist/v4'

export default {
  name: 'login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this._getCode()
    console.log(sid)
  },
  methods: {
    _getCode () {
      const sid = this.$store.state.sid
      getCode(sid).then((res) => {
        this.svg = res.msg
      })
    },
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      login({
        username: this.username,
        password: this.password,
        code: this.code,
        sid: this.$store.state.sid
      }).then((res) => {
        if (res.code === 200) {
          console.log(res)
          this.username = ''
          this.password = ''
          this.code = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
        } else if (res.code === 401) {
          // this.$alert(res.token)
          this.$refs.codefield.setErrors([res.msg])
        }
      }).catch((err) => {
        const data = err.response.data
        if (data.code === 500) {
          this.$alert('用户名密码检验失败,请检查')
        } else {
          this.$alert('服务器错误')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.color-mid{
  position: relative;
  top: -15px;
}
</style>
