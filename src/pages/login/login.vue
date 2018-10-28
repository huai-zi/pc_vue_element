<template>
  <div id="login">
    {{login}}
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        login: "我是登录界面"
      };
    }
  };
</script>

<style lang='less' scoped>
  @color: red;
  #login {
    background-color: @color;
  }
</style>
