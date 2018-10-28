import Vue from 'vue'
import Router from 'vue-router'
//页面路由
import routerLink from './router.js';

Vue.use(Router);
let router = new Router({
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    //返回之前页面滚动到之前访问的位置
    if (savedPosition) {
      //当点击浏览器回退前进功能的时候,savedPosition会记录之前已经浏览的位置
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: routerLink
})


//全局守卫,页面加载的时候,监控路由是否相同
router.beforeEach((to, from, next) => {
  // 使用过程为, 先判断vuex里面一条数据, 判断是否登陆
  console.log(to);
  next()

  //判断是否结合store进行登录管理
  // if (to.path === '/page' || to.path === '/') {
  //   next();//进行登陆,直接渲染界面
  // } else {
  //   alert('还没有登陆哦')
  // }

});

//后置钩子,进入组件之后会调用钩子函数
router.afterEach((to, from) => {
  console.log(to);
  console.log(from);
  alert('进入路由组件完成阶段的后置钩子');

})


export default router

