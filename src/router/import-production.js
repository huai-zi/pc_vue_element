module.exports = function (file) {
  //将路由跳转页面引入封装
  return require('@/pages/' + file + '.vue')['default']
}


