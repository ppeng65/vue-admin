<template>
  <div class="login-wrap">
    <el-form
      ref="loginForm"
      class="form-wrap"
      :model="form"
      :rules="rules"
    >
      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="icon-container">
          <i class="el-icon-user-solid" />
        </span>
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="icon-container">
          <i class="el-icon-lock" />
        </span>
        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>

      <el-button :loading="loading" size="medium" type="primary" style="width: 100%; margin-bottom: 30px" @click.native.prevent="onLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    // 登录
    onLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(this.form)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .login-wrap {
    position: relative;
    min-height: 100vh;
    background-color: #2d3a4b;
    .form-wrap {
      position: relative;
      box-sizing: border-box;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
      .title-container {
        position: relative;
        .title {
          font-size: 26px;
          color: #eee;
          margin: 0 auto 40px auto;
          text-align: center;
          font-weight: 700;
        }
      }
      /deep/.el-form-item {
          width: 100%;
        .el-form-item__content {
          display: flex;
          width: 100%;
          border: 1px solid hsla(0,0%,100%,.1);
          border-radius: 5px;
          color: #454545;
          background: rgba(0,0,0,.1);
          .icon-container {
            padding: 6px 5px 6px 15px;
            width: 30px;
            display: block;
            text-align: center;
            font-size: 20px;
            color: #889aa4;
          }
          .el-input {
            flex: 1;
            height: 47px;
            input {
              padding: 12px 5px 12px 15px;
              height: 47px;
              color: #fff;
              background: transparent;
              border: 0px;
              border-radius: 0px;
              caret-color: #fff;
              -webkit-appearance: none;
              &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px #283443 inset !important;
                -webkit-text-fill-color: #fff !important;
              }
              &:focus {
                border: 0;
                box-shadow: 0 0 0 0 transparent;
              }
            }
          }
        }
      }
    }
  }
</style>
