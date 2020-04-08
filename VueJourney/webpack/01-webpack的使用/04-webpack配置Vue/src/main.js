//Commonjs模块化规范
const { add, mul } = require("./js/mathUtil");

console.log(add(100, 200));
console.log(mul(100, 200));

//ES6 导入
import { age, name, height } from "./js/info";
console.log(age);
console.log(name);
console.log(height);

//依赖css文件
require("./css/normal.css");

//依赖less文件
require("./css/special.less");

document.writeln("加油，sunflower");

//导入Vue
import Vue from "vue";
//import App from './vue/app.js'//app.js导出的是默认对象，所以可以任意命名
import App from "./vue/App.vue";

//创建vue实例
new Vue({
  el: "#app",
  template: "<App/>", //这里会将index.html中的div替换掉, app本身就是根，不需要加div
  components: {
    App,
  },
});
