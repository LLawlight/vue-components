<template lang="html">
  <div class="z-navbar-wraper">
    <div class="z-navbar-placeholder" :style="{height: isFixed ? navbarHeight + 'px' : ''}">
    </div>
    <div class="z-navbar" :class="{'z-navbar-fix': isFixed}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHeight: ""
    }
  },
  props: {
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.navbarHeight = this.$el.lastChild.clientHeight
  }
};
</script>

<style lang="css" scoped>
.z-navbar {
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,0.25);
  width: 100%;
}
.z-navbar-fix {
  position: fixed;
  top: 0;
  z-index: 9999;
}
</style>
