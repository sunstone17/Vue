import axios from "axios";
import {baseUrl} from './const'

export function request(config) {
  const instance = axios.create({
    baseURL:baseUrl,
    timeout: 10000
  });

  instance.interceptors.request.use(
    config => {
      if(config.url.indexOf("?") > 0){
        config.url += "&version=2020"
      }else{
        config.url += "?version=2020"
      }
      return config;
    },
    err => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(result=>{
    return result.data;//返回所有结果
  }, err=>{
    console.log(err)
  })
  return instance(config); //这里就是一个promise
}