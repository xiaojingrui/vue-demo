
//app应用的全局配置
import QS from 'qs'
export default {
	serviceConfig: {
		//请求的接口
		url: '/',

		//请求方法
		method: 'get',  //default
		baseUrl: "http://localhost:3000/",

		transformRequest: [function(data) {
			//这里可以在发送请求之前对数据做处理
			var serizeData = QS.stringify(data);
			return serizeData;
		}],

		transformResponse: [function(data) {
			//这里提前处理返回数据
			var objData = QS.parse(data);
			return objData;
		}],

		//请求头信息
		headers: { 'X-Requested-Width': 'XMLHttpRequest'},
		//post参数，使用axios.post(url,{},config);如果没有额外的也要用一个空对象，否则会报错
		data: {
			//默认空对象
		},

		//设置超时时间
		timeout: 100000,
		//返回数据类型
		responseType: 'json', //default
	}
}