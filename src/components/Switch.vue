<template lang="html">
  <div class="z-switch" :class="{'is-disabled': disabled}" :style="switchStyle" @click="toggleSwitch">
    <span :style="{'line-height': height + 'px'}" v-if="onText">{{onText}}</span>
    <div class="z-switch-button" :style="switchBtnStyle"></div>
    <span :style="{'line-height': height + 'px'}" v-if="offText">{{offText}}</span>
    <input type="checkbox" :name="name" v-model="isOpen" :disabled="disabled" style="display: none;">
  </div>
</template>

<script>
export default {
  name: 'z-switch',

  data() {
    return {
      isOpen: this.defaultChecked
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    onText: String,
    offText: String,
    name:String
  },

  computed: {
    switchStyle() {
      let backgroundColor = ''
      let borderColor = ''

      if (this.disabled) {
        backgroundColor = '#999'
      }
      else if (this.isOpen) {
        backgroundColor = this.bgc
        borderColor = this.bgc
      }

      return {
        width: this.width + 'px',
        height: this.height + 'px',
        borderRadius: this.height + 'px',
        backgroundColor: backgroundColor,
        borderColor: borderColor
      }
    },

    switchBtnStyle() {
      return {
        width: this.height + 'px',
        height: this.height + 'px',
        left: this.isOpen ? ((this.width - this.height) + 'px') : (0 + 'px')
      }
    }
  },

  methods: {
    toggleSwitch: function() {
      if (this.disabled) {
        return
      }

      this.isOpen = !this.isOpen
      this.$emit('change', this.isOpen)
    }
  }
};
</script>

<style lang="less" scoped>
.z-switch {
  display: inline-block;
  background-color: #ccc;
  cursor: pointer;
  position: relative;
  border: 1px solid #eee;
  transition: background-color .2s;
  box-sizing: content-box;

  span {
    width: 50%;
    text-align: center;
    color: #fff;
    float: left;
    font-size: 12px
  }
}

.z-switch-button {
  display: inline-block;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
  transition: left .2s;
}

.z-switch.is-disabled {
  position: relative;
  cursor: not-allowed;

  .z-switch-button {
    background-color: #ccc;
  }
}
</style>
