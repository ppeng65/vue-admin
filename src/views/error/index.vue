<template>
  <div class="errorWrapper">
    <div class="errorPin" />
    <div class="errorCode"> 错误 <span>404</span></div>
    <p>您没有权限查看此页面</p>
    <p>
      请刷新页面或者
      <el-button type="primary">
        <router-link to="/" tag="div">返回首页</router-link>
      </el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped lang="scss">
  @-webkit-keyframes error-swing {
    0% {
      -webkit-transform: rotate(1deg)
    }
    100% {
      -webkit-transform: rotate(-2deg)
    }
  }
  @-moz-keyframes error-swing {
    0% {
      -moz-transform: rotate(1deg)
    }
    100% {
      -moz-transform: rotate(-2deg)
    }
  }
  @keyframes error-swing {
    0% {
      transform: rotate(1deg)
    }
    100% {
      transform: rotate(-2deg)
    }
  }
  .errorWrapper {
    width: 330px;
    padding: 30px 0;
    margin: 80px auto;
    position: relative;
    text-align: center;
    .errorPin {
      width: 38px;
      height: 38px;
      display: block;
      margin: auto;
      margin-bottom: -27px;
      z-index: 10;
      position: relative;
      background: url("../../assets/errorBtn.png") no-repeat center center;
    }
    .errorCode {
      box-sizing: border-box;
      width: 330px;
      height: 300px;
      padding: 127px 16px 0 16px;
      position: relative;
      margin-bottom: 30px;
      z-index: 5;
      line-height: 1;
      font-size: 32px;
      text-align: center;
      background: url("../../assets/errorBg.png") no-repeat top center;
      -webkit-transform-origin: center top;
      -moz-transform-origin: center top;
      transform-origin: center top;
      -webkit-animation: error-swing infinite 2s ease-in-out alternate;
      -moz-animation: error-swing infinite 2s ease-in-out alternate;
      animation: error-swing infinite 2s ease-in-out alternate;
      span {
        font-size: 65px;
        display: block
      }
    }
  }
</style>
