<template>
  <transition name="login">
    <div class="login">
      <div class="loginOuter">
        <div class="logoOuter">
          <Logo/>
          <p class="plz">请登录</p>
        </div>
        <div class="loginInner">
          <Form ref="loginForm" :model="loginFields" :rules="loginRules" v-show="!isUseDD" class="loginForm">
            <FormItem prop="user">
              <Input type="text" v-model="loginFields.user" placeholder="账号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="loginFields.password" placeholder="密码">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <Button type="primary" @click="handleSubmit('loginForm')">登 录</Button>
          </Form>
          <div id="qrcodeBox" v-show="isUseDD">

          </div>
          <p class="toggleLogin">
            <a @click="useDD">
              <Icon type="qr-scanner" v-if="!isUseDD"></Icon>
              <Icon type="monitor" v-else></Icon>
            </a>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="less">
.login {
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
  .loginOuter {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 360px;
    // height: 300px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 10px #666;
    .loginForm {
      padding: 20px 0;
    }
    .logoOuter {
      height: 70px;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .plz {
        font-size: 36px;
        padding-right: 20px;
        font-weight: lighter;
      }
    }
    .loginInner {
      padding: 20px;
      button {
        width: 100%;
        font-size: 14px;
      }
    }
    .toggleLogin {
      background-color: #eee;
      width: 70px;
      height: 70px;
      position: absolute;
      color: #aaa;
      right: -35px;
      bottom: -35px;
      transform: rotateZ(-45deg);
      text-align: center;
      a {
        display: inline-block;
        transform: rotateZ(45deg);
        font-size: 22px;
      }
    }
  }
}
.login-enter-active,
.login-leave-active {
  transition: transform 0.4s;
}
.login-enter,
.login-leave-to {
  transform: translateY(-100vh);
}
</style>
<script>
import { Form, FormItem, Input, Icon, Button } from "iview";
import Logo from "../../components/Logo";
export default {
  name: "Login",
  components: { Form, FormItem, Input, Icon, Button, Logo },
  data() {
    return {
      loginFields: {
        user: "",
        password: ""
      },
      loginRules: {
        user: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码应不少于6位",
            trigger: "blur"
          }
        ]
      },
      isUseDD: true
    };
  },
  mounted() {
    var obj = DDLogin({
      id: "qrcodeBox", //这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
      goto: "",
      style: "border:none;background-color:#FFFFFF;",
      width: "320",
      height: "300"
    });
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        // if (valid) {
        //   this.$Message.success("Success!");
        // } else {
        //   this.$Message.error("Fail!");
        // }
        this.$Message.success("Success!");
        this.$router.push({ path: "/" });
      });
    },
    useDD() {
      this.isUseDD = !this.isUseDD;
      if (this.isUseDD) {
      }
    }
  }
};
</script>

