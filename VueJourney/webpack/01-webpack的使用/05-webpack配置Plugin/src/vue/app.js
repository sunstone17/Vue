export default {//导出当前module默认对象
  template: `
  <div>
    <h2>{{message}}2</h2> 
  </div>
  `,
  data() {
    return {
      message: "hello webpack",
    }
  }
}