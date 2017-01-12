<template>
  <div class="z-inputnumber">
    <span class="z-inputnumber-button" @click="decrease" :class="{'disabled': (isDecreaseDisabled || disabled)}">-</span>
    <span class="placeholder" v-if="disabled">{{value}}</span>
    <input type="text" v-model="value" @blur="checkNumber" v-else />
    <span class="z-inputnumber-button" @click="increase" :class="{'disabled': (isIncreaseDisabled || disabled)}">+</span>
  </div>
</template>

<script>
export default {
  name: 'z-inputnumber',

  data: function() {
    return {
      value: 0
    }
  },

  props: {
    initialValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  mounted: function() {
    if (this.initialValue > this.max) {
      this.value = this.max
    } else if (this.initialValue < this.min) {
      this.value = this.min
    } else {
      this.value = this.initialValue
    }
  },

  watch: {
    'value': function(val) {
      if ((val >= this.min) && (val <= this.max)) {
        this.$emit('value-change', val)
      }
    }
  },

  computed: {
    'isDecreaseDisabled': function() {
      if (this.value <= this.min) {
        return true
      } else {
        return false
      }
    },

    'isIncreaseDisabled': function() {
      if (this.value >= this.max) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    increase: function() {
      if (this.isIncreaseDisabled || this.disabled) {
        return false
      } else {
        this.value++
      }
    },

    decrease: function() {
      if (this.isDecreaseDisabled || this.disabled) {
        return false
      } else {
        this.value--
      }
    },

    checkNumber: function() {
      this.value = Number(this.value)

      if ((this.value != 0) && !Number(this.value)) {
        this.value = this.min
      }

      if (this.value >= this.max) {
        this.value = this.max
      } else if (this.value <= this.min) {
        this.value = this.min
      }
    }
  }
};
</script>

<style lang="less" scoped>
.z-inputnumber {
  font-size: 0px;
  display: inline-block;
  overflow: hidden;

  .z-inputnumber-button {
    color: #999;
    font-weight: bold;
    font-size: 24px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #999;
    float: left;
    cursor: pointer;
    user-select: none;

    &.disabled {
      cursor: not-allowed;
      color: #ccc;
    }
  }

  input {
    height: 30px;
    line-height: 30px;
    width: 48px;
    font-size: 24px;
    border-top: 1px solid #999;
    border-right: none;
    border-bottom: 1px solid #999;
    border-left: none;
    padding: 0 10px;
    text-align: center;
    float: left;
    border-radius: 0;
  }

  .placeholder {
    height: 30px;
    line-height: 30px;
    width: 48px;
    font-size: 24px;
    border-top: 1px solid #999;
    border-right: none;
    border-bottom: 1px solid #999;
    border-left: none;
    padding: 0 10px;
    text-align: center;
    float: left;
    border-radius: 0;
    color: #999;
  }
}
</style>
