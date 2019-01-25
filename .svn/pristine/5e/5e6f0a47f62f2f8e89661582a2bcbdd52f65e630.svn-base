import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

function checkStatus (response, sucCallback, failCallback) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res, sucCallback, failCallback) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}

function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
    return unescape(arr[2]);
  }
  else{
    return null;
  }
}

/**
 * 封装POST GET方法
 * @param url 请求url
 * @param data 请求参数
 * @param sucCallback 成功回调处理
 * @param failCallback 失败回调处理
 */

export default {
  post (url, bodyObj, sucCallback, failCallback) {
    // 请求参数根据接口自定义
    var rocket = getCookie("rocket");
    var data = JSON.stringify({"head":{"rocket":rocket},"body":bodyObj});
    var ttkn2 = getCookie("ttkn2");
    return axios({
        method: "post",
        withCredentials: false, // `withCredentials` 表示跨域请求时是否需要使用凭证
        baseURL:prepath,  //prepath 对应index.html 中的地址
        url: url, // api对应pathRewrite
        data: data,
        timeout: 10000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'text/plain;charset=UTF-8',
          "infoq":"ch=hemp;e=p",
          "ttkn2":ttkn2
        }
    })
    .then((res) =>{
      console.log(res);
      return checkStatus(res, sucCallback, failCallback);
    })
    .catch((err) =>{
      console.log(err)
      return checkCode(err, sucCallback, failCallback)
    });
  },
  get (url, bodyObj, sucCallback, failCallback) { 
    // 请求参数根据接口自定义
    var rocket = getCookie("rocket");
    var data = JSON.stringify({"head":{"rocket":rocket},"body":bodyObj});
    var ttkn2 = getCookie("ttkn2");
    return axios({
        method: "get",
        withCredentials: false, // `withCredentials` 表示跨域请求时是否需要使用凭证
        baseURL:prepath,
        url: url,
        data: data,
        timeout: 10000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'text/plain;charset=UTF-8',
          "infoq":"ch=hemp;e=p",
          "ttkn2":ttkn2
        }
    })
    .then((res) =>{
      console.log(res);
      return checkStatus(res, sucCallback, failCallback)
    })
    .catch((err) =>{
      console.log(err);
      return checkCode(err, sucCallback, failCallback)
    });
  }
}