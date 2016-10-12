<template lang="html">
  <div class="z-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
};
</script>

<style lang="css" scoped>
.z-nav {
  background-color: #fff;
  padding: 10px 60px;
  box-shadow: 0 0 4px rgba(0,0,0,0.25);
  width: 100%;
}
</style>
