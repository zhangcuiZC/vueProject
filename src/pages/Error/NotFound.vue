<template>
  <transition name="nf">
    <div class="notFound">
      <p class="title">404</p>
      <p class="desc">抱歉，找不到指定页面</p>
      <p class="descEn">The page you are looking for can't be found</p>
      <Button type="ghost" class="btn" @click="gotoHome">返回首页</Button>
    </div>
  </transition>
</template>
<style lang="less">
.notFound {
  width: 100vw;
  height: 100vh;
  padding-bottom: 25vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #2b83f9;
  background-image: linear-gradient(90deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 200px;
    font-weight: bold;
  }
  .desc {
    font-size: 32px;
  }
  .descEn {
    font-size: 18px;
    font-weight: lighter;
  }
  .btn {
    color: #fff;
    font-size: 18px;
    margin-top: 50px;
    width: 320px;
  }
}
.nf-enter-active,
.nf-leave-active {
  transition: transform 0.4s;
}
.nf-enter,
.nf-leave-to {
  transform: translateY(-100vh);
}
</style>

<script>
import { Button } from "iview";
export default {
  name: "NotFound",
  components: { Button },
  methods: {
    gotoHome: function() {
      this.$router.replace({ path: "/" });
    }
  }
};
</script>
