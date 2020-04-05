var name = 'xiao ming'
var flag = 'true'

function sum(num1, num2){
  return num1 + num2
}

if(flag){
  console.log(sum(100 , 200))
}

export {
  flag,
  sum
}

export var num1 = 1000
export var height = 1.99

//导出函数
export function mul(num1, num2){
  return num1 * num2
}

//导出类

export class Person{
  run(){
    console.log('在奔跑')
  }
}

//export default, 只能有一个，import时可以任意命名
const city = '北京市'
export default city