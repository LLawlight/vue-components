<template lang="html">
  <div class="z-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-row',

  props: {
    gutter: Number
  },

  computed: {
    style() {
      var ret = {};

      if (this.gutter) {
        ret.marginLeft = (- this.gutter / 2) + 'px';
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  }
};
</script>

<style lang="less">
.z-row {
  position: relative;
  height: auto;
  zoom: 1;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
