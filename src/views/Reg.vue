<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{name: 'login'}">登入</router-link></li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <validation-observer ref="observer" v-slot="{ validate }">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <label for="L_email" class="layui-form-label">用户名</label>
                      <div class="layui-input-inline">
                        <validation-provider name="username" rules="required|email" v-slot="{errors}">
                          <input type="text" name="username" v-model="username" autocomplete="off" class="layui-input">
                          <span class="error">{{errors[0]}}</span>
                        </validation-provider>
                      </div>
                    <!-- <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div> -->
                  </div>
                  <div class="layui-form-item">
                      <label for="L_name" class="layui-form-label">昵称</label>
                      <div class="layui-input-inline">
                        <validation-provider name="name" rules="required|min:4|name" v-slot="{errors}">
                          <input type="text" v-model="name" name="name" autocomplete="off" class="layui-input">
                          <span class="error">{{errors[0]}}</span>
                        </validation-provider>
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label for="L_pass" class="layui-form-label">密码</label>
                      <div class="layui-input-inline">
                        <validation-provider name="password" rules="required|min:6|max:16|confirmed:confirmation" v-slot="{errors}">
                          <input type="password" v-model="password" name="password" autocomplete="off" class="layui-input">
                          <span class="error">{{errors[0]}}</span>
                        </validation-provider>
                      </div>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider name="repassword" vid="confirmation" v-slot="{errors}">
                      <label for="L_repass" class="layui-form-label">确认密码</label>
                      <div class="layui-input-inline">
                        <input type="password" v-model="repassword" name="repassword" required lay-verify="required" autocomplete="off" class="layui-input">
                        <span class="error">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider name="code" ref="codefield" rules="required|length:4" v-slot="{errors}">
                      <label for="L_vercode" class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input type="text" id="L_vercode" name="code" v-model="code" required lay-verify="required" autocomplete="off" class="layui-input">
                        <span class="error">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  <div class="layui-form-mid color-mid"
                    @click="_getCode()"
                    v-html="svg"></div>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-btn" @click="validate().then(submit)" lay-submit>立即注册</div>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者直接使用社交账号快捷注册</span>
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
import { getCode, reg } from '@/api/login'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  name: 'reg',
  data () {
    return {
      username: '',
      name: '',
      password: '',
      repassword: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted () {
    this._getCode()
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
      reg({
        username: this.username,
        password: this.password,
        name: this.name,
        code: this.code,
        sid: this.$store.state.sid
      }).then((res) => {
        if (res.code === 200) {
          this.username = ''
          this.password = ''
          this.repassword = ''
          this.name = ''
          this.code = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
          // 跳转到登录页面
          this.$router.push('/login')
        } else {
          this.$refs.observer.setErrors(res.msg)
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
