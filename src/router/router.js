const _import = require('./import-production');
const routerLink = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: _import('login/login')
  },
  {
    path: '/excel',
    name: 'excel',
    component: _import('exportExcel/index')
  }
]
export default routerLink
