<template>
  <el-menu ref="aside" default-active="2" router @open="handleOpen" @close="handleClose">
    <el-menu-item index="/admin/goods_order">
      <i class="el-icon-menu"></i>
      <span slot="title">订单</span>
    </el-menu-item>
    <el-menu-item index="/admin/goods_ad">
      <i class="el-icon-document"></i>
      <span slot="title">商品管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/blog">
      <i class="el-icon-setting"></i>
      <span slot="title">备忘录</span>
    </el-menu-item>
    <el-submenu>
      <template slot="title">酒店管理</template>
      <el-menu-item index="/admin/hotel_info">酒店信息</el-menu-item>
      <el-menu-item index="/admin/amend">建议信</el-menu-item>
      <el-menu-item index="/admin/message">留言简讯</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>