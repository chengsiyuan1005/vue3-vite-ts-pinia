import { AxiosRequestConfig, Method } from 'axios';
import apiUrl from './apiUrl';
import request from './request';

const services: {
	//定义数组
	[key: string]: (data: object, options?: AxiosRequestConfig) => Promise<any>;
} = {};

Object.entries(apiUrl).forEach((item) => {
	const array = item[1].split(' '); // 根据 apiUrl 空格做区分
	services[item[0]] = (data, options) => {
		return request({
			url: array[1],
			method: array[0],
			data,
			...options,
		});
	};
});

// 将services挂载到vue的原型上
// 业务中引用的方法：this.$services.接口名（小驼峰）
// Object.defineProperty(Vue.prototype, '$services', {
//   value: services
// })
export default services;
