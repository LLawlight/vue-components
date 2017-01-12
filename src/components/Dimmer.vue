<template lang="html">
  <transition name="z-dimmer">
    <div class="z-dimmer" v-if="show" @touchmove.prevent @click="clickEvent"></div>
  </transition>
</template>

<script>
export default {
  name: 'z-dimmer',

  props: {
    show: {
      type: Boolean,
      required: true
    }
  },

  watch: {
    show(val) {
      if (val) {
        this.addStyleForBody()
      }
      else {
        this.removeStyleForBody()
      }
    }
  },

  methods: {
    addStyleForBody() {
      document.querySelector('body').style.overflow = 'hidden'
      // document.querySelector('body').style.width = '100%'
      // document.querySelector('body').style.position = 'fixed'
    },

    removeStyleForBody() {
      document.querySelector('body').style.overflow = ''
      // document.querySelector('body').style.width = ''
      // document.querySelector('body').style.position = ''
    },

    clickEvent() {
      this.$emit('click-event')
    }
  }
};
</script>

<style lang="less" scoped>
.z-dimmer {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;

  &.z-dimmer-enter, &.z-dimmer-leave-active {
    opacity: 0;
  }

  &.z-dimmer-enter-active, &.z-dimmer-leave-active {
    transition: all .5s;
  }
}
</style>
