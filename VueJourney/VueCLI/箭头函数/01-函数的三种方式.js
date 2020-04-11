//1. function 
const sum = function sum2(num1, num2) {
  return num1 + num2;
};
console.log(sum(100, 200));
//2 字面量中
const mul = function (num1, num2) {
  return num1 * num2;
};
console.log(mul(100, 200));
//3. 箭头函数
const power = (num1) => num1 * num1;
console.log(power(100))