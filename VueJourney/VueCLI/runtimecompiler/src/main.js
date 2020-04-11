// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

const cpn = {
  template:`<div>
  <h2>我是一个组件的name</h2>
  <h3>{{name}}</h3>
</div>`,
  data(){
    return{
      name:'我是一个组件的name'
    }
  }
}
console.log(App)

/* eslint-disable no-new */
const v = new Vue({
  el: "#app",
  components: { App },
  template: '<App/>',
  //1. createelement('标签'，{标签属性}，[''])
  render(h) {
    return h("h2", { class: "box" }, 
    ["hello world", h('button', ['按钮'])
  ]);
  },
  //2. 传入组件对象
  render(h) {
    return h(App)
  },
});
console.log(v);

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(100, 200));
