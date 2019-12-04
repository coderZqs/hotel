<template>
  <el-button @click="login">点击</el-button>
</template>

<script>
export default {
  methods: {
    login() {
      this.axios
        .post("/api/user", {
          uname: "zqszzz",
          upwd: "599977.."
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>
