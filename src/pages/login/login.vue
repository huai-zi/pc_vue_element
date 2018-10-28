<template>
  <div id="login">
    {{login}}
    <el-button round @click='api'>数据请求</el-button>
  </div>
</template>
<script>
  //引入书写好的api文件
  import {login} from '@/api/modules/login';
  import Mock from 'mockjs';

  export default {
    name: 'login',
    data() {
      return {
        list: '',
        login: "登录界面"
      };
    },
    methods: {
      api() {
        const loading = this.$loading({
          lock: true,
          text: '数据请求中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

        //数据请求
        login({postId: 1})
          .then(response => {
            loading.close();
            this.$notify({
              title: '请求',
              message: '数据请求成功!',
              type: 'success',
              offset: 100,
              duration: '3000'
            });
            console.log(response);
          }, err => {
            console.log('请求失败');
          });
      }
    },
    mounted() {
    }
  };
</script>

<style lang='less' scoped>
  @color: #ccc;
  #login {
    background-color: @color;
  }
</style>
