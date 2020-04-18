import Vue from "vue";
import App from "./App";
// import axios from "axios";
import {request } from './network/request'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

request({
  url:'/home/multidata'
})
.then(res=> {
   console.log(res)
})


//https://httpbin.org  测试网站

// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "GET"
// }).then(res => {
//   console.log(res);
// });

// const params = {
//   type: "pop",
//   page: 1
// };
// axios.get("http://123.207.32.32:8000/home/data", params).then(res => {
//   console.log(res);
// });

//并发请求

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([
//   axios({
//     url: "/home/multidata"
//   }),
//   axios({
//     url: "/home/data",
//     params: {
//       type: "pop",
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1, res2)=>{
//   console.log(res1);
//   console.log(res2);
// }));

//创建实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   headers:{}
// })

// instance1.get('/home/multidata').then(res=> console.log(res));