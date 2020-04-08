<template>
  <div>
    <h2>我是一个component</h2>
    {{name}}
  </div>
</template>
<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: "我是一个组件的name"
    };
  }
};
</script>
<style lang="stylus" scoped></style>