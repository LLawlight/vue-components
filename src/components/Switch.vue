<template lang="html">
  <div class="z-switch" :style="{width: width+'px',height: height+'px',borderRadius: height+'px',backgroundColor: isOpen ? bgc : ''}" @click="toggleSwitch">
    <div class="z-switch-button" :class="{'z-switch-button-open': isOpen}" :style="{width: height+'px',height: height+'px'}"></div>
  </div>
</template>

<script>
export default {
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
  padding: 2px;
  background-color: #ccc;
  cursor: pointer;
  position: relative;
}

.z-switch-button {
  display: inline-block;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
  left: 2px;
}

.z-switch-button-open {
  left: auto;
  right: 2px;
}
</style>
