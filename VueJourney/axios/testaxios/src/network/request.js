import axios from "axios";

export function request(config) {
  const instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  instance1.interceptors.request.use(
    req => {
      console.log(req);
      //
      if(!req.data){
        req.data = {name: '13'}
      }
      if(req.url.indexOf("?") > 0){
        req.url += "&version=2020"
      }else{
        req.url += "?version=2020"
      }
      
      return req;
    },
    err => {
      console.log(err);
    }
  );
  instance1.interceptors.response.use(result=>{
    console.log(result)
    //return result.data;//只返回data
    return result;//返回所有结果
  }, err=>{
    console.log(err)
  })

  return instance1(config); //这里就是一个promise
}
// export function request(config){

//   const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout: 5000,
//   })

//   return instance1(config)
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance1 = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     });
//     instance1(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }
