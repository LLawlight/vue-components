<template lang="html">
  <div class="z-switch" :style="{width: width+'px',height: height+'px',borderRadius: height+'px',backgroundColor: isOpen ? bgc : ''}" @click="toggleSwitch">
    <div class="z-switch-button" :style="{width: height+'px', height: height+'px', left: isOpen ? ((width - height) + 'px') : (0 + 'px')}"></div>
  </div>
</template>

<script>
export default {
  name: 'z-switch',
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 25
    },
    bgc: {
      type: String,
      default: "rgb(65, 184, 131)"
    }
  },
  methods: {
    toggleSwitch: function() {
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<style lang="css" scoped>
.z-switch {
  display: inline-block;
  background-color: #ccc;
  cursor: pointer;
  position: relative;
  border: 1px solid #999;
  transition: background-color .2s;
  box-sizing: content-box;
}

.z-switch-button {
  display: inline-block;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
  transition: left .2s;
}
</style>
