
<template>
  <div class="App">
    <HospitalTop />
    <!-- 路由组件 -->
    <div class="content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: red;
  .container {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
