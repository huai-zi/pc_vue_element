import service from '../index';
import requestUrl from '../requestUrl';

export function login(data = {}) {
  //service为axios设置请求和拦截器之后的导出文件，详情请查看api/index.js
  return service({
    url: 'http://jsonplaceholder.typicode.com/comments',//测试使用接口方式
    // url: requestUrl('/cardStat/queryCardStatList'),//跨域书写方式
    method: 'post',
    data
  })
}
