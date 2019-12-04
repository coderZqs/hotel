<template>
  <el-menu :default-active="activeIndex" router mode="horizontal" @select="handleSelect">
    <el-menu-item index="/admin">首页中心</el-menu-item>
    <el-menu-item index="/admin/order">订单管理</el-menu-item>
    <el-menu-item index="/admin/information">消息中心</el-menu-item>
    <el-submenu class="right" index="/myInfo">
      <template slot="title">
        <svg
          t="1575105748034"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1344"
          width="30"
          height="30"
        >
          <path
            d="M642.56 709.12C638.72 669.44 640 640 640 602.88c17.92-10.24 81.92-71.68 87.04-122.88 14.08-1.28 37.12-15.36 43.52-71.68 3.84-29.44-10.24-47.36-19.2-52.48 23.04-70.4 33.28-290.56-128-312.32C606.72 15.36 564.48 0 509.44 0 289.28 3.84 224 168.96 272.64 357.12c-8.96 5.12-23.04 21.76-19.2 52.48 6.4 56.32 29.44 70.4 43.52 71.68 5.12 52.48 69.12 113.92 87.04 122.88 0 37.12 1.28 65.28-2.56 106.24C337.92 828.16 52.48 766.72 38.4 1024l947.2 0C977.92 762.88 686.08 828.16 642.56 709.12z"
            p-id="1345"
          ></path>
        </svg>
      </template>
      <el-menu-item index="/exit">退出登录</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.right {
  float: right !important;
  margin-right: 50px !important;
}
</style>

