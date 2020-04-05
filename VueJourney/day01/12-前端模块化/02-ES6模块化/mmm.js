//'xiao ming'
import {flag, sum} from './aaa.js'

if(flag){
  console.log('小明是天才，哈哈哈哈')
}
console.log(sum(11 , 20))

//导入变量
import {num1, height} from './aaa.js'
console.log(num1)
console.log(height)

//导入函数
import {mul} from './aaa.js'
console.log(mul(30,50))

//导入类
import {Person} from './aaa.js'
new Person().run()

import aaaaa from './aaa.js'
console.log(aaaaa)

//导入所有, *通配符，使用as起别名
import * as xiaoming from './aaa.js'
console.log(xiaoming.Person)
console.log(xiaoming.height)
console.log(xiaoming.num1)
console.log(xiaoming.mul(11,11))