export default function (actionName) {
    // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  console.log(process.env.NODE_ENV );
    return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/api' : '') + actionName
  }
