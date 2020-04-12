import Vue from "vue";
import App from "./App";
//import router from './router/index'
//这里router如果时一个folder的话，会默认找router下面的index
import router from "./router/index";

Vue.config.productionTip = false;

Vue.prototype.$test = () => console.log("vue prototype test");
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router, //字面量增强写法
  render: h => h(App)
});
