<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" />
        <p>尚医院通 预约挂号平台</p>
      </div>
      <div class="right">
        <a>帮助中心</a>
        <a>登录/注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 999;
  .content {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 70px;
    background-color: #fff;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        font-size: 14px;
        color: #bbbbbb;
        margin-right: 10px;
      }
    }
  }
}
</style>
