export default {
  // asyncUpdateInfo(context, payload){//上下文, 异步操作需要在action中执行
  //   setTimeout(() => {
  //     console.log(payload)
  //     context.commit('updateInfo');
  //   }, 1000);
  // }
   asyncUpdateInfo(context, payload){//上下文, 异步操作需要在action中执行
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log(payload)
        context.commit('updateInfo');
        resolve(payload + ' promise output')
      }, 1000);        
    })
  }
}