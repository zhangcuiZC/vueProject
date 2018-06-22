<template>
  <div class="logo">
    <!-- <img src="../assets/logo.png"> -->
    <Icon class="logoIcon" type="cube"></Icon>
    <div class="logoBox">
      <p class="logoTitle">数据分析平台</p>
      <p class="logoText">Data Analysis Platform</p>
    </div>
  </div>
</template>
<style lang="less">
.logo {
  width: 200px;
  height: 100%;
  position: relative;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .logoIcon {
    color: #fff;
    font-size: 40px;
    margin-right: 10px;
  }
  .logoBox {
    font-size: 12px;
    display: inline-block;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logoTitle {
      font-size: 14px;
    }
    .logoText {
      color: #fff;
      display: inline-block;
      font-weight: lighter;
    }
  }
}
</style>
<script>
import { Icon } from "iview";
export default {
  name: "Logo",
  components: { Icon }
};
</script>

