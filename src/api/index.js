import axios from 'axios'
//import store from '@/store'
import { getToken,removeToken } from './token-headers'

// 创建axios实例
const service = axios.create({
    timeout:8000,
    withCredentials: true,//表示跨域请求时是否需要使用凭证
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
})

// request拦截器
service.interceptors.request.use(config => {
	let token = getToken();
	/*if(store.getters.token) {
		config.headers['token'] = getToken() // 让每个请求携带token--['token']为自定义key 请根据实际情况自行修改
	}*/
	if(token){
		config.headers['token'] = token;
	}
	return config;
}, error => {
	console.log(error);
	Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
	response => {
		if(response.data.code == 401){
			removeToken();
			location.reload();
		}
		return response;
	},
	error => {
		if (error.response) {

        }
		console.log('err' + error);
		return Promise.reject(error);
	}
)

export default service;
