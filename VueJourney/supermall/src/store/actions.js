import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
  //有复杂逻辑的放入actions中
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      let existProduct = context.state.cartList.find(item => item.iid === payload.iid);
      if(existProduct){
        //分发
        context.commit(ADD_COUNTER, existProduct)
        resolve("当前商品数量+1")
      }else{
        payload.count = 1;
        payload.checked = true;
        context.commit(ADD_TO_CART, payload)
        resolve("添加了新的商品")
      }
    })
  }
}