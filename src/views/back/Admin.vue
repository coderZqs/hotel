<template>
  <div class="app">
    <header class="header">
      <m-header/>
    </header>
    <el-row>
      <el-col :lg="4">
        <aside>
          <m-aside/>
        </aside>
      </el-col>
      <el-col :lg="20" style="border-left:1px solid #CCC;min-height:100%;">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import mAside from "@/components/common/aside";
import mHeader from "@/components/common/header";
export default {
  components: {
    mAside,
    mHeader
  }
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fde-leave-active {
  transition: all 1s;
}
</style>
