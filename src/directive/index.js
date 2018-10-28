import Vue from 'vue';
//全局的自定以标签属性

export const directive = Vue.directive('scroll_height', {
  bind: function (el, binding, vnode) {
    //只调用一次，指令第一次绑定到元素时调用，可以使用到处理dome元素上的样式以及数据处理，还有其他参数，请见https://cn.vuejs.org/v2/guide/custom-directive.html（官网）
  }
});
