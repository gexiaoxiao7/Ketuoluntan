/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {message} from "antd";


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'production'? 'http://suibemmaback.suibemma.club' : undefined
  // requestType: 'form',
});


/**
 * 所有响应拦截器
 */
// request.interceptors.response.use(async (response, options): Promise<any> => {
//
//   const res = await response.clone().json();
//   if (res === null){
//     message.error("操作失败")
//     return response;
//   }
//   return response;
// });

export default request;
// request.interceptors.response.use(async (response, options): Promise<any> => {
//
//   const json = await response.clone().json();
//   if (response && response.status === 200) {
//     if (json) {
//       // 处理响应内容
//     } else {
//       message.error("操作失败");
//     }
//   } else {
//     // 处理错误响应
//   }
//   return response;
// });

// export default request;
