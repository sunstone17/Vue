
//Commonjs模块化规范
const { add, mul} = require('./mathUtil')

console.log(add(100, 200))
console.log(mul(100, 200))

//ES6 导入
import {age , name ,height } from './info'
console.log(age)
console.log(name)
console.log(height)