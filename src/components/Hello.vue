<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>一个基于VueJS的组件库。</p>
    <i class="iconfont icon-logo"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'ZVueComponents'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
h1 {
  color: #42b983;
}
p {
  margin-top: 50px;
  margin-bottom: 0px;
}
.icon-logo {
  font-size: 400px;
  display: inline-block;
  margin-top: 50px;
  color: #42b983;
}

@media screen and (max-width: 768px) {
  .icon-logo {
    font-size: 200px;
    margin-top: 10px;
  }
}
</style>
