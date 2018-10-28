//引入vue，同时声明接管区域
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//状态管理
import {store} from './store/index'

//可进行按需引入
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

//浏览器解析js兼容
import 'babel-polyfill'

//阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store: store,
  components: {App},
  template: '<App/>'
})
