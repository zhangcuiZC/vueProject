<template>
  <div class="header">
    <div class="logoBox">
      <Logo/>
    </div>

    <div class="menu">
      <Menu mode="horizontal" theme="light" :active-name="root" class="headerMenu">
        <MenuItem v-for="item in headerMenuList" :name="item.name" :key="item.name">
        <router-link :to="item.to">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
        </router-link>
        </MenuItem>
      </Menu>
    </div>
    <div class="userInfo">
      <Dropdown placement="bottom-end">
        <span>欢迎，超级管理员
          <Icon class="icon" type="android-menu"></Icon>
        </span>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Icon type="edit"></Icon> 修改密码</DropdownItem>
          <DropdownItem @click.native="logout">
            <Icon type="log-out"></Icon> 退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #2b83f9;
  background-image: linear-gradient(90deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
}
.logoBox {
  float: left;
  height: 100%;
}
img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.menu {
  float: left;
  height: 100%;
  overflow: hidden;
}
.userInfo {
  height: 100%;
  float: right;
  font-size: 14px;
  color: #fff;
  margin-right: 10px;
  display: flex;
  align-items: center;
  .icon {
    font-size: 24px;
    margin-left: 10px;
  }
  span {
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="less">
.headerMenu {
  background: transparent;
  height: 71px;
  line-height: 70px;
}
.headerMenu li {
  color: rgba(255, 255, 255, 0.7) !important;
  border-bottom-width: 5px !important;
}
.headerMenu .ivu-menu-item-selected {
  color: #fff !important;
  border-color: #4fe3c1 !important;
}
.headerMenu .ivu-menu-item {
  padding: 0;
  width: 120px;
  text-align: center;
  a {
    width: 100%;
    color: #fff;
    display: inline-block;
    height: 100%;
  }
}
</style>

<script>
import {
  Menu,
  Icon,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "iview";
import headerMenuList from "../config/headerMenu.js";
import Logo from "../components/Logo";
export default {
  name: "MainHeader",
  components: {
    Menu,
    Icon,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Logo
  },
  data() {
    return {
      headerMenuList
    };
  },
  props: ["root"],
  methods: {
    logout: function() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>