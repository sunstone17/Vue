
//Commonjs模块化规范
const { add, mul} = require('./js/mathUtil')

console.log(add(100, 200))
console.log(mul(100, 200))

//ES6 导入
import {age , name ,height } from './js/info'
console.log(age)
console.log(name)
console.log(height)

//依赖css文件
require('./css/normal.css')

//依赖less文件
require('./css/special.less')

document.writeln('加油，sunflower')